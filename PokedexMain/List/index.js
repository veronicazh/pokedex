import React from 'react'
import './index.styl'
import Card from './Card'

export default React.memo(function List ({pokeData, physical, special}) {
  // fetch('https://pokeapi.co/api/v2/pokemon/25/')
  // .then(response => response.json())
  // .then(pokemons => {
  //   console.log(pokemons, 'pokemon') })
  return pug `
    div.root
      - console.log(pokeData, 'pokeData LIST')
      each pokemon in pokeData
        Card(
          pokemon=pokemon
          key=pokemon.name
          url=pokemon.url
          physical=physical
          special=special
        )
  `
})