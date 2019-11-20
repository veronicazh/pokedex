import React, {useState, useEffect} from 'react'
import './index.styl'

export default function Card ({pokemon, url}) {
  let [currentPokemon, setCurrentPokemon] = useState({})
  useEffect(() => {
    fetch(url)
    .then(response => response.json() )
    .then(pokemonObject => {
      console.log(pokemonObject, 'pokemonObject')
      setCurrentPokemon(pokemonObject)

})}, [])
  return pug `
    div.root
      span.name #{pokemon.name.toUpperCase()}
      img.image(src='https://img.pokemondb.net/artwork/' + pokemon.name + '.jpg')
      div.pokemonInfo
        span.item Height: #{currentPokemon.height}
        span.item Weight: #{currentPokemon.weight}
        span Abilities:
        each ability in currentPokemon.abilities || []
          span.item #{ability.ability.name}
  `
}