import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
                    <span><button>Add to favorites</button> </span>
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
                    <text>{anime.attributes.synopsis}</text>
                </>
            }        
        </div>
    )
}

export default Anime