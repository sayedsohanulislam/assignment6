import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Stats from './Stats';
import MainSection from './MainSection';
import Steps from './Steps';
import Pricing from './Pricing';
import Footer from './Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      toast.warn(`${product.name} is already in the cart!`);
      return false;
    }
    setCartItems([...cartItems, product]);
    toast.success(`${product.name} added to cart!`);
    return true;
  };

  const removeFromCart = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.info(`${product?.name} removed from cart.`);
  };

  const clearCart = () => {
    if (cartItems.length === 0) {
      toast.warn('Your cart is already empty!');
      return;
    }
    setCartItems([]);
    toast.success('Checkout successful! Cart cleared.');
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        cartTotal={cartTotal}
      />
      <Steps />
      <Pricing />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
