import { AuthAPI } from "@/api-client/auth/auth-api";
import { IPayload } from "@/type/auth.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ username, password }: IPayload) => {
    const payLoad = { username, password };
    const response = await AuthAPI.login(payLoad);
    return response;
  }
);

interface initState {
  error: any;
  isLoading: boolean;
  success: any;
}

const initState: initState = {
  error: null,
  isLoading: false,
  success: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state, action) => {})
      .addCase(loginAction.fulfilled, (state, action) => {})
      .addCase(loginAction.rejected, (state, action) => {});
  },
});

export default AuthSlice.reducer;
