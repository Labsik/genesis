import React, { useEffect, useRef } from "react";
import { fetchCourseById, getCourses } from "../../../store/courses";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import { useParams } from "react-router-dom";
import { ErrorBox, Loader } from "../../../components";
import { CourseInfo } from "./CourseInfo";

export const Course = () => {
  const { course, loading, error } = useAppSelector(getCourses);
  const dispatch = useAppDispatch();
  const shouldLog = useRef<boolean>(true);
  const { courseId } = useParams();

  useEffect(() => {
    if (shouldLog.current && courseId) {
      shouldLog.current = false;
      dispatch(fetchCourseById(courseId));
    }
  }, [dispatch, courseId]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorBox />}
      {!loading && course && <CourseInfo key={courseId} course={course} />}
    </>
  );
};
