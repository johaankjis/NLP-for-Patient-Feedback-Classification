"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const regions = ["Region A", "Region B", "Region C", "Region D"]
const categories = ["Access", "Cost", "Adherence", "Experience", "Safety"]

// Mock heatmap data (0-100 scale)
const heatmapData = [
  [45, 67, 23, 89, 12], // Region A
  [78, 34, 56, 45, 28], // Region B
  [23, 89, 67, 34, 45], // Region C
  [56, 45, 34, 78, 67], // Region D
]

function getColorIntensity(value: number) {
  if (value >= 75) return "bg-chart-3"
  if (value >= 50) return "bg-chart-1"
  if (value >= 25) return "bg-chart-2"
  return "bg-muted"
}

export function CategoryHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Regional Category Heatmap</CardTitle>
        <CardDescription>Feedback intensity by region and category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-6 gap-2 text-xs font-medium">
            <div></div>
            {categories.map((cat) => (
              <div key={cat} className="text-center text-muted-foreground">
                {cat}
              </div>
            ))}
          </div>
          {regions.map((region, regionIdx) => (
            <div key={region} className="grid grid-cols-6 gap-2">
              <div className="text-xs font-medium text-muted-foreground flex items-center">{region}</div>
              {heatmapData[regionIdx].map((value, catIdx) => (
                <div
                  key={catIdx}
                  className={`h-12 rounded flex items-center justify-center text-xs font-medium ${getColorIntensity(value)}`}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
          <div className="flex items-center justify-end gap-4 text-xs text-muted-foreground pt-2">
            <span>Low</span>
            <div className="flex gap-1">
              <div className="h-4 w-4 rounded bg-muted" />
              <div className="h-4 w-4 rounded bg-chart-2" />
              <div className="h-4 w-4 rounded bg-chart-1" />
              <div className="h-4 w-4 rounded bg-chart-3" />
            </div>
            <span>High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
