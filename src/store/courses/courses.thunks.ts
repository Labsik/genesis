import { coursesStoreKey } from './courses.const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses } from '../../api';
import { sortedCourses } from './courses.types';

export const fetchCourses = createAsyncThunk(`${coursesStoreKey}/fetchCourses`, async (_, thunkAPI) => {
    try {
        const courses = await getCourses()
        const data = courses.sort(sortedCourses)
        return data
    } catch (error) {
        throw new Error(String(error));
    }
})