import React from 'react'
import './index.styl'
import Card from './Card'

export default React.memo(function List ({pokeData, types, animated}) {

  return pug `
    div.root
      - console.log(pokeData, 'pokeData LIST')
      div.container
        - console.log(animated, 'animated')
        each pokemon in pokeData
          Card(
            pokemon=pokemon
            key=pokemon.name
            types=types
            animated=animated
          )
  `
})