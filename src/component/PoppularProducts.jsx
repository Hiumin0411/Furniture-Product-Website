import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../layout/css/style.css';
import '../css/poppular.css';
const PoppularProducts = () => {
  const [poppularProducts, setPoppularProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const poppular = data.data.slice(0, 3);
        setPoppularProducts(poppular);
        console.log('Poppular Products:', poppular);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {poppularProducts.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <Link className="product-item-sm d-flex no-underline" to={`/detail/${product.id}`}>
            <div className="thumbnail">
              <img src={product.image} alt={product.alt} className="img-fluid" />
            </div>
            <div className="pt-3">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><Link to={`/detail/${product.id}`}>Read More</Link></p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PoppularProducts;
