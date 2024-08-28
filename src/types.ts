// кроссовки
export type Sneaker = {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  imgUrl: string;
  color: string;
  sizes: number[];
  vendorСode: string;
  inStock: number;
  stars: number;
  description: string;
  gender: string;
  compound: string;
  country: string;
};

export interface CatalogItemProps {
  id: number;
  imgUrl: string;
  title: string;
  price: string;
  quantity?: number;
}

export interface Filter {
  startPrice: number;
  endPrice: number;
  male: boolean;
  female: boolean;
  sizes: {
    size35: boolean;
    size36: boolean;
    size37: boolean;
    size38: boolean;
    size39: boolean;
    size40: boolean;
    size41: boolean;
    size42: boolean;
    size43: boolean;
  };
}

// команда
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  imgUrl: string;
};

// статусы
export enum ReqeustStatus {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
