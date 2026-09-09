"use client"

import { useRef, useState } from "react"
import { UploadCloud, FileCheck2, X, Clock } from "lucide-react"
import type { UploadedDoc } from "@/lib/application"

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function DocUpload({
  label,
  hint,
  accept = "image/*,application/pdf",
  doc,
  onChange,
  required,
  className,
  deferred,
  onDeferChange,
}: {
  label: string
  hint?: string
  accept?: string
  doc?: UploadedDoc
  onChange: (doc: UploadedDoc | undefined) => void
  required?: boolean
  className?: string
  deferred?: boolean
  onDeferChange?: (value: boolean) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  function handleFile(file: File | undefined) {
    if (!file) return
    if (doc?.previewUrl) URL.revokeObjectURL(doc.previewUrl)
    onChange({
      name: file.name,
      size: file.size,
      type: file.type,
      previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
    })
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files?.[0])
  }

  function remove() {
    if (doc?.previewUrl) URL.revokeObjectURL(doc.previewUrl)
    onChange(undefined)
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <div className={`rounded-2xl border border-border bg-card p-4 ${className ?? ""}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {label}
            {required ? <span className="ml-1 text-danger">*</span> : null}
          </p>
          {hint ? <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{hint}</p> : null}
        </div>
        {doc?.previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={doc.previewUrl || "/placeholder.svg"}
            alt=""
            className="h-12 w-12 shrink-0 rounded-lg object-cover"
          />
        ) : null}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {doc ? (
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2">
          <FileCheck2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
          <span className="min-w-0 flex-1 truncate text-xs font-medium text-foreground">{doc.name}</span>
          <span className="shrink-0 text-[11px] text-muted-foreground">{formatSize(doc.size)}</span>
          <button
            type="button"
            onClick={remove}
            className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            aria-label={`Remove ${label}`}
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      ) : deferred ? (
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-warning/50 bg-warning-soft px-3 py-2.5">
          <Clock className="h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
          <span className="text-xs font-medium text-foreground">
            You&apos;ve chosen to upload this later.
          </span>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`mt-3 flex w-full flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed py-4 text-xs font-semibold transition-colors ${
            dragging
              ? "border-brand bg-brand/5 text-brand"
              : "border-border bg-background text-ink-muted hover:border-brand hover:text-brand"
          }`}
        >
          <UploadCloud className="h-5 w-5" aria-hidden="true" />
          {dragging ? "Drop file here" : "Drag & drop or click to choose"}
        </button>
      )}

      {onDeferChange && !doc ? (
        <label className="mt-3 flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground">
          <input
            type="checkbox"
            checked={Boolean(deferred)}
            onChange={(e) => onDeferChange(e.target.checked)}
            className="h-4 w-4 rounded border-border text-brand accent-brand"
          />
          I will upload this later
        </label>
      ) : null}
    </div>
  )
}
