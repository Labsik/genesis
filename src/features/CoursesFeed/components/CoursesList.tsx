
import React, {useEffect, useRef} from 'react'
import { Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchCourses, getCourses } from '../../../store/courses';
import { ErrorBox, Loader } from '../../../components';
import { CourseCard } from './CourseCard';
import { Grid } from "@mui/material";

export const CoursesList = () => {
  const shouldLog = useRef(true);
  const {courses, loading, error} = useAppSelector(getCourses)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(fetchCourses())
    }
  }, [dispatch])

  const content = courses?.map(course =>
    (
      <Grid key={course.id} item xs={12} sm={6} md={4} lg={4}>
        <CourseCard course={course}/>
      </Grid>
    )
  )


  return (
    <div>
      <Typography variant='h3'>Courses</Typography>
      {loading && <Loader/> }
      {error && <ErrorBox />}
      <Grid container justifyContent="space-between" alignItems="center" spacing={3} sx={{marginBottom: '3rem'}}>
        {content}
      </Grid>
    </div>
  )
}
