import { createTheme } from "@mui/material/styles";
import overrides from "./overrides";

export const muiTheme = createTheme({
  components: overrides,
  spacing: 8,
});
