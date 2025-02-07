import axios from 'axios';
import { useEffect, useState } from 'react';
// import { MdDevices } from 'react-icons/md';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects').then(res => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
