import { NextResponse } from 'next/server'
import { createSession, destroySession } from '@/lib/admin-auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password } = body as { password?: string }

    if (!password || !process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    await createSession()
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}

export async function DELETE() {
  await destroySession()
  return NextResponse.json({ success: true })
}
