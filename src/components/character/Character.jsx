import React from 'react'

import style from './character.module.scss'

export const Character = ({characters}) => {
  return (
    <div>
        <div className={style.characters}>
          {characters.map( (item, index) => (
            <div key={index} className={style.character}>
              <img src={item.image} alt="" />
              <span>
                <h2> {item.name} </h2>
                <p> {item.gender} </p>
                <p> {item.location.name} </p>
                <p> {item.status} {item.type} </p>
              </span>
            </div>
          ))}
        </div>
    </div>
  )
}
