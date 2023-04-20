import React, { useState } from 'react'
import "../Pages/pages.css"

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
    <div>
      {statusFavorites ? (
        <div className='butao'>
          <button onClick={handleOnRemoveFavorite}>Remove from favorites</button> 
        </div>
        ) : (
        <div className='butao'>
          <button onClick={handleOnAddFavorite}>Add to favorites</button> 
        </div>)
      }
    </div>
  )
}

export default AddRemoveFav