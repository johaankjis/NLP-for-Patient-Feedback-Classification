"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CategoryDistribution } from "@/components/category-distribution"
import { TrendChart } from "@/components/trend-chart"
import { FeedbackTable } from "@/components/feedback-table"
import { MetricsCards } from "@/components/metrics-cards"
import { CategoryHeatmap } from "@/components/category-heatmap"
import { Activity, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react"

export default function DashboardPage() {
  const [feedback, setFeedback] = useState("")
  const [classifiedCategory, setClassifiedCategory] = useState<string | null>(null)
  const [isClassifying, setIsClassifying] = useState(false)

  const handleClassify = async () => {
    if (!feedback.trim()) return

    setIsClassifying(true)
    // Simulate classification
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Simple mock classification based on keywords
    const categories = ["Access", "Cost", "Adherence", "Experience", "Safety"]
    let category = "Experience" // default

    if (
      feedback.toLowerCase().includes("cost") ||
      feedback.toLowerCase().includes("expensive") ||
      feedback.toLowerCase().includes("price")
    ) {
      category = "Cost"
    } else if (
      feedback.toLowerCase().includes("access") ||
      feedback.toLowerCase().includes("appointment") ||
      feedback.toLowerCase().includes("wait")
    ) {
      category = "Access"
    } else if (
      feedback.toLowerCase().includes("medication") ||
      feedback.toLowerCase().includes("treatment") ||
      feedback.toLowerCase().includes("follow")
    ) {
      category = "Adherence"
    } else if (
      feedback.toLowerCase().includes("safe") ||
      feedback.toLowerCase().includes("risk") ||
      feedback.toLowerCase().includes("danger")
    ) {
      category = "Safety"
    }

    setClassifiedCategory(category)
    setIsClassifying(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Patient Feedback NLP Classification</h1>
              <p className="text-sm text-muted-foreground mt-1">Automated categorization and insights dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-1.5">
                <Activity className="h-3 w-3" />
                Live
              </Badge>
              <Button variant="outline" size="sm">
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="classify">Classify Feedback</TabsTrigger>
            <TabsTrigger value="data">Feedback Data</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <MetricsCards />

            <div className="grid gap-6 md:grid-cols-2">
              <CategoryDistribution />
              <CategoryHeatmap />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Insights</CardTitle>
                <CardDescription>Key findings from the latest analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <TrendingUp className="h-5 w-5 text-chart-1 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Cost concerns increased 23%</p>
                    <p className="text-sm text-muted-foreground">
                      Spike detected in last 7 days, primarily related to prescription costs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-chart-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Experience scores improving</p>
                    <p className="text-sm text-muted-foreground">
                      15% improvement in patient experience feedback after recent interventions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <AlertCircle className="h-5 w-5 text-chart-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Access issues in Region B</p>
                    <p className="text-sm text-muted-foreground">
                      Appointment availability concerns concentrated in specific locations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <TrendChart />
          </TabsContent>

          <TabsContent value="classify" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Classify New Feedback</CardTitle>
                <CardDescription>
                  Enter patient feedback to automatically classify it into one of 5 categories
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Enter patient feedback here... (e.g., 'The wait time for appointments is too long' or 'Medication costs are too expensive')"
                    value={feedback}
                    onChange={(e) => {
                      setFeedback(e.target.value)
                      setClassifiedCategory(null)
                    }}
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  onClick={handleClassify}
                  disabled={!feedback.trim() || isClassifying}
                  className="w-full sm:w-auto"
                >
                  {isClassifying ? "Classifying..." : "Classify Feedback"}
                </Button>

                {classifiedCategory && (
                  <div className="p-4 rounded-lg border border-border bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-2">Classification Result:</p>
                    <div className="flex items-center gap-2">
                      <Badge className="text-base px-3 py-1">{classifiedCategory}</Badge>
                      <span className="text-sm text-muted-foreground">• 94% confidence</span>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium mb-3">Categories:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Access</Badge>
                    <Badge variant="outline">Cost</Badge>
                    <Badge variant="outline">Adherence</Badge>
                    <Badge variant="outline">Experience</Badge>
                    <Badge variant="outline">Safety</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <FeedbackTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
