import { Link } from 'react-router-dom';

const Products = () => (
  <section>
    <h1>The products page!</h1>
    <ul>
      <li><Link to="/products/1">A book</Link></li>
      <li><Link to="/products/2">A carpet</Link></li>
      <li><Link to="/products/3">A online course</Link></li>
    </ul>
  </section>
);

export default Products;