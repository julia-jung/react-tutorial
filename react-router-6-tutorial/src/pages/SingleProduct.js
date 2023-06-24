import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find(({ id }) => id === productId);

  return (
    <section className='section product'>
      <img src={product.image} alt={product.id} />
      <h2>{product.name}</h2>
      <Link to='/products'>Back to list</Link>
    </section>
  );
};

export default SingleProduct;
