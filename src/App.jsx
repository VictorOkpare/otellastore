import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreenComponents/HomeScreen';
import Contact from './screens/Contact/Contact.jsx';
import ProductScreen from './screens/ProductScreen/ProductScreen.jsx';
import Collarneck from './screens/ProductScreen/Collarneck.jsx';
import Roundneck from './screens/ProductScreen/Roundneck.jsx';
import KidsTshirt from './screens/ProductScreen/KidsTshirt.jsx';
import Vneck from './screens/ProductScreen/Vneck.jsx';
import Longsleeve from './screens/ProductScreen/Longsleeve.jsx';
import { CartProvider } from './components/CartContext.jsx';
import CartPage from './screens/CartScreen/CartPage.jsx';
import CustomizationPage from './screens/Customization page/CustomizationPage.jsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from './components/Footer';
import Popup from './components/Popup';
import OrderTracking from './screens/OrderTrackingScreen/OrderTracking';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="bg-white dark:bg-black dark:text-white duration-200">
          <Navbar handleOrderPopup={handleOrderPopup} />
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/orderTracking" element={<OrderTracking />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/ProductScreen" element={<ProductScreen />} />
              <Route path="/Roundneck" element={<Roundneck />} />
              <Route path="/Collarneck" element={<Collarneck />} />
              <Route path="/Longsleeve" element={<Longsleeve />} />
              <Route path="/KidsTshirt" element={<KidsTshirt />} />
              <Route path="/Vneck" element={<Vneck />} />
              <Route path="/Cart" element={<CartPage />} />
              <Route path="/Customization" element={<CustomizationPage />} />
            </Routes>
          </main>
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
