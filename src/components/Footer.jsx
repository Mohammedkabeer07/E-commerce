import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      padding: '4rem 2rem 2rem',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        <div>
          <h2 className="text-gradient" style={{ fontFamily: 'Outfit', fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>AURA</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Elevating your tech experience with premium, curated products designed for modern lifestyles.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--text-secondary)' }}><Mail size={20}/></a>
            <a href="#" style={{ color: 'var(--text-secondary)' }}><Phone size={20}/></a>
            <a href="#" style={{ color: 'var(--text-secondary)' }}><MapPin size={20}/></a>
            <a href="#" style={{ color: 'var(--text-secondary)' }}><Globe size={20}/></a>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Shop</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>All Products</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>New Arrivals</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Featured</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Sale</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>FAQ</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Shipping</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Returns</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Newsletter</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Enter your email" style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              outline: 'none',
              flex: 1
            }}/>
            <button className="btn-primary" style={{ padding: '0.75rem 1.25rem' }}>Join</button>
          </div>
        </div>
      </div>
      
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.85rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Aura Inc. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
