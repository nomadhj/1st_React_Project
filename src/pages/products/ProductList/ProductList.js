import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slides from './components/Slides';
import ProductItems from './components/ProductItem';
import API from '../../../config';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const goToDetail = id => {
    navigate(`/productdetail/${id}`);
  };

  useEffect(() => {
    fetch(API.productlist + '.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, [params.id]);

  return (
    <>
      <Slides />
      <section className="productContentsWrapper">
        <div className="productCategoryOption">
          <span>티 제품</span>
          <ul>
            <li>
              <button className="activedCategoryButton">전체상품</button>
            </li>
          </ul>
        </div>
        <article className="contentWrapper">
          <div className="sortTabs">
            <span>전체상품</span>
          </div>
          <span className="productNumberText">
            총 {products.length}개의 상품이 있습니다.
          </span>
          <ul className="productList">
            {products[0] &&
              products.map(productsData => (
                <ProductItems
                  key={productsData.id}
                  data={productsData}
                  goToDetail={goToDetail}
                />
              ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default ProductList;
