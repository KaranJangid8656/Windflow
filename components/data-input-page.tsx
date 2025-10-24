"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
} from "recharts"
import { Upload, TrendingUp } from "lucide-react"

const PARAMETERS = [
  "WindSpeed",
  "StdDevWindSpeed",
  "WindDirAbs",
  "WindDirRel",
  "Power",
  "MaxPower",
  "MinPower",
  "StdDevPower",
  "AvgRPow",
  "Pitch",
  "GenRPM",
  "RotorRPM",
  "EnvirTemp",
  "NacelTemp",
  "GearOilTemp",
  "GearBearTemp",
  "GenTemp",
  "GenPh1Temp",
  "GenPh2Temp",
  "GenPh3Temp",
  "GenBearTemp",
  "Timestamp",
]

const generateSampleData = () => {
  return Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    WindSpeed: Math.random() * 15 + 5,
    Power: Math.random() * 2500 + 500,
    GenTemp: Math.random() * 40 + 20,
    RotorRPM: Math.random() * 15 + 5,
    Pitch: Math.random() * 90,
    EnvirTemp: Math.random() * 25 + 5,
  }))
}

export function DataInputPage() {
  const [csvData, setCsvData] = useState<any[]>([])
  const [selectedXAxis, setSelectedXAxis] = useState<string>("WindSpeed")
  const [selectedYAxis, setSelectedYAxis] = useState<string>("Power")
  const [selectedChartType, setSelectedChartType] = useState<string>("line")
  const [sampleData] = useState(generateSampleData())

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      const lines = text.split("\n")
      const headers = lines[0].split(",")
      const data = lines.slice(1).map((line) => {
        const values = line.split(",")
        const obj: any = {}
        headers.forEach((header, index) => {
          obj[header.trim()] = isNaN(Number(values[index])) ? values[index] : Number(values[index])
        })
        return obj
      })
      setCsvData(data.filter((d) => Object.keys(d).length > 0))
    }
    reader.readAsText(file)
  }

  const renderChart = () => {
    const data = csvData.length > 0 ? csvData : sampleData
    const chartProps = {
      data,
      margin: { top: 5, right: 30, left: 0, bottom: 5 },
    }

    switch (selectedChartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart {...chartProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={selectedXAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={selectedYAxis} fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        )
      case "scatter":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart {...chartProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={selectedXAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Scatter dataKey={selectedYAxis} fill="#0ea5e9" />
            </ScatterChart>
          </ResponsiveContainer>
        )
      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart {...chartProps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={selectedXAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={selectedYAxis} stroke="#0ea5e9" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        )
    }
  }

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Data Analysis</h1>
        <p className="text-muted-foreground">Upload CSV data and visualize turbine parameters</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* CSV Upload Card */}
        <Card className="lg:col-span-1 border-2 border-dashed hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload CSV
            </CardTitle>
            <CardDescription>Import turbine data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <input
                type="file"
                accept=".csv"
                onChange={handleCSVUpload}
                className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {csvData.length > 0 && (
                <p className="text-sm text-green-600 font-medium">✓ {csvData.length} records loaded</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Parameter Selection Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Visualization Settings
            </CardTitle>
            <CardDescription>Select parameters and chart type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {/* X-Axis Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">X-Axis Parameter</label>
                <Select value={selectedXAxis} onValueChange={setSelectedXAxis}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PARAMETERS.map((param) => (
                      <SelectItem key={param} value={param}>
                        {param}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Y-Axis Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Y-Axis Parameter</label>
                <Select value={selectedYAxis} onValueChange={setSelectedYAxis}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PARAMETERS.map((param) => (
                      <SelectItem key={param} value={param}>
                        {param}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Chart Type Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Chart Type</label>
                <Select value={selectedChartType} onValueChange={setSelectedChartType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="line">Line Chart</SelectItem>
                    <SelectItem value="bar">Bar Chart</SelectItem>
                    <SelectItem value="scatter">Scatter Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualization Card */}
      <Card>
        <CardHeader>
          <CardTitle>Data Visualization</CardTitle>
          <CardDescription>{csvData.length > 0 ? "Showing uploaded data" : "Showing sample data"}</CardDescription>
        </CardHeader>
        <CardContent>{renderChart()}</CardContent>
      </Card>

      {/* Data Table Preview */}
      {csvData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Data Preview</CardTitle>
            <CardDescription>First 10 records from uploaded file</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    {Object.keys(csvData[0]).map((key) => (
                      <th key={key} className="text-left py-2 px-4 font-semibold">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.slice(0, 10).map((row, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/50">
                      {Object.values(row).map((val, i) => (
                        <td key={i} className="py-2 px-4">
                          {String(val).substring(0, 20)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
