export const getAppConfig = () => {
  const  config = {
        coursesApiUrl: process.env.REACT_APP_BASE_API ?? 'https://api.wisey.app/api/v1/core',
        coursesApiToken: process.env.REACT_APP_BASE_TOKEN
 }
        return config
}