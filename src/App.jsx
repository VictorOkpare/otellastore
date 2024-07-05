import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreenComponents/HomeScreen"
import Contact from "./screens/Contact/Contact.jsx"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from "aos"
import "aos/dist/aos.css"



import Footer from "./components/Footer"
import Popup from "./components/Popup"
import OrderTracking from "./screens/OrderTrackingScreen/OrderTracking"

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () =>{
     setOrderPopup(!orderPopup)}

    React.useEffect(()=>
    {
      AOS.init({
        offset:100,
        duration: 800,
        easing: "ease-in-sine",
        delay:100,
      });
      AOS.refresh();
    }, [])
  
  return (

    <Router >
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <main>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        
        <Route path="/orderTracking" element={<OrderTracking/>}/>

        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </main>
      
      
    
     

      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup = {setOrderPopup}/>
      </div>
    </Router>
  )
}

export default App
