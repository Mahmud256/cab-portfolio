import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
  return (
    <div className="flex">

      {/* Main Content */}
      <div
        className={`flex-1 lg:middle-container bg-neutral-50 text-gray-900`}
      >
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Root;