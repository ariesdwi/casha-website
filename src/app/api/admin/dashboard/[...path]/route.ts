import { NextRequest, NextResponse } from 'next/server'
import { SESSION_COOKIE } from '@/lib/admin-auth'

const API_BASE = process.env.ADMIN_API_URL ?? ''

function validateRequest(request: NextRequest): boolean {
  const cookieValue = request.cookies.get(SESSION_COOKIE)?.value
  if (!cookieValue) return false
  return cookieValue === process.env.ADMIN_SECRET
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  if (!validateRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { path } = await params
  const pathname = path.join('/')
  const searchString = request.nextUrl.searchParams.toString()
  const targetUrl = `${API_BASE}/admin/dashboard/${pathname}${searchString ? `?${searchString}` : ''}`

  try {
    const res = await fetch(targetUrl, {
      headers: { 'x-admin-secret': process.env.ADMIN_SECRET ?? '' },
      cache: 'no-store',
    })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: 'Upstream error' }, { status: 502 })
  }
}
