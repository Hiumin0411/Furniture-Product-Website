import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../layout/css/style.css';

const FeaturedCategories = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const featured = data.data.slice(0, 4); // Assuming your API response has a 'data' field
        setFeaturedCategories(featured);
        console.log('Featured Categories:', featured);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [])

  // const formatPrice = (price) => {
  //   return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  // };

  return (
    <div className="row">
    {featuredCategories.map((category, index) => (
      <div className="col-md-6 col-xl-3" key={index}>
        <article className="stat-cards-item">
          <div className="stat-cards-icon primary">
            <i className={`fa-solid ${category.iconClass}`}></i>
          </div>
          <div className="stat-cards-info">
            <p className="stat-cards-info__num">{category.title}</p>
            <p className="stat-cards-info__progress">
              <span className={`stat-cards-info__profit ${category.trendClass}`}>
                <i data-feather={category.trend} aria-hidden="true"></i>{category.stock} sản phẩm
              </span>
              Tháng trước
            </p>
          </div>
        </article>
      </div>
    ))}
  </div>
  );
};

export default FeaturedCategories;