import React from 'react';
import { Link } from 'react-router-dom';

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const dssp = [
    {
      id: 1,
      title: 'Nordic Chair',
      price: 500000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-3.png',
      alt: 'Nordic Chair'
    },
    {
      id: 2,
      title: 'Nordic Chair',
      price: 500000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-1.png',
      alt: 'Nordic Chair'
    },
    {
      id: 3,
      title: 'Kruzo Aero Chair',
      price: 780000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-2.png',
      alt: 'Kruzo Aero Chair'
    },
    {
      id: 4,
      title: 'Ergonomic Chair',
      price: 430000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-3.png',
      alt: 'Ergonomic Chair'
    },
    {
      id: 5,
      title: 'Nordic Chair',
      price: 500000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-3.png',
      alt: 'Nordic Chair'
    },
    {
      id: 6,
      title: 'Nordic Chair',
      price: 500000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-1.png',
      alt: 'Nordic Chair'
    },
    {
      id: 7,
      title: 'Kruzo Aero Chair',
      price: 780000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-2.png',
      alt: 'Kruzo Aero Chair'
    },
    {
      id: 8,
      title: 'Ergonomic Chair',
      price: 430000,
      description: 'Donec vitae odio quis nisl dapibus malesuada.',
      image: '/img/images/product-3.png',
      alt: 'Ergonomic Chair'
    }
  ];
  console.log('All Products:', dssp);
  const renderSanPham = dssp.map((product) => (
    <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
      <Link className="product-item" to={`/detail/${product.id}`}>
        <img src={product.image} className="img-fluid product-thumbnail" alt={product.alt} />
        <h3 className="product-title">{product.title}</h3>
        <strong className="product-price">{formatPrice(product.price)}</strong>
        <span className="icon-cross">
          <img src="/img/images/cross.svg" className="img-fluid" alt="cross icon" />
        </span>
      </Link>
    </div>
  ));
  
  export default renderSanPham;
  

