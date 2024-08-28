import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CatalogItemProps } from "../../types";
import { Instance } from "../../api/network";

export interface CartState {
  itemsInCart: CatalogItemProps[];
  isOpenModal: boolean;
  totalPrice: number;
}

const initialState: CartState = {
  itemsInCart: [],
  isOpenModal: false,
  totalPrice: 0,
};

export const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getInitialState: (state) => {
      state.itemsInCart = JSON.parse(localStorage.getItem("cart") || "[]");
      state.totalPrice = state.itemsInCart.reduce(
        (acc: number, item: CatalogItemProps) => {
          const curPrice = +item.price.replace(" ", "");
          return acc + curPrice;
        },
        0
      );
    },
    addToCart: (state, action) => {
      const totalPrice = (state.totalPrice += +action.payload.price.replace(
        " ",
        ""
      ));
      const array = [...state.itemsInCart, action.payload].map(
        (item: CatalogItemProps) => {
          return { ...item, quantity: 1 };
        }
      );

      state.itemsInCart = array;

      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));

      state.totalPrice = totalPrice;
    },
    removeFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item: CatalogItemProps) => item.id !== action.payload
      );

      state.totalPrice = state.itemsInCart.reduce(
        (acc, item) => (acc += +item.price.replace(" ", "")),
        0
      );
      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
    clearCart: (state) => {
      state.itemsInCart = [];
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state.itemsInCart));
    },
  },
});

export const setCart = createAsyncThunk("cart/setCart", async () => {
  const req = await Instance.post("/cart");
  return req.data;
});

export const { addToCart, removeFromCart } = sliceCart.actions;
