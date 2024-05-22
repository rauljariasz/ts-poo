import { ProductMemoryService } from './services/product.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Prd 1',
  price: 200,
  description: 'Je je je',
  categoryId: 2,
  images: [],
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Otro nombre',
});

const rta = productService.findOne(productId);
console.log(rta);
