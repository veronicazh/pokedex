import React from 'react'
import './index.styl'

export default function SearchBar ({pokeData}) {
  function dataSearch (array) {

  }
  return pug `
    div.root
      input.search(
        placeholder='Search...'
        onFocus=(e) => e.target.placeholder = ''
        onBlur=(e) => e.target.placeholder = 'Search...'
        onChange=dataSearch
      )
  `
}