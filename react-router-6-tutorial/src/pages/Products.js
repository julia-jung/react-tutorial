import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>Product List</h2>
        <div className='products'>
          {products.map((product, index) => {
            return (
              <article key={index}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`}>more info</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
