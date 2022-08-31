import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Signup from './pages/signup/SignUp';
import ProductList from './pages/products/ProductList/ProductList';
import ProductDetail from './pages/products/productDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import AuthContext from './Context/authContext';

const Router = () => {
  const authContext = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {!authContext.isLoggedIn && <Route path="/login" element={<Login />} />}
        {!authContext.isLoggedIn && (
          <Route path="/signup" element={<Signup />} />
        )}
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        {authContext.isLoggedIn && <Route path="/cart" element={<Cart />} />}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
