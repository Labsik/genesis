import { coursesStoreKey } from "./courses.const";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses, getSingleCourse } from "../../api";
import { sortedCourses } from "./courses.types";

export const fetchCourses = createAsyncThunk(
  `${coursesStoreKey}/fetchCourses`,
  async () => {
    try {
      const courses = await getCourses();
      const data = courses.sort(sortedCourses);
      return data;
    } catch (error) {
      throw new Error(String(error));
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  `${coursesStoreKey}/fetchCourseById`,
  async (id: string) => {
    try {
      const course = await getSingleCourse(id);
      return course;
    } catch (error) {
      throw new Error(String(error));
    }
  }
);
