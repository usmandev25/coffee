import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ICartCoffee, ICoffeeState, IGetCoffee } from "../../types/types";

const initialState = {
  cart: [] as ICartCoffee[],
};

const coffeeStore = (set: any, get: any) => ({
  ...initialState,

  pushCoffeeInCart: (body: IGetCoffee) => {
    const cart = get().cart;
    const find = cart.find((el: IGetCoffee) => el._id === body._id);

    if (find) {
      const updateCart = cart.map((el: ICartCoffee) =>
        el._id === body._id ? { ...el, count: el.count + 1 } : el
      );
      set({ cart: updateCart });
    } else {
      set({ cart: [...cart, { ...body, count: 1 }] });
    }
  },
  decrementCount: (id: number) => {
    const cart = get().cart;
    const updateCart = cart
      .map((el: ICartCoffee) =>
        el._id === id ? { ...el, count: el.count - 1 } : el
      )
      .filter((el: ICartCoffee) => el.count > 0);
    set({ cart: updateCart });
  },
  incrementCount: (id: number) => {
    const cart = get().cart;
    const updateCount = cart.map((el: ICartCoffee) =>
      el._id === id ? { ...el, count: el.count + 1 } : el
    );
    set({ cart: updateCount });
  },
  deleteCart: (id: number) => {
    const cart = get().cart;
    const updateCart = cart.filter((el: ICartCoffee) => el._id !== id);
    set({ cart: updateCart });
  },
  deleteAllCoffee: () => set({ cart: [] }),
});

export const useCoffee = create<ICoffeeState>(
  persist(coffeeStore, {
    name: "basket",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ cart: state.cart }),
  })
);
