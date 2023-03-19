import React, { useState } from "react";
import {
  Box,
  Stack,
  Rating,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { ICourse } from "../../../store/courses";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "../../../components/player";
import { StyledCard, StyledCardActions, StyledCardHeader } from "../../styled";
import { StyledCardContent } from "../styled";
import { convertDuration } from "../../utils";

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
      <StyledCardHeader title={course.title} />
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
          Duration: {convertDuration(course.duration)}
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
