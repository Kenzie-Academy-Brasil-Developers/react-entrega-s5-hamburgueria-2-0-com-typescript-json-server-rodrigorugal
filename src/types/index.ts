import { ReactNode } from "react";

export interface ChildrensProdivers {
  children: ReactNode;
}

export interface ProductArray {
  name: string;
  category: string;
  image: string;
  price: number;
  id: number;
}

export interface ComponentItem {
  item: ProductArray;
}
