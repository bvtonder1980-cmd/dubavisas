"use client"

import { useRef, useState } from "react"
import { ScanLine, Loader2, CheckCircle2, AlertCircle, Upload } from "lucide-react"
import { parseMrzFromText, type MrzResult } from "@/lib/mrz"

type ScanStatus = "idle" | "scanning" | "success" | "lowConfidence" | "error"

export function PassportScanner({
  onResult,
}: {
  /** Called with parsed MRZ fields + the uploaded file when a read is usable. */
  onResult: (result: MrzResult, file: File) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [status, setStatus] = useState<ScanStatus>("idle")
  const [progress, setProgress] = useState(0)

  async function handleFile(file: File) {
    if (!file) return
    setStatus("scanning")
    setProgress(0)

    try {
      // Dynamic import keeps the ~heavy OCR bundle out of the initial page load.
      const { createWorker, PSM } = await import("tesseract.js")
      const worker = await createWorker("eng", 1, {
        logger: (m: { status: string; progress: number }) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100))
          }
        },
      })

      // Restrict to the MRZ charset for a cleaner read of the bottom two lines.
      await worker.setParameters({
        tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<",
        tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
      })

      const { data } = await worker.recognize(file)
      await worker.terminate()

      const result = parseMrzFromText(data.text)

      if (result && result.valid && result.passportNumber) {
        setStatus("success")
        onResult(result, file)
      } else if (result && result.passportNumber) {
        // Got something, but check digits didn't validate — offer it cautiously.
        setStatus("lowConfidence")
        onResult(result, file)
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.log("[v0] passport scan failed:", err)
      setStatus("error")
    }
  }

  return (
    <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
          <ScanLine className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">Scan passport to auto-fill</p>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
            Upload a clear photo of the passport photo page. Reading happens entirely on your device — the
            image never leaves your browser.
          </p>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) void handleFile(file)
            }}
          />

          {status === "idle" || status === "error" ? (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-brand bg-transparent px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand/10"
            >
              <Upload className="h-3.5 w-3.5" aria-hidden="true" />
              Upload passport photo
            </button>
          ) : null}

          {status === "scanning" ? (
            <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              Reading passport… {progress}%
            </p>
          ) : null}

          {status === "success" ? (
            <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-success">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              Details read successfully — please double-check them below.
            </p>
          ) : null}

          {status === "lowConfidence" ? (
            <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-foreground">
              <AlertCircle className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              We filled in what we could read — please carefully verify every field below.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              We couldn&apos;t read the passport automatically. Please enter the details manually below.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
