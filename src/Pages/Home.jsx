import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

import "./pages.css"

const animeUrl = import.meta.env.VITE_API
const Home = () => {
  const [search, setSearch] = useState([])
  useEffect(() => {
    const getSearch = async() => {
      const response = await fetch(animeUrl)
      const res = await response.json()      
      setSearch(res.data)      
    }
    getSearch()
}, [])
  
  return (
    <div className='container'>
      <h1 className='title'>Trending Animes:        
    </h1>
    <div className='card-container'> 
        {search.length===0 && <p>Loading</p> }
        {search.length > 0 && 
            search.map((anime) =><Card key={anime.id} anime={anime}/>)}
    </div>    
</div>
  )    
}

export default Home