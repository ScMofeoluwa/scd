import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Student = {
  id: number
  name: string
  class: string
  graduationYear: number
}

type DashboardProps = {
  students: Student[]
}

export default function Dashboard({ students }: DashboardProps) {
  const currentYear = new Date().getFullYear()
  const totalStudents = students.length
  const currentStudents = students.filter(student => student.graduationYear >= currentYear).length
  const graduates = totalStudents - currentStudents

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Students</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalStudents}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Current Students</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{currentStudents}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Graduates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{graduates}</p>
        </CardContent>
      </Card>
    </div>
  )
}
