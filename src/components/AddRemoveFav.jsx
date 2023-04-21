import React, { useState } from 'react'
import { MdFavorite } from 'react-icons/md'

import "./AddRemoveFav.css"

const AddRemoveFav = ({id}) => {
  const [statusFavorites, setStatusFavorites] = useState(()=> {
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))
        if(!favorites || !favorites.includes(id)) return false
        else return favorites.includes(id)
  })
  const updateStatusFav = () => {
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))
        if(!favorites || !favorites.includes(id)) setStatusFavorites(false)
        else setStatusFavorites(favorites.includes(id))
  }
  const handleOnRemoveFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("FAVORITES"))
    if(favorites.includes(id)) {
      localStorage.removeItem("FAVORITES", JSON.stringify([id]))
      updateStatusFav()             
    }
    else return
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
      {statusFavorites ? (
        <div className='butao'>
          <button id='remove-button' onClick={handleOnRemoveFavorite}><MdFavorite size={50} color='red'/></button> 
        </div>
        ) : (
        <div className='butao'>
          <button id='add-button' onClick={handleOnAddFavorite}><MdFavorite size={50} color='green'/></button> 
        </div>)
      }
    </div>
  )
}

export default AddRemoveFav