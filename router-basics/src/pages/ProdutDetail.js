import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  // console.log(params.productId);

  return (
    <section>
      <h1>Product Detaiil</h1>
      <p>{params.productId}</p>
    </section>
  )
};

export default ProductDetail;