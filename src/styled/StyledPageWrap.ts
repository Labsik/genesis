import { styled, Box } from "@mui/material";

export const StyledPageWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1536px",
  margin: ".5rem auto",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("sm")]: {
    padding: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
  },
}));
