"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"

const data = [
  { date: "Week 1", Access: 2400, Cost: 1398, Adherence: 980, Experience: 3200, Safety: 600 },
  { date: "Week 2", Access: 2210, Cost: 1800, Adherence: 1100, Experience: 3100, Safety: 650 },
  { date: "Week 3", Access: 2290, Cost: 1600, Adherence: 1050, Experience: 3400, Safety: 580 },
  { date: "Week 4", Access: 2780, Cost: 1908, Adherence: 1200, Experience: 3600, Safety: 720 },
  { date: "Week 5", Access: 2890, Cost: 2200, Adherence: 1300, Experience: 3800, Safety: 690 },
  { date: "Week 6", Access: 2390, Cost: 2500, Adherence: 1150, Experience: 3500, Safety: 750 },
  { date: "Week 7", Access: 2490, Cost: 2100, Adherence: 1280, Experience: 3700, Safety: 680 },
  { date: "Week 8", Access: 2900, Cost: 1950, Adherence: 1320, Experience: 3650, Safety: 730 },
]

export function TrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Trends Over Time</CardTitle>
        <CardDescription>Weekly feedback volume by category</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorAccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-3))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-3))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExperience" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="Experience"
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#colorExperience)"
            />
            <Area
              type="monotone"
              dataKey="Access"
              stroke="hsl(var(--chart-2))"
              fillOpacity={1}
              fill="url(#colorAccess)"
            />
            <Area type="monotone" dataKey="Cost" stroke="hsl(var(--chart-3))" fillOpacity={1} fill="url(#colorCost)" />
            <Area
              type="monotone"
              dataKey="Adherence"
              stroke="hsl(var(--chart-4))"
              fillOpacity={0.6}
              fill="hsl(var(--chart-4))"
            />
            <Area
              type="monotone"
              dataKey="Safety"
              stroke="hsl(var(--chart-5))"
              fillOpacity={0.6}
              fill="hsl(var(--chart-5))"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
