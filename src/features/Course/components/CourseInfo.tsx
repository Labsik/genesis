import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";

import { ILesson, ISingleCourse } from "../../../store/courses";
import { LessonCard } from "./LessonCard";
import VideoPlayer from "../../../components/player";

interface CourseInfoProps {
  course: ISingleCourse;
}

export const CourseInfo = ({ course }: CourseInfoProps) => {
  const [playLesson, setPlayLesson] = useState<number>(1);
  const [lessonInfo, setLessonInfo] = useState<ILesson>();

  const changeOpenLesson = (lesson: number): void => {
    setPlayLesson(lesson);
  };

  const setLessonVideo = (lesson: ILesson | undefined): void => {
    lesson && setLessonInfo(lesson);
  };

  useEffect(() => {
    const openLesonData = course.lessons.find(
      (item) => item.order === playLesson
    );
    setLessonVideo(openLesonData);
  }, [course.lessons, playLesson]);

  const lessonsContent = course.lessons?.map((lesson) => (
    <Grid key={lesson.id} item xs={12} sm={12} md={6} lg={6} xl={4}>
      <LessonCard
        key={lesson.id}
        changeLesson={changeOpenLesson}
        lesson={lesson}
      />
    </Grid>
  ));

  return (
    <div>
      <Box sx={{ border: "1px solid white" }}>
        <Typography variant="h3">{course.title}</Typography>
        <Typography variant="h6">{course.description}</Typography>
      </Box>
      {lessonInfo && (
        <Box mt={3} mb={3}>
          <Typography variant="h6" mb={3}>
            You're watching lesson #{lessonInfo.order}
          </Typography>
          <VideoPlayer videoLink={lessonInfo.link} lessonId={lessonInfo.id} />
        </Box>
      )}
      <Typography variant="h4" mb={3}>
        Lessons
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        mb={3}
      >
        {lessonsContent}
      </Grid>
    </div>
  );
};
