import { Box, CircularProgress } from "@mui/material";
import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";
import { styles } from "./ styled";

interface VideoPlayerProps {
  videoLink: string;
  lessonId?: string;
  isHovered?: boolean;
}

const VideoPlayer = ({ videoLink, lessonId, isHovered }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  useEffect(() => {
    const videoTime = localStorage.getItem(`lesson-${lessonId}-time`);
    const startTime = videoTime ? parseInt(videoTime, 10) : 0;

    if (videoRef.current && Hls.isSupported()) {
      const video = videoRef.current;
      const hls = new Hls({ startPosition: lessonId ? startTime : 0 });
      hls.loadSource(videoLink);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.addEventListener("canplaythrough", () => {
          video.play();
          setIsLoading(true);
        });
      });
    } else if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = videoLink;
    }
  }, [videoLink, lessonId]);

  const handleTime = (): void => {
    const video = videoRef.current;
    if (video && lessonId) {
      const currentTime = Math.floor(video.currentTime);
      localStorage.setItem(`lesson-${lessonId}-time`, `${currentTime}`);
    }
  };
  const handleFullScreen = (): void => {
    lessonId && setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <Box
        sx={
          isHovered
            ? styles.hoveredVideo
            : isFullScreen
            ? styles.inPicturedVideo
            : styles.fullVideo
        }
        style={{ display: isLoading ? "block" : "none" }}
        onClick={handleFullScreen}
        component="video"
        muted
        controls
        ref={videoRef}
        onTimeUpdate={handleTime}
      ></Box>
      {!isLoading && (
        <Box sx={styles.loadingVideo}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default VideoPlayer;
