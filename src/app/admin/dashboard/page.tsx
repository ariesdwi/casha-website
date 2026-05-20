'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {
  Users,
  TrendingUp,
  DollarSign,
  Wallet,
  LogOut,
  RefreshCw,
  Activity,
  ShoppingCart,
  BarChart2,
  Menu,
  X,
  ArrowUpRight,
  Clock,
  Tag,
} from 'lucide-react'
import cashaIcon from '../../assets/icons/casha-icon.png'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Overview {
  totalUsers: number
  totalTransactions: number
  totalIncome: number
  totalAssets: number
}

interface GrowthPoint {
  period: string
  count: number
}

interface VolumePoint {
  period: string
  count: number
  totalAmount: number
}

interface TopUser {
  userId: string
  email: string
  name: string
  transactionCount: number
  totalAmount: number
  lastTransaction: string
}

interface EngagedUser {
  userId: string
  email: string
  name: string
  transactionCount: number
  daysActive: number
  avgPerWeek: number
  firstTransaction: string
  lastTransaction: string
}

interface Category {
  category: string
  transactionCount: number
  totalAmount: number
  userCount: number
}

interface RecentActivity {
  id: string
  name: string
  amount: number
  currency: string
  datetime: string
  userEmail: string
  userName: string
  category: string
}

// ─── API helper ───────────────────────────────────────────────────────────────

async function fetchDashboard<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T> {
  const url = new URL(`/api/admin/dashboard/${endpoint}`, window.location.origin)
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
  }
  const res = await fetch(url.toString())
  if (res.status === 401) throw new Error('UNAUTHORIZED')
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  const json = await res.json()
  return json.data ?? json
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function fmt(n: number): string {
  return new Intl.NumberFormat('id-ID').format(n)
}

function fmtCurrency(amount: number, currency = 'IDR'): string {
  try {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency,
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(amount)
  } catch {
    return `${currency} ${fmt(amount)}`
  }
}

function fmtDate(dateStr: string): string {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function fmtDateTime(dateStr: string): string {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// ─── Bar Chart ────────────────────────────────────────────────────────────────

function BarChart({
  data,
  valueKey,
  labelKey = 'period',
}: {
  data: Record<string, number | string>[]
  valueKey: string
  labelKey?: string
}) {
  if (!data.length) return <p className="text-sm text-gray-400 py-8 text-center">No data</p>
  const values = data.map((d) => Number(d[valueKey]))
  const max = Math.max(...values, 1)

  return (
    <div className="flex items-end gap-1 h-36 pt-2">
      {data.map((d, i) => {
        const pct = Math.max((values[i] / max) * 100, 2)
        return (
          <div key={i} className="flex flex-col items-center flex-1 min-w-0 group cursor-default">
            <div className="relative w-full">
              <div
                className="w-full bg-green-500 group-hover:bg-green-400 rounded-t-sm transition-all duration-200"
                style={{ height: `${(pct / 100) * 112}px` }}
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-1.5 py-0.5 whitespace-nowrap z-10">
                {fmt(values[i])}
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1 truncate w-full text-center">
              {String(d[labelKey] ?? '').slice(-5)}
            </span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string
  value: string | number
  icon: React.ElementType
  color: string
}) {
  const colorMap: Record<string, string> = {
    green: 'bg-green-50 text-green-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  }
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{typeof value === 'number' ? fmt(value) : value}</p>
        </div>
        <div className={`p-2.5 rounded-xl ${colorMap[color] ?? colorMap.green}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const NAV = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'transactions', label: 'Transactions', icon: ShoppingCart },
]

function Sidebar({
  active,
  onSelect,
  onLogout,
  open,
  onClose,
}: {
  active: string
  onSelect: (id: string) => void
  onLogout: () => void
  open: boolean
  onClose: () => void
}) {
  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-gray-100 shadow-lg z-30 flex flex-col transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:shadow-none`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-100">
          <Image src={cashaIcon} alt="Casha" width={36} height={36} className="w-9 h-9" />
          <div>
            <p className="font-bold text-green-700 leading-none">Casha</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
          <button className="ml-auto lg:hidden" onClick={onClose}>
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { onSelect(id); onClose() }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                ${active === id
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-gray-100">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  )
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab({
  overview,
  userGrowth,
  txVolume,
  recentActivity,
}: {
  overview: Overview | null
  userGrowth: GrowthPoint[]
  txVolume: VolumePoint[]
  recentActivity: RecentActivity[]
}) {
  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Users" value={overview?.totalUsers ?? 0} icon={Users} color="green" />
        <StatCard label="Total Transactions" value={overview?.totalTransactions ?? 0} icon={TrendingUp} color="blue" />
        <StatCard label="Total Income" value={overview?.totalIncome ?? 0} icon={DollarSign} color="purple" />
        <StatCard label="Total Assets" value={overview?.totalAssets ?? 0} icon={Wallet} color="orange" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900">User Growth</h3>
            <span className="text-xs text-gray-400">Monthly</span>
          </div>
          <p className="text-xs text-gray-400 mb-2">New users per period</p>
          <BarChart data={userGrowth as unknown as Record<string, number | string>[]} valueKey="count" />
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900">Transaction Volume</h3>
            <span className="text-xs text-gray-400">Monthly</span>
          </div>
          <p className="text-xs text-gray-400 mb-2">Transactions per period</p>
          <BarChart data={txVolume as unknown as Record<string, number | string>[]} valueKey="count" />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-400" />
          <h3 className="font-semibold text-gray-900">Recent Activity</h3>
          <span className="ml-auto text-xs text-gray-400">{recentActivity.length} transactions</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Transaction</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">User</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Category</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Amount</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentActivity.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">No data</td>
                </tr>
              ) : (
                recentActivity.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-gray-900 max-w-[160px] truncate">{item.name}</td>
                    <td className="px-5 py-3 text-gray-600 max-w-[160px] truncate">{item.userName || item.userEmail}</td>
                    <td className="px-5 py-3">
                      <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {item.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900">
                      {fmtCurrency(item.amount, item.currency)}
                    </td>
                    <td className="px-5 py-3 text-right text-gray-400 whitespace-nowrap">
                      {fmtDateTime(item.datetime)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ─── Users Tab ────────────────────────────────────────────────────────────────

function UsersTab({
  topUsers,
  engagement,
}: {
  topUsers: TopUser[]
  engagement: EngagedUser[]
}) {
  return (
    <div className="space-y-6">
      {/* Top Users */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900">Top Users</h3>
          <span className="ml-auto text-xs text-gray-400">by total amount</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">#</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">User</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Transactions</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Total Amount</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {topUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">No data</td>
                </tr>
              ) : (
                topUsers.map((user, i) => (
                  <tr key={user.userId} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 text-gray-400 font-medium">{i + 1}</td>
                    <td className="px-5 py-3">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate max-w-[200px]">{user.email}</p>
                    </td>
                    <td className="px-5 py-3 text-right text-gray-700">{fmt(user.transactionCount)}</td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900">
                      {fmtCurrency(user.totalAmount)}
                    </td>
                    <td className="px-5 py-3 text-right text-gray-400 whitespace-nowrap">
                      {fmtDate(user.lastTransaction)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Engagement */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <BarChart2 className="w-4 h-4 text-blue-500" />
          <h3 className="font-semibold text-gray-900">User Engagement</h3>
          <span className="ml-auto text-xs text-gray-400">{engagement.length} users</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">User</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Transactions</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Days Active</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Avg / Week</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">First Tx</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Last Tx</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {engagement.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">No data</td>
                </tr>
              ) : (
                engagement.map((user) => (
                  <tr key={user.userId} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate max-w-[180px]">{user.email}</p>
                    </td>
                    <td className="px-5 py-3 text-right text-gray-700">{fmt(user.transactionCount)}</td>
                    <td className="px-5 py-3 text-right text-gray-700">{user.daysActive}d</td>
                    <td className="px-5 py-3 text-right">
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                        {user.avgPerWeek.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right text-gray-400 whitespace-nowrap">
                      {fmtDate(user.firstTransaction)}
                    </td>
                    <td className="px-5 py-3 text-right text-gray-400 whitespace-nowrap">
                      {fmtDate(user.lastTransaction)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ─── Transactions Tab ─────────────────────────────────────────────────────────

function TransactionsTab({ categories }: { categories: Category[] }) {
  const maxAmount = Math.max(...categories.map((c) => c.totalAmount), 1)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Tag className="w-4 h-4 text-purple-500" />
          <h3 className="font-semibold text-gray-900">Category Breakdown</h3>
          <span className="ml-auto text-xs text-gray-400">{categories.length} categories</span>
        </div>

        {/* Visual bars */}
        <div className="px-5 py-4 space-y-3 border-b border-gray-100">
          {categories.slice(0, 8).map((cat) => (
            <div key={cat.category}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{cat.category}</span>
                <span className="text-gray-500">{fmtCurrency(cat.totalAmount)}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${(cat.totalAmount / maxAmount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-medium text-gray-500">Category</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Transactions</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Total Amount</th>
                <th className="text-right px-5 py-3 text-xs font-medium text-gray-500">Users</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-400">No data</td>
                </tr>
              ) : (
                categories.map((cat) => (
                  <tr key={cat.category} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-gray-900">{cat.category}</td>
                    <td className="px-5 py-3 text-right text-gray-700">{fmt(cat.transactionCount)}</td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900">
                      {fmtCurrency(cat.totalAmount)}
                    </td>
                    <td className="px-5 py-3 text-right text-gray-600">{fmt(cat.userCount)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [overview, setOverview] = useState<Overview | null>(null)
  const [userGrowth, setUserGrowth] = useState<GrowthPoint[]>([])
  const [txVolume, setTxVolume] = useState<VolumePoint[]>([])
  const [topUsers, setTopUsers] = useState<TopUser[]>([])
  const [engagement, setEngagement] = useState<EngagedUser[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const loadData = useCallback(async (silent = false) => {
    if (!silent) setLoading(true)
    else setRefreshing(true)
    setError(null)

    try {
      const [ov, ug, tv, tu, eng, cat, ra] = await Promise.all([
        fetchDashboard<Overview>('overview'),
        fetchDashboard<GrowthPoint[]>('user-growth', { period: 'month', limit: '8' }),
        fetchDashboard<VolumePoint[]>('transaction-volume', { period: 'month', limit: '8' }),
        fetchDashboard<TopUser[]>('top-users', { limit: '10' }),
        fetchDashboard<EngagedUser[]>('user-engagement'),
        fetchDashboard<Category[]>('category-breakdown', { limit: '15' }),
        fetchDashboard<RecentActivity[]>('recent-activity', { limit: '20' }),
      ])
      const toArr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : [])
      setOverview(ov && typeof ov === 'object' && !Array.isArray(ov) ? ov : null)
      setUserGrowth(toArr<GrowthPoint>(ug))
      setTxVolume(toArr<VolumePoint>(tv))
      setTopUsers(toArr<TopUser>(tu))
      setEngagement(toArr<EngagedUser>(eng))
      setCategories(toArr<Category>(cat))
      setRecentActivity(toArr<RecentActivity>(ra))
      setLastUpdated(new Date())
    } catch (err) {
      if (err instanceof Error && err.message === 'UNAUTHORIZED') {
        router.push('/admin/login')
        return
      }
      setError('Failed to load dashboard data. Check your API configuration.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [router])

  useEffect(() => {
    loadData()
  }, [loadData])

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  const tabLabel = NAV.find((n) => n.id === activeTab)?.label ?? ''

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-500 text-sm">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-sm">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-gray-800 font-medium mb-2">Dashboard Error</p>
          <p className="text-gray-500 text-sm mb-4">{error}</p>
          <button
            onClick={() => loadData()}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        active={activeTab}
        onSelect={setActiveTab}
        onLogout={handleLogout}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 px-4 lg:px-6 py-3.5 flex items-center gap-3 sticky top-0 z-10">
          <button
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="font-semibold text-gray-900 text-sm lg:text-base">{tabLabel}</h1>
            {lastUpdated && (
              <p className="text-xs text-gray-400">
                Updated {lastUpdated.toLocaleTimeString('id-ID')}
              </p>
            )}
          </div>
          <button
            onClick={() => loadData(true)}
            disabled={refreshing}
            className="ml-auto flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 px-3 py-1.5 rounded-lg hover:bg-green-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {activeTab === 'overview' && (
            <OverviewTab
              overview={overview}
              userGrowth={userGrowth}
              txVolume={txVolume}
              recentActivity={recentActivity}
            />
          )}
          {activeTab === 'users' && (
            <UsersTab topUsers={topUsers} engagement={engagement} />
          )}
          {activeTab === 'transactions' && (
            <TransactionsTab categories={categories} />
          )}
        </main>
      </div>
    </div>
  )
}
