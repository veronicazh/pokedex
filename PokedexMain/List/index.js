import React from 'react'
import './index.styl'
import Card from './Card'

export default function List ({pokeData, physical, special, commonArray}) {
  // fetch('https://pokeapi.co/api/v2/pokemon/25/')
  // .then(response => response.json())
  // .then(pokemons => {
  //   console.log(pokemons, 'pokemon') })
  return pug `
    div.root
      // - console.log(pokeData, 'pokeData')
      each pokemon in pokeData
        Card(pokemon=pokemon key=pokemon.name url=pokemon.url physical=physical special=special commonArray=commonArray)
  `
}