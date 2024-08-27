import React, { useState, useEffect } from 'react';
import '../layout/css/style.css'
import '../layout/css/detail.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PoppularProducts from './PoppularProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';


const formatPrice =(price)=>{
  return new Intl.NumberFormat('vi-VN',{style:'currency', currency:'VND'}).format(price);
};
const ProductDetail =() =>{
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data.data);
        console.log('Chi tiết sản phẩm:', data.data);
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết sản phẩm:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  if (!product) {
    return <div>
 <h2> Sản phẩm không tồn tại !</h2> 
 <Link to="/shop" className="btn_contiu">Back to Shop</Link>

  </div>;
  }
 
    return(

        <body>
             <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
              Modern Interior{' '}
              <span clsas="d-block">
                Design Studio
              </span>
            </h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
            <Link className="btn btn-secondary me-2" to="/shop">
  Shop now
</Link>

              <Link
                className="btn btn-white-outline"
                to="/"
              >
                Explore
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img
              className="img-fluid"
              src="/img/images/couch.png"
              alt="Couch icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
     <div className="product-detail">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <img src={product.image} className="img-fluid product-image" alt="Ergonomic Chair" />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="product-title">{product.title}</h1>
            <strong className="product-price">{formatPrice(product.price)}</strong>
            <p className="product-description">{product.description}</p>
            <div className="button-group">
              <button className="btn_contiu_add_to_cart" onClick={handleAddToCart}>Add to cart</button>
              <Link to="/shop" className="btn_contiu">Back to Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="popular-product">
  <div className="container">
    <div className="row">

   <PoppularProducts/>

    </div>
  </div>
        </div>
        </body>
    );
};
export default ProductDetail;