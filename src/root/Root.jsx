import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GoToTop from '../components/GoToTop/GoToTop';
// import { useContext } from 'react';
// import { ContextAuth } from '../provider/Provider';
// import Loding from '../pages/Loding/Loding';
AOS.init();

const Root = () => {
  const location = useLocation().pathname;
  const hiddenNavFoot = location === '/login' || location === '/register';
  // console.log(hiddenNavFoot);
  // const { isLoading } = useContext(ContextAuth);
  // if (isLoading) {
  //   return <Loding />;
  // }
  return (
    <div className="bg-white dark:bg-[#353b48] overflow-x-hidden">
      <GoToTop/>
      {hiddenNavFoot || <Nav />}
      <Outlet />
      {hiddenNavFoot || <Footer />}
    </div>
  );
};

export default Root;
