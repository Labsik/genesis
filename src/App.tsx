import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { muiTheme } from "./theme/theme";
import { Header } from "./components";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyledAppWrap } from "./styled";


function App() {
// const [courses, setCourses] = useState([])

// const api = 'http://api.wisey.app/api/v1/core/preview-courses'




// Utils

// Setups
// axios.defaults.baseURL = 'https://api.wisey.app/api/v1';

// const setToken = (token: any) =>
//   (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

// // HTTP requests
//  const getToken = async () => {
//   try {
//     const { data } = await axios.get('/auth/anonymous?platform=subscriptions');
//     setToken(data.token);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

//  const getCoursesFeed = async () => {
//   try {
//     const { data } = await axios.get('/core/preview-courses', config);
//     console.log('data', data.courses)
//     return data.courses;
//   } catch (error) {
//     console.log(error.message);
//   }
// };


// useEffect(() => {
//  // getCoursesFeed()
//  getCourses()
// }, [])


  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
      <StyledAppWrap>
        <CssBaseline />
        <Header/>
        <AppRoutes />
      </StyledAppWrap>
      </ThemeProvider>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
