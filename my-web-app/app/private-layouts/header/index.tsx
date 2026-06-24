"use client"
import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  SlidersHorizontal,
  Heart,
  Bell,
  Settings,
} from 'lucide-react'
import { profileImg } from '@/app/common'

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex h-28 items-center justify-between border-b border-[#E9EEF5] px-6 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-[28px] font-extrabold tracking-tight text-[#3E5CFB]"
        >
          MORENT
        </Link>

        {/* Search */}
        <form
          className="mx-6 hidden w-full max-w-[560px] items-center md:flex"
          role="search"
        >
          <div className="relative w-full">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2F466D]">
              <Search className="h-5 w-5" strokeWidth={2} />
            </span>

            <input
              type="search"
              name="q"
              placeholder="Search something here"
              className="h-12 w-full rounded-full border border-[#E9EEF5] bg-white pl-11 pr-12 text-[15px] text-[#2F466D] placeholder-[#8A9DB8] outline-none transition focus:border-[#3E5CFB] focus:ring-2 focus:ring-[#3E5CFB]/20"
            />

            <button
              type="button"
              aria-label="Open filters"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2F466D] transition-colors hover:text-[#3E5CFB]"
            >
              <SlidersHorizontal className="h-[18px] w-[18px]" strokeWidth={2.25} />
            </button>
          </div>
        </form>

        {/* Right actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <IconCircle ariaLabel="Favorites">
            <Heart className="h-5 w-5" strokeWidth={2.2} />
          </IconCircle>

          <IconCircle ariaLabel="Notifications" dot>
            <Bell className="h-5 w-5" strokeWidth={2.2} />
          </IconCircle>

          <IconCircle ariaLabel="Settings">
            <Settings className="h-5 w-5" strokeWidth={2.2} />
          </IconCircle>

          <div className="ml-1 h-10 w-10 overflow-hidden rounded-full ring-1 ring-[#E9EEF5]">
            <Image
              src={profileImg}
              alt="Profile"
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}

function IconCircle({
  children,
  ariaLabel,
  dot = false,
}: {
  children: React.ReactNode
  ariaLabel: string
  dot?: boolean
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-[#E9EEF5] bg-white text-[#2F466D] transition-colors hover:text-[#3E5CFB]"
    >
      {children}
      {dot && (
        <span className="absolute right-0 top-0 -mr-0.5 -mt-0.5 h-2.5 w-2.5 rounded-full bg-[#FF4D2D] ring-2 ring-white" />
      )}
    </button>
  )
}