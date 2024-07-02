// import Header from "./components/Header"
import Navbar from "./components/Navbar"
// import Card from "./components/Card"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import Products from "./screens/Products"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  
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
     
    </Router>
  )
}

export default App
