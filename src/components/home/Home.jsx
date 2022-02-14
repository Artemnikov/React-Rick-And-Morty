import React from 'react'

import { useState, useEffect } from 'react';
import { getData, getTest } from '../../api/data'

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
    await getTest() 
    .then( res => res) .then(data => console.log(data))
  }, [page] )

  return (
    <div className={style.container}>

      <div className={style.pages}>

        <h2> page: {pageCount} </h2>

        <button onClick={() => { 
          if(pageCount == 0) return
          setPage(pages[0])
          setPageCount(pageCount - 1)
        }} > Prev Page </button>

        <button onClick={() => {
          if(pageCount == 42) return
          setPage(pages[1])
          setPageCount(pageCount + 1)
          }} > Next page </button> 
      </div>
      <div className={style.characters}>
          {characters.map((item, index) => (
            <Character
              key={index}
              character = {item}
            />
          ))}
      </div>
    </div>
  )
}
