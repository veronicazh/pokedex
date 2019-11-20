import React, {useState, useEffect} from 'react'
import './index.styl'
import TypesFilter from './TypesFilter'
import SearchBar from './SearchBar'
import List from './List'

export default function PoxedexMain () {
  let [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
    .then(response => response.json() )
    .then(apiAnswer => {
      console.log(apiAnswer, 'apiAnswer')
      setPokemons(apiAnswer.results)
  })
  },[])
  return pug `
    div.root
      img.mainTitle(src='https://fontmeme.com/permalink/191115/c9fa65f819a2a9326a14012c39ab3f7d.png')
      TypesFilter
      SearchBar
      List(pokeData=pokemons)
  `
}