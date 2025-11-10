'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Calendar,
  RefreshCw,
  User,
  Settings,
  MessageSquare,
  CreditCard,
  Gift,
  LogOut,
} from 'lucide-react'

interface SidebarProps {
  userName?: string
  userEmail?: string
}

export default function Sidebar({ userName = 'John Anderson', userEmail = 'john@email.com' }: SidebarProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/book-appointment', label: 'Book Appointment', icon: Calendar },
    { href: '/queue-status', label: 'Queue Status', icon: RefreshCw },
    { href: '/barbers', label: 'Barbers', icon: User },
    { href: '/settings', label: 'Settings', icon: Settings },
    { href: '/feedback', label: 'Feedback', icon: MessageSquare },
    { href: '/payment', label: 'Payment', icon: CreditCard },
    { href: '/loyalty', label: 'Loyalty Rewards', icon: Gift },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#1A1A2E] text-white flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-[#D4AF37] rounded flex items-center justify-center">
          <span className="text-white font-bold text-xl">✂</span>
        </div>
        <span className="text-xl font-bold">Mr. Barber</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? 'bg-[#D4AF37] text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
            {userName.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-gray-400">{userEmail}</p>
          </div>
          <LogOut size={18} className="text-gray-400 cursor-pointer hover:text-white" />
        </div>
      </div>
    </aside>
  )
}

