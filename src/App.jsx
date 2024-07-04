import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import Products from "./screens/Products"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from "aos"
import "aos/dist/aos.css"
import TopDesign from "./screens/TopDesign"
import CustomizationScreen from "./screens/CustomizationScreen"
import Subscription from "./screens/Subscription"
import Testimonials from "./screens/Testimonials"
import Footer from "./components/Footer"
import Popup from "./components/Popup"

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
        <Route path="/products" element={<Products/>}/>
        </Routes>
      </main>
      <Products/>
      <TopDesign/>
      <CustomizationScreen/>
      <Subscription/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup = {setOrderPopup}/>
      </div>
    </Router>
  )
}

export default App
