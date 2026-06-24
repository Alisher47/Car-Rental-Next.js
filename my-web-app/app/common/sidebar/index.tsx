'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Car,
  BarChart2,
  Receipt,
  MessageSquare,
  Calendar,
  Settings,
  CircleHelp,
  Sun,
  Moon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Item = {
  label: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const MAIN: Item[] = [
  { label: 'Dashboard', href: '/private-layouts/dashboard', icon: Home },
  { label: 'Car Rent', href: '/private-layouts/cars', icon: Car },
  { label: 'Insight', href: '/private-layouts/insights', icon: BarChart2 },
  { label: 'Reimburse', href: '/private-layouts/reimburse', icon: Receipt },
  { label: 'Inbox', href: '/private-layouts/inbox', icon: MessageSquare },
  { label: 'Calender', href: '/private-layouts/calendar', icon: Calendar },
]

const PREFS: Item[] = [
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Help & Center', href: '/help', icon: CircleHelp },
]

  function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
      <div className="px-4 pb-3 pt-6 text-[11px] font-semibold uppercase tracking-menu" style={{ color: '#90A3BF' }}>
        {children}
      </div>
    )
  }
  
function NavItem({ item, active }: { item: Item; active: boolean }) {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className={clsx(
        'group mx-3 mb-2 flex h-12 items-center gap-3 rounded-xl px-3 text-menu transition-colors',
        active
          ? 'bg-[#3563E9] text-white shadow'
          : 'text-ink-500 hover:bg-[#E8EEFF] hover:text-[#3563E9]'
      )}
    >
      <div
        className={clsx(
          'grid size-8 shrink-0 place-items-center rounded-lg transition-colors',
          active ? 'bg-white/20 text-white' : 'text-gray-400'
        )}
      >
        <Icon strokeWidth={1.75} className="size-5" />
      </div>
      <span className="font-medium">{item.label}</span>
    </Link>
  )
}

function ModeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = (theme ?? resolvedTheme) === 'dark'

  return (
    <div className="mx-3 mb-2 flex h-12 items-center justify-between rounded-xl px-3 text-menu text-ink-500">
      <div className="flex items-center gap-3">
        <div className="grid size-8 place-items-center rounded-lg text-ink-400">
          <Settings strokeWidth={1.75} className="size-5" />
        </div>
        <span className="font-medium">Dark Mode</span>
      </div>

      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className={clsx(
          'relative flex h-8 w-[64px] items-center rounded-full bg-gray-100 p-1 transition-colors',
          'dark:bg-neutral-800'
        )}
        aria-label="Toggle dark mode"
      >
        <div
          className={clsx(
            'absolute inset-y-1 w-7 rounded-full transition-[left,background-color]',
            isDark ? 'left-[34px] bg-[#3563E9]' : 'left-1 bg-[#3563E9]'
          )}
        />
        <div className="z-10 grid size-6 place-items-center text-gray-500">
          <Sun className="size-4" />
        </div>
        <div className="z-10 ml-auto grid size-6 place-items-center text-gray-500">
          <Moon className="size-4" />
        </div>
      </button>
    </div>
  )
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[280px] border-r border-gray-100 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="pt-8">
        <SectionLabel>Main Menu</SectionLabel>
        <nav className="mb-4">
          {MAIN.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              active={pathname?.startsWith(item.href) ?? false}
            />
          ))}
        </nav>

        <SectionLabel>Preferences</SectionLabel>
        <nav className="mb-4">
          {PREFS.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              active={pathname?.startsWith(item.href) ?? false}
            />
          ))}
          <ModeSwitch />
        </nav>
      </div>
    </aside>
  )
}
