import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Inform from './components/detail/Inform';
import API from '../../../config';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const informTarget = useRef('');

  const { id } = useParams();

  useEffect(() => {
    fetch(API.product + `/${id}.json`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="productDetail">
      {product.id && <Detail product={product} />}
      <Inform informTarget={informTarget} />
    </div>
  );
};

export default ProductDetail;
