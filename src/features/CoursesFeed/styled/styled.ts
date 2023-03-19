import { styled, CardContent } from "@mui/material";

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    maxHeight: "100%",
    height: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "initial",
    [theme.breakpoints.down("md")]: {
      height: "380px",
      marginBottom: "20px",
    },
  }));
