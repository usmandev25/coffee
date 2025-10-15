export interface IPostProduct {
  image: string;
  title: string;
  price: number;
}
export interface IGetCoffee extends IPostProduct {
  createdAt: string;
  updatedAt: string;
  _id: number;
}
export interface IResponse {
  current_page: number;
  data: IGetCoffee[];
  per_page: number;
  success: boolean;
  total_items: number;
  total_pages: number;
}

export interface IAction {
  pushCoffeeInCart: (body: IGetCoffee) => void;
  decrementCount: (id: number) => void;
  incrementCount: (id: number) => void;
  deleteCart: (id: number) => void;
  deleteAllCoffee: () => void;
}

export interface IInitialState {
  cart: ICartCoffee[];
}
export interface ICoffeeState extends IInitialState, IAction {}
export interface ICartCoffee extends IGetCoffee {
  count: number;
}
