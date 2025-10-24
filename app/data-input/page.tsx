"use client"

import { Navbar } from "@/components/sidebar"
import { DataInputPage } from "@/components/data-input-page"

export default function DataInputPageRoute() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar currentPage="data-input" showMenu={true} />
      <main className="flex-1 overflow-auto pt-2 px-2 md:px-8 max-w-7xl w-full mx-auto">
        <DataInputPage />
      </main>
    </div>
  )
}
