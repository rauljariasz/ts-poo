import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';
import { ProductHttpService2 } from './product-http2.service';

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService2(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.otroRequest();
  }
}
