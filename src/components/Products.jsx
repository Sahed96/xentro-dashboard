import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdDevices } from 'react-icons/md';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects').then(res => {
      setProducts(res.data);
    });
  });
  return (
    <div className="grow grid grid-cols-3 gap-5 p-8">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white text-dark p-4 rounded-lg shadow-md flex items-center space-x-3
          dark:bg-gray-800 dark:text-white"
        >
          <div>
            <h2 className="text-xl mb-4">
              <MdDevices />:
              {product.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
