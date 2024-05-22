import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));
  console.log('getAll');

  const products = await productService.getAll();

  console.log(products.length);

  const productId = products[0].id;

  console.log('--'.repeat(10));
  console.log('update');

  await productService.update(productId, {
    price: 1000,
    title: 'nuevo titulox',
    description: 'nueva descripción convive',
  });

  console.log('--'.repeat(10));
  console.log('findOne');
  const product = await productService.findOne(productId);

  console.log(product);
})();
