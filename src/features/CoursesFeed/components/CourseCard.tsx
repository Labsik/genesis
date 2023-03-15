import React from 'react'
import { ICourse } from '../../../store/courses'

interface CourseCardProps {
    course: ICourse
}

export const CourseCard = ({course}: CourseCardProps) => {
  return (
    <div>
        {course.id}
    </div>
  )
}
