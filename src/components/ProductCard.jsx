import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card glass-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="wishlist-btn glass" aria-label="Add to Wishlist">
          <Heart size={20} />
        </button>
        {product.isNew && <span className="product-badge new">New</span>}
        {product.discount && <span className="product-badge sale">-{product.discount}%</span>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        
        <div className="product-price-row">
          <div className="price-container">
            <span className="product-price">${product.price.toFixed(2)}</span>
            {product.oldPrice && <span className="product-old-price">${product.oldPrice.toFixed(2)}</span>}
          </div>
          <button className="add-to-cart-btn btn-primary" aria-label="Add to Cart">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
