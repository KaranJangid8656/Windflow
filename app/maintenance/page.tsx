"use client"

import { Navbar } from "@/components/sidebar"
import { Maintenance } from "@/components/maintenance"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar currentPage="maintenance" showMenu={true} />
      <main className="flex-1 overflow-auto pt-2 px-2 md:px-8 max-w-7xl w-full mx-auto">
        <Maintenance />
      </main>
    </div>
  )
}
