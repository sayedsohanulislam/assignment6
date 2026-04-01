import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const ProductCard = ({ product, addToCart, isInCart }) => {
  const [buttonText, setButtonText] = useState('Buy Now');

  const handleBuyNow = () => {
    const added = addToCart(product);
    if (added) {
      setButtonText('Added to Cart ✓');
      setTimeout(() => setButtonText('Buy Now'), 2000);
    }
  };

  const getTagStyle = () => {
    switch (product.tagType) {
      case 'popular':
        return { backgroundColor: '#EEF0FF', color: '#5D5FEF' };
      case 'new':
        return { backgroundColor: '#E8FFF5', color: '#00D68F' };
      case 'best-seller':
        return { backgroundColor: '#FFF0F0', color: '#FF6B6B' };
      default:
        return { backgroundColor: '#EEF0FF', color: '#5D5FEF' };
    }
  };

  const getPeriodLabel = () => {
    switch (product.period) {
      case 'monthly': return '/mo';
      case 'yearly': return '/yr';
      case 'one-time': return ' once';
      default: return '';
    }
  };

  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '24px',
        border: '1px solid #E2E4EF',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{product.icon}</span>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={getTagStyle()}
        >
          {product.tag}
        </span>
      </div>

      {/* Name & Description */}
      <h3
        style={{ fontFamily: 'Sora, sans-serif' }}
        className="text-xl font-bold text-[#1A1D2E] mb-2"
      >
        {product.name}
      </h3>
      <p className="text-[#6B7194] text-sm leading-relaxed mb-4" style={{ flex: 1 }}>
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-5">
        <span
          style={{ fontFamily: 'Sora, sans-serif' }}
          className="text-3xl font-extrabold text-[#1A1D2E]"
        >
          ${product.price}
        </span>
        <span className="text-[#6B7194] text-sm ml-1">{getPeriodLabel()}</span>
      </div>

      {/* Features */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7194]">
            <FiCheck className="w-4 h-4 text-[#00D68F]" style={{ flexShrink: 0 }} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Button */}
      <button
        onClick={handleBuyNow}
        disabled={isInCart}
        className="cursor-pointer"
        style={{
          width: '100%',
          padding: '12px 0',
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '14px',
          border: 'none',
          cursor: isInCart ? 'default' : 'pointer',
          background: isInCart ? '#E8FFF5' : 'linear-gradient(135deg, #5D5FEF, #7B7DF7)',
          color: isInCart ? '#00D68F' : '#fff',
          transition: 'all 0.3s ease',
        }}
      >
        {isInCart ? 'Added to Cart ✓' : buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
