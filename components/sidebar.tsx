"use client"

import { LayoutDashboard, BarChart3, Wrench, Zap, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  currentPage?: string
  onPageChange?: (page: string) => void
  showMenu?: boolean
}

export function Navbar({ currentPage, onPageChange, showMenu = true }: SidebarProps) {
  const pathname = usePathname()
  const activePage = currentPage || pathname.replace("/", "") || "dashboard"
  const menuItems = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "analytics", label: "Analytics", href: "/analytics" },
    { id: "performance", label: "Performance", href: "/performance" },
    { id: "maintenance", label: "Maintenance", href: "/maintenance" },
    { id: "data-input", label: "Data Input", href: "/data-input" },
  ];

  return (
    <>
    <nav className="bg-white border-b border-sidebar-border shadow px-8 py-3 flex items-center justify-between max-w-screen-2xl mx-16 mt-4 rounded-3xl">
      {/* Logo and title */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl ring-2 ring-blue-300/50 bg-white overflow-hidden">
            <img src="https://res.cloudinary.com/dx9bvma03/image/upload/v1761333127/wind-turbine-logo-design-vector-art-illustration_761413-29479_wbczz9.avif" alt="Wind Turbine Logo" className="object-contain w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sidebar-foreground tracking-tight">WindFlow</h1>
            <p className="text-xs text-sidebar-foreground/60 font-medium">Turbine Monitor</p>
          </div>
        </Link>
      </div>
      {/* Nav items */}
      {showMenu ? (
        <div className="flex gap-6 md:gap-8 lg:gap-10">
          {menuItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`cursor-pointer text-sm font-semibold px-2 py-1 rounded-md transition-colors duration-150 select-none ${
                  isActive ? "text-blue-700" : "text-gray-700 hover:text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex gap-6 md:gap-8 lg:gap-10">
          <Link href="/dashboard" className="text-sm font-semibold text-gray-700 hover:text-blue-600">Dashboard</Link>
          <a href="#features" className="text-sm font-semibold text-gray-700 hover:text-blue-600">Features</a>
          <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-blue-600">About</a>
        </div>
      )}
    </nav>
    </>
  );
}

