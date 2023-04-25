import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'

import "./pages.css"


const api = import.meta.env.VITE_API

const Search = () => {

  const [searchParams] = useSearchParams("")

  const query = searchParams.get("q")

  const [search, setSearch] = useState([])

  const [offset, setOffset] = useState(1)

  const itensPerPage = 20

  const [maxPages, setMaxPages] = useState(0)

  const getSearch = async(url) => {
      const response = await fetch(url)
      const res = await response.json()          
      setSearch(res.data)
      setMaxPages(Math.ceil(res.meta.count/itensPerPage))
      console.log(res.data)                
  }
  const scrollToStart = () => {
      document.getElementsByClassName('container')[0].scrollTo(0,0)
  }
  const handleNextPage = () => {
      if((Math.ceil(offset - itensPerPage/itensPerPage)) <= maxPages) {
          setOffset(offset + itensPerPage)     
      } 
  }
  const handlePreviousPage = () => {
      if(offset>itensPerPage) {
          setOffset(offset - itensPerPage)}                         
  }
  useEffect(()=>{
      scrollTo(0,0)
  }, [offset])
          
  useEffect(() => {        
      const searchWithQueryUrl = `${api}?filter[text]=${query}&page[limit]=${itensPerPage}&page[offset]=${offset}`
      getSearch(searchWithQueryUrl)                    
      
  }, [offset, setMaxPages, searchParams, setOffset])

  return (
      
    <div className='container'>
      <h2 className='title'>Results for: 
          <span className='query-text'>{query}</span>
      </h2>
      <div className='card-container' > 
          {search.length===0 && <p>Loading</p> }
          {search.length > 0 && 
              search.map((anime) =><Card key={anime.id} anime={anime}/>)}
          
      </div> 
      <div className='buttons'>
              <button onClick={handlePreviousPage}>Previous Page</button>
              <button onClick={handleNextPage}>Next Page</button>
      </div>    
    </div>
  )
}

export default Search