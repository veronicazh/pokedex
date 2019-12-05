import React from 'react'
import './index.styl'

export default function SearchBar ({dataSearch, updateFilteredPokemons, search, setSearch}) {

  function onInputChange (event) {
    let newValue = event.target.value
    setSearch(newValue)
  }
  return pug `
    div.root
      input.search(
        value=search
        placeholder='Name...'
        onFocus=(e) => e.target.placeholder = ''
        onBlur=(e) => e.target.placeholder = 'Name...'
        onChange=onInputChange
      )
      span.button(onClick=updateFilteredPokemons) Search
  `
}