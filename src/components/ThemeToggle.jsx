import React, { useEffect, useRef, useState } from 'react'
import {
  MdOutlineDarkMode,
  MdLightMode,
  MdDarkMode
} from "react-icons/md"

const ThemeToggle = () => {
 
  const [theme, setTheme] = useState(() =>{
    const currentSavedTheme = localStorage.getItem("THEME")
    if(currentSavedTheme === "dark") return "dark"
    else return "light"
  })
  
  const toggleTheme = () => {
    document.body.classList.remove("light-theme", "dark-theme")    
    setTheme(theme === "dark" ? "light" : "dark")       
  }
  useEffect(()=>{        
    if(theme === "light") document.body.classList.toggle("light-theme")
    else  document.body.classList.toggle("dark-theme")
    localStorage.setItem("THEME", theme)
  },[theme])
  
  return (
    <> 
    <span onClick={toggleTheme}>
      {theme=== "light" ? <MdDarkMode /> : <MdLightMode />} 
    </span>
           
    </>
    
  )
}

export default ThemeToggle