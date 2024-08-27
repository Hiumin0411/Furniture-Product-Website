import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPage from './component/HeaderPage';
import FooterPage from './component/FooterPage';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import ShopPage from './component/ShopPage';
import ServicePage from './component/ServicePage';
import ProductDetail from './component/ProductDetail';
import CartPage from './component/CartPage';
import LoginSignup from './component/LoginSignup';
import Checkout from './component/CheckoutPage';

const Layout = () => (
  <>
    <HeaderPage />
    <Outlet />
    <FooterPage />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Route>
        <Route path="/user" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
