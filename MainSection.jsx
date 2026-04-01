import { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import productsData from './products.json';

const MainSection = ({ cartItems, addToCart, removeFromCart, clearCart, cartTotal }) => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <section id="products" style={{ padding: '48px 0', minHeight: '400px' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-3xl md:text-4xl font-extrabold text-[#1A1D2E] mb-4"
          >
            Our <span className="gradient-text">Digital Products</span>
          </h2>
          <p className="text-[#6B7194] text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Browse our curated collection of premium digital tools designed to supercharge your productivity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center" style={{ marginBottom: '40px' }}>
          <div
            className="inline-flex"
            style={{
              backgroundColor: '#fff',
              borderRadius: '14px',
              padding: '6px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setActiveTab('products')}
              className="cursor-pointer"
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'products'
                  ? 'linear-gradient(135deg, #5D5FEF, #7B7DF7)'
                  : 'transparent',
                color: activeTab === 'products' ? '#fff' : '#6B7194',
                transition: 'all 0.2s ease',
              }}
            >
              🛍️ Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className="cursor-pointer"
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'cart'
                  ? 'linear-gradient(135deg, #5D5FEF, #7B7DF7)'
                  : 'transparent',
                color: activeTab === 'cart' ? '#fff' : '#6B7194',
                transition: 'all 0.2s ease',
              }}
            >
              🛒 Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'products' ? (
          <div className="product-grid">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                isInCart={cartItems.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            cartTotal={cartTotal}
          />
        )}
      </div>
    </section>
  );
};

export default MainSection;
