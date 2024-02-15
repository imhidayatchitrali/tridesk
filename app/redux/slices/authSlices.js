"use client";
// slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { login_async } from "../services/authService";
import { asyncStatus } from "@/app/res/utils/asyncStatus";
import { setTokenCookie } from "@/app/res/utils/cookieUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
   loginStatus:asyncStatus.IDLE,
   userAuth:false,
   loginError:null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login_async.pending, (state, action) => {
      state.loginStatus = asyncStatus.LOADING;
      state.loginError = null;
    });
    builder.addCase(login_async.fulfilled, (state, { payload }) => {
      state.userAuth = true;
      state.loginStatus = asyncStatus.SUCCEEDED;
      state.loginError = null;
      setTokenCookie( payload.access_token);
    //   window.cookie = `token=${payload.access_token}`
    //   localStorage.setItem(save_tokens_constant, payload.tokens.access_token);
    });
    builder.addCase(login_async.rejected, (state, actions) => {
      state.loginStatus = asyncStatus.ERROR;
      state.userAuth = false;
      state.loginError = actions?.error?.message;
    });
  },
});

export default authSlice.reducer;
