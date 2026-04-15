import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo text-gradient">
          AURA
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
          <Link to="/categories" className={`nav-link ${location.pathname === '/categories' ? 'active' : ''}`}>Categories</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={22} />
          </button>
          <button className="icon-btn" aria-label="Profile">
            <User size={22} />
          </button>
          <button className="icon-btn" aria-label="Cart">
            <ShoppingCart size={22} />
            <span className="cart-badge">3</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
