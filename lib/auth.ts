/**
 * Account auth model and the SINGLE swappable auth functions. This build is
 * UI-only: `registerAccount` and `loginAccount` simulate the calls and return
 * a fake authenticated user. When the site moves to its own server + database,
 * replace the bodies below with real requests — nothing else in the UI changes.
 */

export type AuthUser = {
  email: string
  fullName: string
  phone: string
}

export type AuthResult = { ok: true; user: AuthUser } | { ok: false; error: string }

/**
 * ⬇⬇⬇  SWAPPABLE REGISTRATION POINT  ⬇⬇⬇
 *
 * Replace the body with a real request when hosting on your own server, e.g.:
 *
 *   const res = await fetch("/api/auth/register", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(input),
 *   })
 *   const data = await res.json()
 *   if (!res.ok) return { ok: false, error: data.message ?? "Registration failed" }
 *   return { ok: true, user: data.user }
 */
export async function registerAccount(input: {
  fullName: string
  email: string
  phone: string
  password: string
}): Promise<AuthResult> {
  await new Promise((resolve) => setTimeout(resolve, 900))

  console.log("[v0] registerAccount (stub) — profile created:", {
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
  })

  return {
    ok: true,
    user: { email: input.email, fullName: input.fullName, phone: input.phone },
  }
}

/**
 * ⬇⬇⬇  SWAPPABLE LOGIN POINT  ⬇⬇⬇
 *
 * Replace the body with a real request when hosting on your own server, e.g.:
 *
 *   const res = await fetch("/api/auth/login", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(input),
 *   })
 *   const data = await res.json()
 *   if (!res.ok) return { ok: false, error: data.message ?? "Invalid email or password" }
 *   return { ok: true, user: data.user }
 */
export async function loginAccount(input: {
  email: string
  password: string
}): Promise<AuthResult> {
  await new Promise((resolve) => setTimeout(resolve, 900))

  console.log("[v0] loginAccount (stub) — returning customer signed in:", {
    email: input.email,
  })

  // Stub: derive a friendly name from the email local-part until the real
  // backend returns the stored profile.
  const namePart = input.email.split("@")[0]?.replace(/[._-]+/g, " ").trim() || "Traveller"
  const fullName = namePart.replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    ok: true,
    user: { email: input.email, fullName, phone: "" },
  }
}
