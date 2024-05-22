import { Product } from '../models/product.model';
import { BaseHttpService } from './base-http.service';

export class ProductHttpService2 extends BaseHttpService<Product> {
  otroRequest() {
    this.url;
  }
}
