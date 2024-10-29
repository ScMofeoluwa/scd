import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Student = {
  id: number
  name: string
  class: string
  graduationYear: number
}

type StudentListProps = {
  students: Student[]
}

export default function StudentList({ students }: StudentListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Graduation Year</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.class}</TableCell>
            <TableCell>{student.graduationYear}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
