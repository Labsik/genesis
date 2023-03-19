import { coursesAxiosInstance } from "../axios";

const COURSES = "/preview-courses";

export const getCourses = async () => {
  return await coursesAxiosInstance
    .get(`${COURSES}`)
    .then((resp) => resp.data.courses);
};

export const getSingleCourse = async (id: string) => {
  return await coursesAxiosInstance
    .get(`${COURSES}/${id}`)
    .then((resp) => resp.data);
};
