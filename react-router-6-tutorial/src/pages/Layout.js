import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Layout = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default Layout;
