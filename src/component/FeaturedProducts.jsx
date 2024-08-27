import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../layout/css/style.css';


const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const featured = data.data.slice(0, 3); // Assuming your API response has a 'data' field
        setFeaturedProducts(featured);
        console.log('Featured Products:', featured);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  const formatPrice = (price) => {
    if (typeof price === 'number' && !isNaN(price)) {
      return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    return 'N/A'; // or any other fallback value
  };


  return (
    <>
      {featuredProducts.map((product) => (
        <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <Link className="product-item" to={`/detail/${product.id}`}>
            <img src={product.image} className="img-fluid product-thumbnail" alt={product.alt} />
            <h3 className="product-title">{product.title}</h3>
            <strong className="product-price">{formatPrice(product.price)}</strong>          </Link>
          <button className="icon-cross" onClick={() => handleAddtoCart(product)}>
            <img src="/img/images/cross.svg" className="img-fluid" alt="cross icon" />
          </button>
        </div>
      ))}
    </>
  );
};

export default FeaturedProducts;
