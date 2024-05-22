import axios from 'axios';
import { Category } from '../models/product.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<T> {
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll();
  console.log('Products:', rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Un titulo',
    description: 'JEjejeje',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoriesServices = new BaseHttpService<Category>(url2);

  const rta2 = await categoriesServices.getAll();
  console.log('Categorias:', rta2.length);
})();
