import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-bg">
        <img src="/images/hero_headphone_bg_1776273337196.png" alt="Premium Headphones" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <span className="hero-badge glass">New Arrival</span>
        <h1 className="hero-title">
          Experience <span className="text-gradient">Pure Sound</span>.<br />
          Elevate Your Reality.
        </h1>
        <p className="hero-subtitle">
          Discover our curated collection of premium noise-cancelling headphones and next-gen tech gear designed for audiophiles.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Shop Now <ArrowRight size={18} />
          </button>
          <button className="btn-secondary glass">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
