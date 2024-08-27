import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../layout/css/style.css';
import '../layout/css/cart.css';
import {useDispatch, useSelector } from "react-redux";
import { removeFromCart, decreaseQuantity,selectCartItems,selectCartTotalAmount, addToCart } from "../features/cart/cartSlice";

const CartPage =() =>{
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate for programmatic navigation
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
    
  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };
    const formatPrice = (price) => {
      if (typeof price === 'number' && !isNaN(price)) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      }
      return 'N/A'; // or any other fallback value
    };
  
  
    const handleProceedToCheckout = () => {
      navigate('/checkout'); // Programmatically navigate to checkout page
    };
  
  
    return(
<>
{/* <!-- Start Hero Section --> */}
<div className="hero">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5">
        <div className="intro-excerpt">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="col-lg-7">
        {/* Nội dung khác nếu cần */}
      </div>
    </div>
  </div>
</div>
{/* <!-- End Hero Section --> */}
<div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
  {cartItems.map((item) => (
    <tr key={item.id}>
      <td className="product-thumbnail">
        <img src={item.image} alt={item.title} className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{item.title}</h2>
      </td>
      <td>
        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
      </td>
      
      <td>
         <button type="button" className="quantity-btn decrease" onClick={() => handleDecreaseQuantity(item)}>-</button>
        <span className="quantity">{item.quantity}</span>
        <button type="button" className="quantity-btn increase" onClick={() => handleIncreaseQuantity(item)}>+</button>
      </td>
     
      <td>
        {(item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
      </td> {/* Tính tổng giá cho số lượng */}
      <td>
        <button className="btn btn-black btn-sm" onClick={() => handleRemoveFromCart(item)}>X</button>
      </td>
    </tr>
  ))}
</tbody>

              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block">Update Cart</button>
              </div>
              <div className="col-md-6">
               <Link to={'/shop'}>
               <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
               </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
              </div>
              <div className="col-md-4">
                <button className="btn btn-black">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{formatPrice(totalAmount)}</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">{formatPrice(totalAmount)}</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    {/* <Link to ="/checkout"> */}
                   
                    <button className="btn btn-black btn-sm btn-block" onClick={() => handleProceedToCheckout()}>
                Proceed To Checkout
              </button>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
    );
};
export default CartPage;