import { atom, selector, useRecoilValue } from "recoil";
import { CART_ITEM } from "../constants/category";
import { productsList } from "./products";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

/**
 * 카트의 상태는 localStorage 기준으로 초기화 됩니다.
 * 카트의 상태는 새로고침해도 유지되어야 하기 때문입니다.
 */
export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

/**
 * cartList
 */
export const cartList = selector({
  key: "cartList",
  get: ({ get }) => {
    const cartList = get(cartState);
    return cartList;
  },
});

// addToCart
export const addFromCart = (cart: ICartState, id: number) => {
  const tempCart = { ...cart };
  if (!tempCart[id]) {
    tempCart[id] = { id: id, count: 1 };
    return tempCart;
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count + 1 } };
  }
};

export const allDeleteFromCart = () => {
  return {};
};

// removeFromCart
export const removeFromCart = (cart: ICartState, id: number) => {
  const tempCart = { ...cart };
  if (tempCart[id].count === 1) {
    delete tempCart[id];
    return tempCart;
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
  }
};
