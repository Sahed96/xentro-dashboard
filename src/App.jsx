import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThemeContextProvider from './context/ThemeContextProvider';
import Login from './Pages/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
        <div
          className="grow ml-16 md:ml-64 h-full lg:min-h-screen bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white"
        >
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
