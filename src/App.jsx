import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [showCart, setShowCart] = requireState(false);
  const [showProductList, setShowProductList] = useState(false);

  const handleStartClicked = () => {
    setShowProductList(true);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      {!showProductList && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Where Greenery Meets Peace</p>
            <button className="get-started-button" onClick={handleStartClicked}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Navigation and Main Content */}
      {showProductList && (
        <div className={`product-list-container ${showCart ? 'cart-active' : ''}`}>
          <nav className="navbar">
            <div className="logo">Paradise Nursery</div>
            <div className="nav-links">
              <a href="#" onClick={handleContinueShopping}>Plants</a>
              <a href="#" onClick={handleCartClick} className="cart">
                <svg /* Shopping Cart Icon SVG code here */ />
                <span className="cart-quantity">🛒</span>
              </a>
            </div>
          </nav>

          {showCart ? (
            <CartItem onContinueShopping={handleContinueShopping} />
          ) : (
            <ProductList />
          )}
        </div>
      )}
    </div>
  );
}

export default App;