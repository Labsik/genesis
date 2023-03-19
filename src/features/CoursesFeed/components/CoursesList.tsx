import React, { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchCourses, getCourses } from "../../../store/courses";
import { ErrorBox, Loader } from "../../../components";
import { CourseCard } from "./CourseCard";
import { Grid, Pagination } from "@mui/material";
import { scrollToTop } from "../../utils";
import { StyledGrid } from "../../styled";

export const CoursesList = () => {
  const shouldLog = useRef(true);
  const [page, setPage] = useState(1);
  const { courses, loading, error } = useAppSelector(getCourses);

  const coursesPerPage = 10;
  const pagesCount = Math.ceil(courses?.length / coursesPerPage);
  const startIndex: number = coursesPerPage * page - coursesPerPage;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(fetchCourses());
    }
  }, [dispatch]);

  const coursesList = courses.slice(startIndex, 10 + startIndex);

  const content = coursesList.map((course) => (
    <Grid key={course.id} item xs={12} sm={6} md={6} lg={6} xl={4}>
      <CourseCard course={course} />
    </Grid>
  ));

  const pageOnChange = (newPage: number): void => {
    setPage(newPage);
    scrollToTop();
  };

  return (
    <div>
      <Typography variant="h3" mb={3}>
        Courses
      </Typography>
      {loading && <Loader />}
      {error && <ErrorBox />}
      {!loading && !!courses.length && (
        <StyledGrid
          container
          spacing={3}
        >
          {content}
        </StyledGrid>
      )}

      {!loading && !!courses.length && (
        <Pagination
          count={pagesCount}
          onChange={(e, v) => pageOnChange(v)}
          variant="outlined"
          shape="rounded"
        />
      )}
    </div>
  );
};
