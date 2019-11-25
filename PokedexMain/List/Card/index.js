import React, {useState, useEffect} from 'react'
import './index.styl'

export default function Card ({pokemon, url, physical, special, commonArray}) {
  let [currentPokemon, setCurrentPokemon] = useState({})
  useEffect(() => {
    fetch(url)
    .then(response => response.json() )
    .then(pokemonObject => {
      // console.log(pokemonObject, 'pokemonObject')
      setCurrentPokemon(pokemonObject)

  })}, []);
  function findColor(typeName) {
    let commonArray = physical.concat(special);

    for(let i = 0; i <= (currentPokemon.types || []).length - 1; i++ ) {
      for (let j = 0; j <= commonArray.length - 1; j++) {
        if (typeName === commonArray[j].type.toLowerCase()) {

          // console.log(commonArray[j].color)
          return commonArray[j].color

        }
      }
    }
  }
  return pug `
    div.root
      div.cardBody
        span.name #{pokemon.name.toUpperCase()}
        img.image(src='https://img.pokemondb.net/artwork/' + pokemon.name + '.jpg')
        div.pokemonInfo
          span.item ● Height: #{currentPokemon.height}
          span.item ● Weight: #{currentPokemon.weight}
          div.item ● Abilities:
            each ability in currentPokemon.abilities || []
              span.ability(key=ability.ability.name) - #{ability.ability.name}
      div.types
        each item in currentPokemon.types || []
          span.type(key=item.type.name style={backgroundColor: findColor(item.type.name)}) #{item.type.name.toUpperCase()}
  `
}