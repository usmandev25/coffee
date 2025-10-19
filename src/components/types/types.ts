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
  pushModalCoffee: (body: ICartCoffee[]) => void;
  // cart thet's all //
  // clientData start //
  pushClientData: (body: IClientData) => void;
}

export interface IInitialState {
  cart: ICartCoffee[];
  client: IClientData[];
  modal: ICartCoffee[]
}
export interface ICoffeeState extends IInitialState, IAction {}
export interface ICartCoffee extends IGetCoffee {
  count: number;
}

export interface IClientData {
  name: string;
  number: number;
  card: string;
  adress: string;
  code: number;
  city: string;
}
