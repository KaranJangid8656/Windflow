"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { generateMockData } from "@/lib/mock-data"

interface MockData {
  windSpeed: number
  maxWindSpeed: number
  minWindSpeed: number
  power: number
  maxPower: number
  minPower: number
  pitch: number
  rotorRPM: number
  genRPM: number
  nacelTemp: number
  gearOilTemp: number
  genTemp: number
  genBearTemp: number
  environTemp: number
  status: string
}

export default function DashboardPage() {
  const [data, setData] = useState<MockData | null>(null)

  useEffect(() => {
    setData(generateMockData())
    const interval = setInterval(() => {
      setData(generateMockData())
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar currentPage="dashboard" showMenu={true} />
      <main className="flex-1 overflow-auto pt-2 px-2 md:px-8 max-w-7xl w-full mx-auto">
        <Dashboard data={data} />
      </main>
    </div>
  )
}
