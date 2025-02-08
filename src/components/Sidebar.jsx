/* eslint-disable react/prop-types */
import { MdAddToPhotos } from 'react-icons/md';
import logo from '/xentro.jpg';
import { FaTachometerAlt, FaUsers, FaBox } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillProduct } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };
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
        <NavLink to="products">
          <li
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <FaBox />
            <span className="hidden md:inline ">Products</span>
          </li>
        </NavLink>
        <NavLink to="add-products">
          <li
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <MdAddToPhotos />
            <span className="hidden md:inline ">Add Products</span>
          </li>
        </NavLink>
        <NavLink to={'new-products'}>
          <li
            className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
          >
            <AiFillProduct />
            <span className="hidden md:inline ">New Products</span>
          </li>
        </NavLink>
      </ul>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleLogout}
          className="lg:w-36 w-10 h-10 lg:h-14 border-2 border-sky-300 flex justify-center items-center gap-2 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"
        >
          <HiOutlineLogout />
          <span className='hidden md:inline'>
            <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
