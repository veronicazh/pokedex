import React from 'react'
import './index.styl'

export default function Pagination ({filteredPokemonsLength, itemsPerPage, updateFilteredPokemons}) {

  let pagesArrayLength = Math.floor((filteredPokemonsLength + 2) / itemsPerPage)

  let pagesArray = new Array(pagesArrayLength)

  for (let i = 0; i < pagesArray.length; i++) {
    pagesArray[i] = i + 1
  }

  console.log(pagesArray, 'pagesArray')

  return pug`
    div.root
      div.pagination
        each item in pagesArray
          span.page(onClick=() => updateFilteredPokemons(item)) #{item}
  `
}