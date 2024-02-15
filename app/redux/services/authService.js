import { apiHandle } from "@/app/config/apihandle"
import { type_constants } from "../constants"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setTokenCookie } from "@/app/res/utils/cookieUtils"

export const login_async = createAsyncThunk(
    type_constants.LOGIN,
    async (login_data) => {
      try {
        const res = await apiHandle.post(`/auth/signin`, login_data)
        const data = await res.data
        return data
      } catch (error) {
        if (error?.response?.data) {
          throw Error(error.response.data.message)
        } else {
          throw Error(error.message)
        }
      }
    },
  )
  