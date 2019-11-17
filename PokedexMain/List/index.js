import React from 'react'
import './index.styl'

export default function List ({pokeData}) {
  fetch('https://pokeapi.co/api/v2/pokemon/25/')
  .then(response => response.json())
  .then(pokemons => {
    console.log(pokemons, 'pokemon') })
  return pug `
    div.root
      - console.log(pokeData, 'pokeData')
      each Pokemon, idx in pokeData
        div.card(key=idx)
          span.name #{Pokemon.name}
          img(src='https://img.pokemondb.net/artwork/' + Pokemon.name + '.jpg')

  `
}