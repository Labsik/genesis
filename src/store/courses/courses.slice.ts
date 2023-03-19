import { ICourse, ICoursesState, ISingleCourse } from "./courses.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { coursesStoreKey } from "./courses.const";
import { fetchCourses, fetchCourseById } from "./courses.thunks";

const initialState: ICoursesState = {
  courses: [],
  course: null,
  loading: false,
  error: null,
};

export const coursesSlice = createSlice({
  name: coursesStoreKey,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCourses.fulfilled,
      (state, { payload }: PayloadAction<ICourse[]>) => {
        state.loading = false;
        state.courses = payload;
      }
    );
    builder.addCase(fetchCourses.rejected, (state) => {
      state.loading = false;
      state.error = new Error();
    });
    builder.addCase(fetchCourseById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCourseById.fulfilled,
      (state, { payload }: PayloadAction<ISingleCourse>) => {
        state.loading = false;
        state.course = payload;
      }
    );
    builder.addCase(fetchCourseById.rejected, (state) => {
      state.loading = false;
      state.error = new Error();
    });
  },
});
