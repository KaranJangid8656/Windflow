"use client"

import { Navbar } from "@/components/sidebar"
import { Performance } from "@/components/performance"

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar currentPage="performance" showMenu={true} />
      <main className="flex-1 overflow-auto pt-2 px-2 md:px-8 max-w-7xl w-full mx-auto">
        <Performance />
      </main>
    </div>
  )
}
