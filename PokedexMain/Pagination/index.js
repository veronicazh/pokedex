import React from 'react'
import './index.styl'

export default function Pagination ({ itemsPerPage, updateFilteredPokemons, pagesAmount, currentPage, handleNext, handlePrev, handleItemsPerPage, pokeData }) {

  let pagesArray = new Array(pagesAmount)

  for (let i = 0; i < pagesArray.length; i++) {
    pagesArray[i] = i
  }

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
        if (currentPage === 0)
          span.button(onClick=() => handleNext(currentPage)) NEXT
        else if (currentPage === pagesAmount - 1)
          span.button(onClick=() => handlePrev(currentPage)) PREV
        else
          span.button(onClick=() => handlePrev(currentPage)) PREV
          span.button(onClick=() => handleNext(currentPage)) NEXT
        span.text Per page
        select.selectBox(
          onChange=() => handleItemsPerPage(event, pokeData)
          defaultValue='40'
        )
          option 20
          option 40
  `
}