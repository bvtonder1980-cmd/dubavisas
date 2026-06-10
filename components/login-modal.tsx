"use client"

import { Modal } from "@/components/modal"
import { UserPlus, LockOpen } from "lucide-react"

export function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Log In">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onClose()
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-ink">
            Email address
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="name@example.com"
            required
            className="w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-ink">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="**********"
            required
            className="w-full rounded border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>
        <div className="text-center text-sm">
          <a href="#" className="text-success hover:underline">
            Have you forgotten your password?
          </a>
        </div>
        <div className="flex gap-2 border-t border-neutral-200 pt-4">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded border border-neutral-300 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-surface"
          >
            <UserPlus size={16} />
            Need an account?
          </button>
          <button
            type="submit"
            className="flex flex-1 items-center justify-center gap-2 rounded bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
          >
            <LockOpen size={16} />
            Log In
          </button>
        </div>
      </form>
    </Modal>
  )
}
