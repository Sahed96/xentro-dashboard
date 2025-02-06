import { MdAddToPhotos } from 'react-icons/md';
import logo from '/xentro.jpg';
import { FaTachometerAlt, FaUsers, FaBox } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <div className="flex gap-2 mt-4 justify-center items-center">
        <img className="w-8 h-8 rounded-full" src={logo} alt="" />
        <p className="text-2xl font-bold hidden md:block text-center italic">
          Xentro
        </p>
      </div>
      <ul className="flex flex-col mt-5 text-xl">
        <NavLink to="dashboard">
          <li
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white"
          >
            <FaTachometerAlt />
            <span className="hidden md:inline">Dashboard</span>
          </li>
        </NavLink>
        <NavLink to="users">
          <li
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <FaUsers />
            <span className="hidden md:inline ">Users</span>
          </li>
        </NavLink>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <MdAddToPhotos />
          <span className="hidden md:inline ">Add Products</span>
        </li>
        <NavLink to="products">
          <li
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <FaBox />
            <span className="hidden md:inline ">Products</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
