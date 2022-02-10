import React from 'react'

import { useState, useEffect } from 'react';
import { getData } from '../../api/data'

import { Character } from '../character/Character';
import style from './home.module.scss'

export const Home = () => {
 
  const [page, setPage] = useState(`https://rickandmortyapi.com/api/character`)
  const [pages, setPages] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [characters, setCharacters] = useState([])

  useEffect( async () => {
   await getData(page)
     .then (data => {
      setCharacters(data.data.results)
      setPages([data.data.info.prev, data.data.info.next])
    })
  }, [page] )

  return (
    <div className={style.container}>

      <div className={style.pages}>

        <h2> page: {pageCount} </h2>

        <button onClick={() => { 
          setPage(pages[0])
          if(pageCount == 0) return
          setPageCount(pageCount - 1)
          console.log(characters)
        }} > Prev Page </button>

        <button onClick={() => {
          setPage(pages[1])
          setPageCount(pageCount + 1)
          }} > Next page </button> 
      </div>
      <Character
        characters = {characters}
      />
    </div>
  )
}