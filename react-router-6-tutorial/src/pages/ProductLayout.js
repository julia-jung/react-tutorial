import { Outlet } from 'react-router-dom';
const ProductLayout = () => {
  return (
    <section className='section'>
      <h2>Our Products</h2>
      <Outlet />
    </section>
  );
};
export default ProductLayout;
