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
            <h2 className='title'>Favorites:
            </h2>
            <div className='card-container' > 
                {/* {favorites.length===0 && <p>No favorites</p> } */}
                {favorites?.map((anime) =><Card key={anime.id} anime={anime}/>)}
               
            </div> 
            <div className='buttons'>
                   {/*  <button onClick={handlePreviousPage}>Previous Page</button>
                    <button onClick={handleNextPage}>Next Page</button> */}
            </div>    
        </div>
    )
}

export default Favorites