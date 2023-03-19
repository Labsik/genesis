import React from "react";
import { ILesson } from "../../../store/courses";
import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  styled,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import { convertDuration, scrollToTop } from "../../utils";

interface LessonCardInterface {
  lesson: ILesson;
  changeLesson: (lesson: number) => void;
}

export const StyledCard = styled(Card)({
  width: "100%",
  maxHeight: "100%",
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  maxHeight: "100%",
  height: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "initial",
}));

export const StyledCardActions = styled(CardActions)({
  padding: "1rem",
});

export const StyledBoxInfo = styled(Box)({});

export const LessonCard = ({ lesson, changeLesson }: LessonCardInterface) => {
  const lessonImage = `${lesson.previewImageLink}/lesson-${lesson.order}.webp`;

  const disabledLesson = lesson.status === "locked";

  const playVideo = () => {
    changeLesson(lesson.order);
    scrollToTop();
  };

  return (
    <StyledCard>
      <CardHeader sx={{ height: "100px" }} title={lesson.title} />
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
