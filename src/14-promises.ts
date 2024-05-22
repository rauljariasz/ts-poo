import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('true');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);
  const products = await getProducts();
  console.log(products.data);
  const productsv2 = await getProductsAsync();
  console.log(products);
})();
