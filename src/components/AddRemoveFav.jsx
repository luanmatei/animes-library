import React, { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md'

import "./AddRemoveFav.css"

const AddRemoveFav = ({id}) => {

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(()=>{
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))
      if(!favorites || !favorites.includes(id)) return
      else return setIsFavorite(true)
  },[id])
  
  const updateStatusFav = () => {
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))    
        if(!favorites || !favorites.includes(id)) setIsFavorite(false)        
        else setIsFavorite(true)       
  }
  const handleOnRemoveFavorite = () => {    
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))
    console.log(favorites)
    if(!favorites || !favorites.includes(id)) return    
    if(favorites.length === 1 && favorites.includes(id)) localStorage.removeItem("FAVORITES") 
    else localStorage.setItem("FAVORITES", JSON.stringify(favorites.filter(itemId => itemId !== id)))
    updateStatusFav()
  }
  const handleOnAddFavorite = () => {      
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))    
    if(!favorites) {
      localStorage.setItem("FAVORITES", JSON.stringify([id]))         
    }    
    else if(favorites && !favorites.includes(id)) {
      localStorage.setItem("FAVORITES", JSON.stringify([...favorites, id]))      
    }
    updateStatusFav()
  }
  return (
    <div className='container'>
      {isFavorite ? (
        <div className='butao'>
          <button onClick={handleOnRemoveFavorite}><MdFavorite size={50} color='red'/></button> 
        </div>
        ) : (
        <div className='butao'>
          <button onClick={handleOnAddFavorite}><MdFavorite size={50} color='green'/></button> 
        </div>)
      }
    </div>
  )
}

export default AddRemoveFav