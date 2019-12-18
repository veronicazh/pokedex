import React from 'react'
import './index.styl'

export default function Pagination ({itemsPerPage, updateFilteredPokemons, pagesAmount, currentPage, handleNext, handleItemsPerPage}) {

  // let pagesArrayLength = Math.ceil((filteredPokemonsLength + 2) / itemsPerPage)

  let pagesArray = new Array(pagesAmount)

  for (let i = 0; i < pagesArray.length; i++) {
    pagesArray[i] = i
  }

  // console.log(pagesArray, 'pagesArray')

  return pug`
    div.root
      div.pagination
        each item in pagesArray
          span.page(
            onClick=() => updateFilteredPokemons(item)
            style={opacity: item === currentPage ? '1' : '0.8', backgroundColor: item === currentPage ? '#F8CE46' : 'white'}
            key=item
          ) #{item + 1}
      div.navigation
        span.button PREV
        span.button(onClick=() => handleNext(currentPage)) NEXT
        span items per page
        select.selectBox(onChange=() => handleItemsPerPage(event) defaultValue='20')
          option 20
          option 30
          option 40
  `
}