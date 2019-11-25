import React from 'react'
import './index.styl'

export default function SearchBar ({pokeData, setFilteredPokemons}) {
  function dataSearch (event) {
    let value = event.target.value.toLowerCase()
    console.log(value, 'VALUE')
    let newArray = pokeData.filter((elem) => elem.name.includes(value))
    console.log(newArray, 'NEWARRAY')
    setFilteredPokemons(newArray)
    if (value === '') {
      setFilteredPokemons(pokeData)
    }
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