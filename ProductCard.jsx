import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const tagConfig = {
  popular:     { bg: '#EEF0FF', color: '#5D5FEF', bar: 'linear-gradient(90deg, #5D5FEF, #7B7DF7)' },
  new:         { bg: '#E8FFF5', color: '#00D68F', bar: 'linear-gradient(90deg, #00D68F, #00B8A9)' },
  'best-seller': { bg: '#FFF0F0', color: '#FF6B6B', bar: 'linear-gradient(90deg, #FF6B6B, #FF8E8E)' },
};

const ProductCard = ({ product, addToCart, isInCart }) => {
  const [buttonText, setButtonText] = useState('Buy Now');

  const handleBuyNow = () => {
    const added = addToCart(product);
    if (added) {
      setButtonText('Added to Cart ✓');
      setTimeout(() => setButtonText('Buy Now'), 2000);
    }
  };

  const tag = tagConfig[product.tagType] || tagConfig.popular;

  const getPeriodLabel = () => {
    switch (product.period) {
      case 'monthly':  return '/mo';
      case 'yearly':   return '/yr';
      case 'one-time': return ' once';
      default:         return '';
    }
  };

  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '28px',
        border: '1px solid #E2E4EF',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: tag.bar,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div
          style={{
            width: '58px', height: '58px', borderRadius: '16px',
            backgroundColor: tag.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px',
          }}
        >
          {product.icon}
        </div>
        <span
          className="text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: tag.bg, color: tag.color }}
        >
          {product.tag}
        </span>
      </div>

      {/* Name & Description */}
      <h3
        style={{ fontFamily: 'Sora, sans-serif' }}
        className="text-xl font-bold text-dark mb-2"
      >
        {product.name}
      </h3>
      <p className="text-gray-custom text-sm leading-relaxed mb-5" style={{ flex: 1 }}>
        {product.description}
      </p>

      {/* Price */}
      <div className="flex items-end gap-1 mb-5">
        <span
          style={{ fontFamily: 'Sora, sans-serif' }}
          className="text-3xl font-extrabold text-dark"
        >
          ${product.price}
        </span>
        <span className="text-gray-custom text-sm mb-1">{getPeriodLabel()}</span>
      </div>

      {/* Features */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2.5 text-sm text-gray-custom">
            <div
              style={{
                width: '20px', height: '20px', borderRadius: '50%',
                backgroundColor: '#E8FFF5',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FiCheck style={{ width: '11px', height: '11px', color: '#00D68F' }} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button
        onClick={handleBuyNow}
        disabled={isInCart}
        style={{
          width: '100%',
          padding: '13px 0',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '14px',
          border: 'none',
          cursor: isInCart ? 'default' : 'pointer',
          background: isInCart
            ? 'linear-gradient(135deg, #E8FFF5, #D0FFE8)'
            : 'linear-gradient(135deg, #5D5FEF, #7B7DF7)',
          color: isInCart ? '#00D68F' : '#fff',
          transition: 'all 0.3s ease',
          boxShadow: isInCart ? 'none' : '0 4px 16px rgba(93,95,239,0.30)',
        }}
      >
        {isInCart ? '✓ Added to Cart' : buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
