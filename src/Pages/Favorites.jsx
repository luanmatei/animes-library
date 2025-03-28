import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import "./pages.css"

const animeUrl = import.meta.env.VITE_API

const Favorites = () => {    

  const [favorites, setFavorites] = useState([])
       
   useEffect(() => {
  
    const getAnimesById = async () => {
      const storedFavorites = JSON.parse(localStorage.getItem("FAVORITES"))
      if(!storedFavorites) return  
      const animes = await Promise.all(storedFavorites.map(async id => {
        const response = await fetch(`${animeUrl}/${id}`);
        const res = await response.json();
        return res.data
      }))
      setFavorites(animes)
    }
    getAnimesById()
    
   }, [])     

    return (
      <div className='container'>
            <h1 className='title'>Favorites:
            </h1>
            <div className='card-container' > 
                {favorites.length===0 && <h3>No favorites</h3> }
                {favorites?.map((anime) =><Card key={anime.id} anime={anime}/>)}               
            </div>             
        </div>
    )
}

export default Favorites