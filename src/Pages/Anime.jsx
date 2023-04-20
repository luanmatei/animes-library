import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddRemoveFav from '../components/AddRemoveFav'
import "./pages.css"

const animeUrl = import.meta.env.VITE_API

const Anime = () => {
    const [anime, setAnime] = useState([])    
    const {id} = useParams()   

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
        <div className='anime-page'>   
            {anime != "" && 
                <>
                    <h1>{anime.attributes.canonicalTitle}</h1>
                   {/*  {isFavoriteAlready() ? (
                        <div className='butao'>
                          <button onClick={handleOnRemoveFavorite}>Remove from favorites</button> 
                        </div>
                      ) : (
                        <div className='butao'>
                          <button onClick={handleOnAddFavorite}>Add to favorites</button> 
                        </div>
                      )} */}
                      {<AddRemoveFav id={id}/>}
                    <div id='nova'>                                                
                        <img className='poster' src={anime.attributes.posterImage.medium} alt={anime.attributes.slug} />                    
                        <div className='info'>
                            <p>Age Rating: {anime.attributes.ageRatingGuide}</p>
                            <p>Start Date : {anime.attributes.startDate}</p>                            
                            <p>End Date: {anime.attributes.endDate !=null ? anime.attributes.endDate: "Not finished"}</p>
                            <p>Episode Count: {anime.attributes.episodeCount != null ? anime.attributes.episodeCount : "No value"}</p>
                            <p>Episode Length: {anime.attributes.episodeLength} min</p>
                            <p>Show Type: {anime.attributes.showType}</p>                            
                        </div>
                    </div>
                    <span>{anime.attributes.synopsis}</span>
                </>
            }        
        </div>
    )
}

export default Anime