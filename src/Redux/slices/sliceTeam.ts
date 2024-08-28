import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import { ReqeustStatus, TeamMember } from "../../types";
import { Instance } from "../../api/network";

type TeamState = {
  data: TeamMember[];
  status: ReqeustStatus;
  error: string | null;
};

const initialState: TeamState = {
  data: [],
  status: ReqeustStatus.IDLE,
  error: null,
};

export const sliceTeam = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeam.pending, (state) => {
      state.status = ReqeustStatus.LOADING;
    });
    builder.addCase(getTeam.fulfilled, (state, { payload }) => {
      state.status = ReqeustStatus.SUCCESS;
      state.data = payload;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      state.status = ReqeustStatus.ERROR;
      state.error = action.error.message || null;
    });
  },
});

export const getTeam = createAsyncThunk("team/getTeam", async () => {
  const req = await Instance.get("/team");
  return req.data;
});
