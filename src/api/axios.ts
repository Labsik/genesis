import Axios from 'axios'
import { getAppConfig } from '../config'

const {coursesApiUrl, coursesApiToken} = getAppConfig()

// export  const coursesConfig = {
//     headers: {
//       Authorization: `Bearer ${coursesApiToken}`,
//     }
//   };

export const coursesAxiosInstance = Axios.create({baseURL: coursesApiUrl })


coursesAxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${coursesApiToken}`;

