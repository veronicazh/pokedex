import React, { useState, useLayoutEffect } from 'react'
import './index.styl'
import Card from './Card'

const HEIGHT = 400 + 20
const DESKTOP_AMOUNT = 4
const START_Y = 300
const MARGIN_Y = 1000

export default React.memo(function List ({pokeData, physical, special}) {
  // fetch('https://pokeapi.co/api/v2/pokemon/25/')
  // .then(response => response.json())
  // .then(pokemons => {
  //   console.log(pokemons, 'pokemon') })
  let [vertical, setVertical] = useState(0)

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  function onScroll (event) {
    setVertical(event.srcElement.body.scrollTop)
  }

  function shouldRender (index) {
    let position = START_Y + Math.floor(index / DESKTOP_AMOUNT) * HEIGHT
    let windowHeight = window.innerHeight
    let minY = vertical - MARGIN_Y
    let maxY = vertical + windowHeight + MARGIN_Y
    return minY <= position && position <= maxY
  }

  return pug `
    div.root
      // - console.log(pokeData, 'pokeData')
      each pokemon, index in pokeData
        if (shouldRender(index))
          Card(
            pokemon=pokemon
            key=pokemon.name
            url=pokemon.url
            physical=physical
            special=special
          )
        else
          div.placeholder(key=pokemon.name)
  `
})