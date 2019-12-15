import React from 'react'
import './index.styl'

export default function Pagination ({itemsPerPage, updateFilteredPokemons, pagesAmount, currentPage}) {

  // let pagesArrayLength = Math.ceil((filteredPokemonsLength + 2) / itemsPerPage)

  let pagesArray = new Array(pagesAmount)

  for (let i = 0; i < pagesArray.length; i++) {
    pagesArray[i] = i
  }

  console.log(pagesArray, 'pagesArray')

  return pug`
    div.root
      div.pagination
        each item in pagesArray
          span.page(onClick=() => updateFilteredPokemons(item) style={opacity: item === currentPage ? '1' : '0.8'}) #{item + 1}
  `
}