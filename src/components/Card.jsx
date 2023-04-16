import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Card.css"

const Card = ({anime, showLink= true}) => {
    const navigate = useNavigate()
    const linkAnime = () => {
      navigate(`/anime/${anime.id}`)
    }
    
    return (
      
        <div key={anime.id} onClick={linkAnime}  className='card'>
            <div className='card-visual'>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.slug} />              
            </div>
            <div className='card-info'>
              {anime.attributes.canonicalTitle}
              <span>Rating: {anime.attributes.averageRating}</span>              
            </div>
        </div> 
    
    )
}

export default Card;