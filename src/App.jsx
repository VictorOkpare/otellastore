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

const App = () => {
  
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

    <Router>
     {/* <Header/> */}
     <Navbar/>
     {/* <Card/> */}
     <main>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/products" element={<Products/>}/>
        </Routes>
     </main>
     <Products/>
     <TopDesign/>
     <CustomizationScreen/>
     
    </Router>
  )
}

export default App
