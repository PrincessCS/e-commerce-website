import React, {useState} from 'react';
import { useGetAllProductsQuery } from './productsApi';
import ProductCard from './ProductCard';
import './ProductList.css'

const ProductList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const [shownProducts, setShownProducts] = useState(10);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const handleMoreProducts = () =>{
    setShownProducts (prevShownProducts => prevShownProducts + 5);
  };

  return (
    <div className="product-list">
      {data.products.slice(0, shownProducts).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {shownProducts < data.products.length &&(
        <div className='btn_container'>
        <button onClick={handleMoreProducts} className='load_more'>Load More Products</button>
        </div>
      )}

    </div>
  );
};

export default ProductList;