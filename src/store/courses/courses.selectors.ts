import { ICoursesState } from './courses.types';
import { coursesStoreKey } from "./courses.const";

interface State {
  [coursesStoreKey]: ICoursesState;
}

const select = (state: State) => state[coursesStoreKey];

export const getCourses = (state: State) => select(state)
