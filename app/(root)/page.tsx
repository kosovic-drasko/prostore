import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div className='space-y-8'>
      <h2 className='h2-bold'>Poslednji artikli</h2>
      <ProductList title='Nova kolekcija' data={latestProducts} />
    </div>
  );
};

export default HomePage;