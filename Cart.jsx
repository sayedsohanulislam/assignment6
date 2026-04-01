import { FiTrash2, FiShoppingBag } from 'react-icons/fi';

const Cart = ({ cartItems, removeFromCart, clearCart, cartTotal }) => {
  if (cartItems.length === 0) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div
          className="text-center"
          style={{
            backgroundColor: '#fff',
            borderRadius: '18px',
            padding: '48px 24px',
            border: '1px solid #E2E4EF',
          }}
        >
          <div
            style={{
              width: '80px', height: '80px', backgroundColor: '#F5F6FA',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 24px',
            }}
          >
            <FiShoppingBag style={{ width: '40px', height: '40px', color: '#6B7194' }} />
          </div>
          <h3
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-2xl font-bold text-[#1A1D2E] mb-3"
          >
            Your Cart is Empty
          </h3>
          <p className="text-[#6B7194] text-base" style={{ maxWidth: '360px', margin: '0 auto' }}>
            Looks like you haven&apos;t added any digital tools yet. Browse our products and find the perfect tools for your workflow.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="card-hover"
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '18px',
              border: '1px solid #E2E4EF',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: '52px', height: '52px', backgroundColor: '#F5F6FA',
                borderRadius: '12px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0, fontSize: '24px',
              }}
            >
              {item.icon}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4
                style={{ fontFamily: 'Sora, sans-serif' }}
                className="font-bold text-[#1A1D2E] text-lg"
              >
                {item.name}
              </h4>
              <p className="text-[#6B7194] text-sm">
                ${item.price.toFixed(2)}{' '}
                <span className="text-xs">({item.period})</span>
              </p>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              title="Remove from cart"
              style={{
                padding: '10px',
                borderRadius: '12px',
                backgroundColor: '#FFF0F0',
                color: '#FF6B6B',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FiTrash2 style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid #E2E4EF',
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#6B7194] font-medium">Total Items:</span>
          <span
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="font-bold text-[#1A1D2E]"
          >
            {cartItems.length}
          </span>
        </div>
        <div className="flex justify-between items-center" style={{ marginBottom: '24px' }}>
          <span className="text-[#6B7194] font-medium">Total Price:</span>
          <span
            style={{ fontFamily: 'Sora, sans-serif' }}
            className="text-2xl font-extrabold text-[#5D5FEF]"
          >
            ${cartTotal.toFixed(2)}
          </span>
        </div>
        <button
          onClick={clearCart}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #5D5FEF, #7B7DF7)',
            color: '#fff',
            padding: '14px 0',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '15px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
