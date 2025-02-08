import Card from './Card';
import { FaBox, FaUsers } from 'react-icons/fa';
import { dataBar } from '../assets/chartData';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects').then(res => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    if (users.length > 0 && products.length > 0) {
      setChartData({
        labels: users.map(user => user.username),
        datasets: [
          {
            label: 'Users Count',
            data: users.map((user, index) => index + 1),
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Products Count',
            data: products.map((_, index) => index + 1),
            borderColor: 'red',
            fill: false,
          },
        ],
      });
    }
  }, [users, products]);

  return (
    <div className="grow p-8">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
        <Card icon={<FaBox />} title="Products" value={`${products?.length}`} />
        <Card icon={<FaUsers />} title="Users" value={`${users?.length}`} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">User Data</h3>
          {chartData ? <Line data={chartData} /> : <p>Loading...</p>}
        </div>
        <div className="bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Products Data</h3>
          <Bar data={dataBar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
