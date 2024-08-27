import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../layout/css/style.css';
const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3000/products');
          const data = await response.json();
          setProducts(data.data);
          console.log('Dữ liệu đã được lấy thành công:', data);
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu:', error);
        }
      };
  
      fetchProducts();
    }, []);
    const handleAddtoCart = (product) => {
      dispatch(addToCart(product));
      navigate('/cart');
    };
  return (
   <>
          {Array.isArray(products) && products.map(product => (
          <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
          <Link className="product-item" to={`/detail/${product.id}`}>
            <img src={product.image} className="img-fluid product-thumbnail" alt={product.alt} />
            <h3 className="product-title">{product.title}</h3>
            <strong className="product-price">{formatPrice(product.price)}</strong>
            </Link>
            <button className="icon-cross" onClick={() => handleAddtoCart(product)}>
            <img src="/img/images/cross.svg" className="img-fluid" alt="cross icon" />
          </button>
        
        </div>
        ))}
     </>
  );
};

export default ProductList;
