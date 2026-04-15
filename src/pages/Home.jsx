import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Aura Sync Smartwatch',
      category: 'Wearables',
      price: 299.99,
      image: '/images/product_smartwatch_1776273386258.png',
      isNew: true,
      discount: null
    },
    {
      id: 2,
      name: 'Null Audio Earbuds X',
      category: 'Audio',
      price: 149.99,
      oldPrice: 199.99,
      image: '/images/product_earbuds_1776273474518.png',
      isNew: false,
      discount: 25
    },
    {
      id: 3,
      name: 'MechPro Custom Keyboard',
      category: 'Accessories',
      price: 189.50,
      image: '/images/product_keyboard_1776273506004.png',
      isNew: true,
      discount: null
    },
    {
      id: 4,
      name: 'Aura Studio Max Headset',
      category: 'Audio',
      price: 349.99,
      oldPrice: 399.99,
      image: '/images/hero_headphone_bg_1776273337196.png',
      isNew: false,
      discount: 12
    }
  ];

  return (
    <div className="home-container">
      <Hero />
      
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Trending <span className="text-gradient">Now</span></h2>
          <p className="section-subtitle">Discover our most popular premium gear</p>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="explore-more">
           <button className="btn-secondary glass" style={{ padding: '14px 40px', fontSize: '1rem' }}>
             View All Products
           </button>
        </div>
      </section>

      <section className="promo-section">
         <div className="promo-card glass-card">
            <div className="promo-content">
               <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Outfit' }}>Level Up Your Setup</h2>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Get 20% off all gaming accessories this weekend. Premium quality guaranteed.</p>
               <button className="btn-primary">Shop The Sale</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
