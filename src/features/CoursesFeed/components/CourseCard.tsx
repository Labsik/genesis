import React, { useState } from "react";
import {
  Box,
  Card,
  Stack,
  Rating,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  styled,
} from "@mui/material";

import { ICourse } from "../../../store/courses";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../../../components/player";

export const StyledCard = styled(Card)({
  width: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  maxHeight: "100%",
  boxSizing: "border-box",
  minHeight: "100%",
});

export const StyledCardMedia = styled(CardMedia)({});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  maxHeight: "100%",
  height: "230px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "initial",
  [theme.breakpoints.down("md")]: {
    height: "350px",
    marginBottom: "20px",
  },
}));

export const StyledCardActions = styled(CardActions)({
  padding: "1rem",
});

export const StyledBoxInfo = styled(Box)({});

interface CourseCardProps {
  course: ICourse;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const navigate = useNavigate();

  const courseImage = `${course.previewImageLink}/cover.webp`;

  const skills = course.meta.skills?.map((skill) => skill).join(", ") ?? [];

  const videoLink = course.meta.courseVideoPreview;

  return (
    <StyledCard>
      <CardHeader sx={{ height: "100px" }} title={course.title} />
      <Box
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover && !!videoLink?.link ? (
          <VideoPlayer isHovered={true} videoLink={videoLink.link} />
        ) : (
          <CardMedia
            component="img"
            sx={{ boxSizing: "border-box" }}
            alt={course.title}
            height="240"
            image={courseImage}
          />
        )}
      </Box>
      <StyledCardContent>
        <Typography gutterBottom variant="h6">
          {course.description}
        </Typography>

        <Typography gutterBottom variant="body1">
          Skills: {skills.length > 0 ? skills : "-"}
        </Typography>

        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Typography gutterBottom variant="body1">
            {course.lessonsCount} lessons
          </Typography>

          <Stack spacing={1}>
            <Rating
              name="rating"
              defaultValue={course.rating}
              precision={0.1}
              readOnly
            />
          </Stack>
        </Box>
      </StyledCardContent>
      <StyledCardActions>
        <Button
          onClick={() => navigate(`/courses/${course.id}`, { replace: true })}
          variant="outlined"
        >
          Go to the course
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};
