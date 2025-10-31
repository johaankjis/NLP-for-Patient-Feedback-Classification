"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const feedbackData = [
  {
    id: "FB-001",
    date: "2025-10-28",
    feedback: "The wait time for appointments is extremely long. I had to wait 3 weeks to see my doctor.",
    category: "Access",
    confidence: 96,
    region: "Region B",
  },
  {
    id: "FB-002",
    date: "2025-10-28",
    feedback: "Prescription costs are too high. I can barely afford my medications.",
    category: "Cost",
    confidence: 98,
    region: "Region A",
  },
  {
    id: "FB-003",
    date: "2025-10-27",
    feedback: "The staff was very friendly and helpful. Great experience overall.",
    category: "Experience",
    confidence: 94,
    region: "Region C",
  },
  {
    id: "FB-004",
    date: "2025-10-27",
    feedback: "I forgot to take my medication several times. Need better reminders.",
    category: "Adherence",
    confidence: 91,
    region: "Region D",
  },
  {
    id: "FB-005",
    date: "2025-10-26",
    feedback: "Concerned about the safety protocols during my visit. Not enough sanitization.",
    category: "Safety",
    confidence: 89,
    region: "Region B",
  },
  {
    id: "FB-006",
    date: "2025-10-26",
    feedback: "Online booking system is confusing and hard to navigate.",
    category: "Access",
    confidence: 87,
    region: "Region A",
  },
  {
    id: "FB-007",
    date: "2025-10-25",
    feedback: "Insurance doesn't cover enough. Out of pocket expenses are overwhelming.",
    category: "Cost",
    confidence: 95,
    region: "Region C",
  },
  {
    id: "FB-008",
    date: "2025-10-25",
    feedback: "Doctor took time to explain everything. Very satisfied with the care.",
    category: "Experience",
    confidence: 97,
    region: "Region D",
  },
]

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    Access: "bg-chart-2 text-chart-2",
    Cost: "bg-chart-3 text-chart-3",
    Adherence: "bg-chart-4 text-chart-4",
    Experience: "bg-chart-1 text-chart-1",
    Safety: "bg-chart-5 text-chart-5",
  }
  return colors[category] || "bg-muted text-muted-foreground"
}

export function FeedbackTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Feedback</CardTitle>
        <CardDescription>Latest classified patient feedback entries</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Feedback</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Confidence</TableHead>
              <TableHead>Region</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedbackData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-mono text-xs">{item.id}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{item.date}</TableCell>
                <TableCell className="max-w-md">
                  <p className="text-sm line-clamp-2">{item.feedback}</p>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{item.confidence}%</TableCell>
                <TableCell className="text-sm text-muted-foreground">{item.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
