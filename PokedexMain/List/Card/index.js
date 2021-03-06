import React, {useState, useEffect} from 'react'
import './index.styl'

export default function Card ({ pokemon, types, animated }) {

  function findColor (typeName) {
    for(let i = 0; i <= (pokemon.types || []).length - 1; i++ ) {
      for (let j = 0; j <= types.length - 1; j++) {
        if (typeName === types[j].type.toLowerCase()) {
          return types[j].color
        }
      }
    }
  }
  return pug `
    div.root
      div.cardBody
        span.name #{pokemon.name.toUpperCase()}
        img.image(
          referrerPolicy='no-referrer'
          src=animated ? 'https://randompokemon.com/sprites/normal/' + pokemon.id +'.gif' : 'https://img.pokemondb.net/artwork/' + pokemon.name + '.jpg'
        )
        div.pokemonInfo
          span.item ● Height: #{pokemon.height}
          span.item ● Weight: #{pokemon.weight}
          div.item ● Abilities:
            each ability in pokemon.abilities || []
              span.ability - #{ability.ability.name}
      div.types
        each item in pokemon.types || []
          span.type(style={backgroundColor: findColor(item.type.name)}) #{item.type.name.toUpperCase()}
      span.id #{pokemon.id < 10 ? '0' + pokemon.id : pokemon.id}
  `
}