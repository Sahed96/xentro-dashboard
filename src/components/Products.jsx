import axios from 'axios';
import { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';
import { Dropdown, Space } from 'antd';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'asc') return a.id - b.id;
    if (sort === 'desc') return b.id - a.id;
    return 0;
  });

  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects').then(res => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <div className="flex items-center gap-10 pt-3 px-8">
        <div className="flex items-center gap-4">
          {' '}
          <p>Search</p>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2"
            type="text"
          />
        </div>
        <div>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: 'Ascending',
                  onClick: () => setSort('asc'),
                },
                {
                  key: '2',
                  label: 'Descending',
                  onClick: () => setSort('desc'),
                },
              ],
            }}
          >
            <a onClick={e => e.preventDefault()}>
              <Space className="bg-[#3d8cd6] text-white px-4 py-2 rounded-lg">
                Sort By
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
