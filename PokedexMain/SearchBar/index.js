import React from 'react'
import './index.styl'

export default function SearchBar ({ updateFilteredPokemons, search, setSearch, animated, toggleAnimated, getRandomPokemon }) {

  function onInputChange (event) {
    let newValue = event.target.value
    setSearch(newValue)
  }

  return pug `
    div.root
      form.container(onSubmit=(event) => {
        updateFilteredPokemons()
        event.preventDefault()
      })
        input.search(
          value=search
          placeholder='Name...'
          onFocus=(e) => e.target.placeholder = ''
          onBlur=(e) => e.target.placeholder = 'Name...'
          onChange=onInputChange
        )
        span.button(onClick=() => updateFilteredPokemons()) Search
      // тут попробовать заменить на вызов функции
      div.switchContainer
        span.animated Animate!
        label.switch
          input(
            type='checkbox'
            onChange=toggleAnimated
            value=animated
          )
          span.slider.round
        span.random(onClick=() => getRandomPokemon()) Get random!

  `
}