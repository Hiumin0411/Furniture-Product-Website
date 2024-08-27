import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItemsCount } from '../features/cart/cartSlice';
import cartIcon from '../layout/images/cart.svg'; // Đường dẫn tới biểu tượng giỏ hàng
import './CartIcon.css';
const CartIcon = () => {
  const totalItems = useSelector(selectCartItemsCount);

  return (
    <>
    <Link
     className="nav-link"
      to="/cart">
        <img src={cartIcon} alt="Cart" />
        <span className="cart-count">{totalItems}</span>
    
          </Link>
</>
  );
};

export default CartIcon;
