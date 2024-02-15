import axios from "axios"
// import { save_tokens_constant, session_expired } from "../../store/constant.js"
// import dayjs from "dayjs"
// import jwt_decode from "jwt-decode"

// export const exit_session = () => {
//   localStorage.removeItem(save_tokens_constant)
//   localStorage.setItem(session_expired, true)

//   window.location.reload()
// }
export const baseURL = `http://172.16.2.31:3333`

export const apiHandle = axios.create({
  baseURL: `${baseURL}`,
})

axios.defaults.timeout = 15000

// apiHandle.interceptors.request.use(async (req) => {
//   const authToken = localStorage.getItem(save_tokens_constant) || null

//   if (authToken) {
//     const user = jwt_decode(authToken)
//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
//     if (isExpired) {
//       exit_session()
//       return req
//     } else req.headers.Authorization = `Bearer ${authToken}`
//   }

//   return req

//   // req.headers.Authorization = `Bearer ${authToken}`;
// })
