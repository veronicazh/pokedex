import React from 'react'
import './index.styl'
import Card from './Card'

export default React.memo(function List ({pokeData, types}) {

  return pug `
    div.root
      - console.log(pokeData, 'pokeData LIST')
      each pokemon in pokeData
        Card(
          pokemon=pokemon
          key=pokemon.name
          types=types
        )
  `
})