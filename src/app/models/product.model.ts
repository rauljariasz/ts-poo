export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  categoryId: number;
}

export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'publick',
}

export interface Category {
  id: number;
  name: string;
  image: string;
  access?: AccessType;
}
