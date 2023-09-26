import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import { useEffect } from 'react';

const MainLayout = () => {
  const loc = useLocation();
  console.log(loc);

  useEffect(() => {
    console.log(loc.pathname);
    if (loc.pathname === '/') {
      document.title = `Phone-home`;
    } else {
      document.title = `Phone ${loc.pathname.replace('/', '-')}`;
    }
    if (loc.state) {
      document.title = `Phone ${loc.state}`;
    }
  }, [loc.pathname]);
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet context={{ name: 'nur' }}></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
