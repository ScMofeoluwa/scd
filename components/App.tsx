'use client'

import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import StudentList from './StudentList'
import ClassList from './ClassList'
import Dashboard from './Dashboard'

// Types
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

// Mock data
const initialStudents: Student[] = [
  { id: 1, name: "Alice Johnson", class: "Class A", graduationYear: 2024 },
  { id: 2, name: "Bob Smith", class: "Class B", graduationYear: 2025 },
  { id: 3, name: "Charlie Brown", class: "Class A", graduationYear: 2024 },
  { id: 4, name: "Diana Prince", class: "Class C", graduationYear: 2023 },
  { id: 5, name: "Ethan Hunt", class: "Class B", graduationYear: 2025 },
]

export default function App() {
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [classes, setClasses] = useState<Class[]>([])
  const [filterYear, setFilterYear] = useState<string>('')

  useEffect(() => {
    // Group students by class
    const groupedClasses = students.reduce((acc, student) => {
      const classIndex = acc.findIndex(c => c.name === student.class)
      if (classIndex > -1) {
        acc[classIndex].students.push(student)
      } else {
        acc.push({ name: student.class, students: [student] })
      }
      return acc
    }, [] as Class[])
    setClasses(groupedClasses)
  }, [students])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterYear(e.target.value)
  }

  const filteredStudents = filterYear
    ? students.filter(student => student.graduationYear.toString().includes(filterYear))
    : students

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">School Database</h1>
      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>
        <div className="mb-4">
          <Label htmlFor="filterYear">Filter by Graduation Year:</Label>
          <Input
            id="filterYear"
            type="number"
            value={filterYear}
            onChange={handleFilterChange}
            placeholder="Enter graduation year"
          />
        </div>
        <TabsContent value="students">
          <StudentList students={filteredStudents} />
        </TabsContent>
        <TabsContent value="classes">
          <ClassList classes={classes} />
        </TabsContent>
        <TabsContent value="dashboard">
          <Dashboard students={students} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
