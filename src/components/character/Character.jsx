import React from 'react'

import style from './character.module.scss'

export const Character = ({character}) => {
  return (
    <div>
          <div className={style.character}>
            <img src={character.image} alt="" />
            <span>
              <h2> {character.name} </h2>
              <p> {character.gender} </p>
              <p> {character.location.name} </p>
              <p> {character.status} {character.type} </p>
            </span>
          </div>
    </div>
  )
}
