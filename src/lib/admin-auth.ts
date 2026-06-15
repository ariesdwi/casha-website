import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'admin-session'

export async function validateSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)

  if (!session?.value) return false

  return session.value === process.env.ADMIN_SECRET
}
