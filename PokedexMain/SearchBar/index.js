import React from 'react'
import './index.styl'

export default function SearchBar ({dataSearch, updateFilteredPokemons, search, setSearch}) {
  // function dataSearch (event) {
  //   let value = event.target.value.toLowerCase()
  //   console.log(value, 'VALUE')
  //   let newArray = pokeData.filter((elem) => elem.name.includes(value))
  //   console.log(newArray, 'NEWARRAY')
  //   setFilteredPokemons(newArray)
  //   if (value === '') {
  //     setFilteredPokemons(pokeData)
  //   }
  // }
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