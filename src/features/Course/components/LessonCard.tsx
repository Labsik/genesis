import React from "react";
import { ILesson } from "../../../store/courses";
import {
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import { convertDuration, scrollToTop } from "../../utils";
import { StyledCard, StyledCardActions, StyledCardHeader } from "../../styled";
import { StyledCardContent } from "../styled";

interface LessonCardInterface {
  lesson: ILesson;
  changeLesson: (lesson: number) => void;
}


export const LessonCard = ({ lesson, changeLesson }: LessonCardInterface) => {
  const lessonImage = `${lesson.previewImageLink}/lesson-${lesson.order}.webp`;

  const disabledLesson = lesson.status === "locked";

  const playVideo = () => {
    changeLesson(lesson.order);
    scrollToTop();
  };

  return (
    <StyledCard>
      <StyledCardHeader title={lesson.title} />
      <CardMedia
        component="img"
        alt={lesson.title}
        height="240"
        image={lessonImage}
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h6">
          Lesson #{lesson.order}: {lesson.title}
        </Typography>
        <Typography gutterBottom variant="body1">
          Duration: {convertDuration(lesson.duration)}
        </Typography>
      </StyledCardContent>
      <StyledCardActions>
        <Button
          disabled={disabledLesson}
          onClick={playVideo}
          variant="outlined"
          size="small"
        >
          View the lesson
        </Button>
        {disabledLesson && <LockIcon sx={{ marginLeft: "1rem" }} />}
      </StyledCardActions>
    </StyledCard>
  );
};
