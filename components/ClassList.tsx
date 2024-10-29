import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Student = {
  id: number
  name: string
  class: string
  graduationYear: number
}

type Class = {
  name: string
  students: Student[]
}

type ClassListProps = {
  classes: Class[]
}

export default function ClassList({ classes }: ClassListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {classes.map((classItem) => (
        <Card key={classItem.name}>
          <CardHeader>
            <CardTitle>{classItem.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {classItem.students.map((student) => (
                <li key={student.id}>{student.name}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
