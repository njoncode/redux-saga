import { ADD_TO_CART_SAGA, REMOVE_FROM_CART_SAGA } from "../types";

const total = (newCart) => {
  let totalVal = 0;
  for (let i = 0; i < newCart.length; i++) {
    totalVal += newCart[i].price;
  }
  return totalVal;
};

export const addToCartAction = (item, cart) => {
  return{type: ADD_TO_CART_SAGA, payload: {item, cart}}
};


export const removeFromCartAction = (item, cart) => {
  return {
    type: REMOVE_FROM_CART_SAGA,
    payload: { item, cart },
  };
};