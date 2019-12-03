import React, {useState, useEffect} from 'react'
import './index.styl'

export default function Card ({pokemon, physical, special}) {
  // let [currentPokemon, setCurrentPokemon] = useState({})
  // useEffect(() => {
  //   fetch(url)
  //   .then(response => response.json() )
  //   .then(pokemonObject => {
  //     // console.log(pokemonObject, 'pokemonObject')
  //     setCurrentPokemon(pokemonObject)

  // })}, []);
  function findColor(typeName) {
    let commonArray = physical.concat(special);

    for(let i = 0; i <= (pokemon.types || []).length - 1; i++ ) {
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
          span.item ● Height: #{pokemon.height}
          span.item ● Weight: #{pokemon.weight}
          div.item ● Abilities:
            each ability in pokemon.abilities || []
              span.ability - #{ability.ability.name}
      div.types
        each item in pokemon.types || []
          span.type(style={backgroundColor: findColor(item.type.name)}) #{item.type.name.toUpperCase()}
  `
}