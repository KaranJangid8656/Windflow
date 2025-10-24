"use client"

import { useState } from "react"
import { Navbar } from "@/components/sidebar"
import { Analytics } from "@/components/analytics"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar currentPage="analytics" showMenu={true} />
      <main className="flex-1 overflow-auto pt-2 px-2 md:px-8 max-w-7xl w-full mx-auto">
        <Analytics />
      </main>
    </div>
  )
}
