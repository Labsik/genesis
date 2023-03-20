import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes";
import { HashRouter } from "react-router-dom";
import { muiTheme } from "./theme/theme";
import { Header } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyledAppWrap } from "./styled";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={muiTheme}>
            <SnackbarProvider
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              maxSnack={3}
              autoHideDuration={3000}
            >
              <StyledAppWrap>
                <CssBaseline />
                <Header />
                <AppRoutes />
              </StyledAppWrap>
            </SnackbarProvider>
          </ThemeProvider>
        </Provider>
      </HashRouter>
    </>
  );
}

export default App;
