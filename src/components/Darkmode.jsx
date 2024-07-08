import React from 'react'
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"
const Darkmode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme")?  localStorage.getItem("theme"): "light")

    const element = document.documentElement;
    React.useEffect(() => {
      if (theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

      }
      }, [theme]
    
  )
  return (
    
    <div className='relative'>
      <MdDarkMode className={`w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${ theme === "dark" ? 'opacity-0': 'opacity-100'} `} onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>
      <MdLightMode className='w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1) transition-all duration-300 ]' onClick={() => setTheme(theme === "light" ? "dark" : "light")}/>
    </div>
  )
}

export default Darkmode
