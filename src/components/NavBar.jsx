import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'
import ThemeToggle from './ThemeToggle'

import "./NavBar.css"

const NavBar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault()    
    if(!search) return    
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <nav 
      className='nav-bar-container'>
        <div className='home-logo'>
          <ThemeToggle/>
          <Link to="/">AniMerda</Link>
        </div>
        <form className="search-query" onSubmit={handleSubmit}>
          <input type="text" 
              placeholder='Look for animes here' 
              onChange={(e)=> setSearch(e.target.value)}
              value={search}/>
          <button><BiSearchAlt2/></button>
        </form>
        <ul className='nav-list'>
          <Link to="/">Home</Link>          
          <Link to="favorites">Favorites</Link>
        </ul>
        
        
        
    </nav>
  )
}

export default NavBar