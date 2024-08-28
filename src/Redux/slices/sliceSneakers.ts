import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Instance } from "../../api/network";
import { Filter, ReqeustStatus, Sneaker } from "../../types";

type SneakersState = {
  data: Sneaker[];
  status: ReqeustStatus;
  error: string | null;
  filters: Filter;
};

const initialState: SneakersState = {
  data: [],
  status: ReqeustStatus.IDLE,
  error: null,
  filters: {
    male: true,
    female: true,
    sizes: {
      size35: true,
      size36: true,
      size37: true,
      size38: true,
      size39: true,
      size40: true,
      size41: true,
      size42: true,
      size43: true,
    },
    startPrice: 1850,
    endPrice: 25768,
  },
};

export const sliceSneakers = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload as Sneaker[];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSneakers.pending, (state) => {
      state.status = ReqeustStatus.LOADING;
    });
    builder.addCase(getSneakers.fulfilled, (state, { payload }) => {
      state.status = ReqeustStatus.SUCCESS;
      state.data = payload;
      state.filters = {
        male: true,
        female: true,
        sizes: {
          size35: true,
          size36: true,
          size37: true,
          size38: true,
          size39: true,
          size40: true,
          size41: true,
          size42: true,
          size43: true,
        },
        startPrice: 1850,
        endPrice: 25768,
      };
    });
    builder.addCase(getSneakers.rejected, (state, action) => {
      state.status = ReqeustStatus.ERROR;
      state.error = action.error.message || null;
    });
  },
});

export const getSneakers = createAsyncThunk(
  "sneakers/getSneakers",
  async () => {
    const req = await Instance.get("/items");
    return req.data;
  }
);
