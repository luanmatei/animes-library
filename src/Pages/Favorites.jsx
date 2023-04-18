import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

const Favorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const localFavorites = localStorage.getItem("ANIME")
        if (localFavorites == null) return []
        return JSON.parse(localFavorites)
    })
    const getAnime = async (url) => {
      const response= await fetch(url);
      const res = await response.json();
      setAnime(res.data);
    }
    useEffect(()=>{
      const animeDataUrl = `${animeUrl}/${id}`
      getAnime(animeDataUrl)
    },[setAnime])    

    return (
      <div className='container'>
            <h2 className='title'>Favorites:
            </h2>
            <div className='card-container' > 
                {favorites.length===0 && <p>No favorites</p> }
                {favorites.length > 0 && 
                    search.map((anime) =><Card key={anime.id} anime={anime}/>)}
               
            </div> 
            <div className='buttons'>
                    <button onClick={handlePreviousPage}>Previous Page</button>
                    <button onClick={handleNextPage}>Next Page</button>
            </div>    
        </div>
    )
}

export default Favorites