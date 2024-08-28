import { configureStore } from "@reduxjs/toolkit";
import { sliceSneakers } from "./slices/sliceSneakers";
import { sliceTeam } from "./slices/sliceTeam";
import { sliceCart } from "./slices/sliceCart";

export const store = configureStore({
  reducer: {
    sneakers: sliceSneakers.reducer,
    team: sliceTeam.reducer,
    cart: sliceCart.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
