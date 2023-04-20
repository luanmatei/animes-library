import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Card.css"

const Card = ({anime}) => {
    const navigate = useNavigate()
    const linkAnime = () => {
      navigate(`/anime/${anime.id}`)
    }
    
    return (      
        <div key={anime.id} onClick={linkAnime}  className='card'>
            <div className='card-visual'>
              <img id='poster' src={anime.attributes.posterImage.small} alt={anime.attributes.slug}/>              
            </div>
            <div className='card-info'>
              {anime.attributes.canonicalTitle}
              <span>Rating: {anime.attributes.averageRating != null ? anime.attributes.averageRating : "Not rated"}</span>                           
            </div>
        </div>    
    )
}

export default Card;