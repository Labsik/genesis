export interface ICourse {
    id: string;
    title: string;
    tags: string[];
    launchDate: string;
    status: string;
    description: string;
    duration: number;
    previewImageLink: string;
    rating: number;
    lessonsCount: number;
    containsLockedLessons: boolean;
    meta: {
        slug: string;
        skills?: string[];
        fullCourseProductId?: string;
        fullCourseProductFamily?: string;
        courseVideoPreview?: ICourseVideoPreview
    }
}

export interface ICourseVideoPreview {
    link: string;
    duration: number;
    previewImageLink: string;
}

export interface ILesson {
    id: string;
    title: string;
    order: number;
    type: string;
    status: string;
    link: string;
    duration: number;
    previewImageLink: string;
    meta: null
}

export interface ISingleCourse extends ICourse {
    lessons: ILesson[]
}

export interface ICoursesState {
    courses: ICourse[];
    // course: ISingleCourse;
    loading: boolean;
    error: null | Error
}
 export const sortedCourses = (a: ICourse, b: ICourse) => {
    return b.launchDate.localeCompare(a.launchDate)
 }