import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { muiTheme } from "./theme/theme";
import { Header } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyledAppWrap } from "./styled";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={muiTheme}>
            <StyledAppWrap>
              <CssBaseline />
              <Header />
              <AppRoutes />
            </StyledAppWrap>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
