import { Product } from '../models/product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
