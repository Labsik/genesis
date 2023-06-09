import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export const ErrorBox = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} mt={2} mb={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Ooops, something went wrong. Please try again.
      </Alert>
    </Stack>
  );
};
