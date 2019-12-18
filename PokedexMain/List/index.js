import React from 'react'
import './index.styl'
import Card from './Card'

export default React.memo(function List ({pokeData, types, animated}) {

  return pug `
    div.root
      div.container
        each pokemon in pokeData
          Card(
            pokemon=pokemon
            key=pokemon.name
            types=types
            animated=animated
          )
  `
})