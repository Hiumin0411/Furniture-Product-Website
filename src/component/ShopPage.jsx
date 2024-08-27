import React from "react";
import '../layout/css/style.css';
// import renderSanPham from "./Products";
import ProductList from "./DSSP";

const ShopPage = () =>{
return (
<body  style={{ backgroundColor: '#EFF2F1' }}>
{/* <!-- Start Hero Section --> */}
<div className="hero">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5">
        <div className="intro-excerpt">
          <h1>Shop</h1>
        </div>
      </div>
      <div className="col-lg-7">
        {/* Nội dung khác nếu cần */}
      </div>
    </div>
  </div>
</div>
{/* <!-- End Hero Section --> */}
<div className="untree_co-section product-section before-footer-section" style={{ backgroundColor: '#EFF2F1' }}>
  <div className="container">
    <div className="row">

    {/* {renderSanPham}; */}
      <ProductList/>
    </div>
  </div>
</div>


</body>
);
};
export default ShopPage;