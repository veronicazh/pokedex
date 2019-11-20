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
  },[]);
  let physical = [
    {
      type: 'NORMAL',
      color: '#AAAA9B'
    },
    {
      type: 'FIGHTING',
      color: '#AF5B4A'
    },
    {
      type: 'FLYING',
      color: '#8A9BF8'
    },
    {
      type: 'POISON',
      color: '#9F5B96'
    },
    {
      type: 'GROUND',
      color: '#D8BB66'
    },
    {
      type: 'ROCK',
      color: '#B9AA6F'
    },
    {
      type: 'BUG',
      color: '#AEB944'
    },
    {
      type: 'GHOST',
      color: '#6568B6'
    },
    {
      type: 'STEEL',
      color: '#AAAABA'
    }
];
  let special = [
    {
      type: 'FAIRY',
      color: '#E29FE9'
    },
    {
      type: 'FIRE',
      color: '#EC5435'
    },
    {
      type: 'WATER',
      color: '#4F9AF8'
    },
    {
      type: 'GRASS',
      color: '#4F9AF8'
    },
    {
      type: 'ELECTRIC',
      color: '#F8CD55'
    },
    {
      type: 'PSYCHIC',
      color: '#ED6398'
    },
    {
      type: 'ICE',
      color: '#7FCBFA'
    },
    {
      type: 'DRAGON',
      color: '#736BE6'
    },
    {
      type: 'DARK',
      color: '#725647'
    }
  ]

  return pug `
    div.root
      img.mainTitle(src='https://fontmeme.com/permalink/191115/c9fa65f819a2a9326a14012c39ab3f7d.png')
      TypesFilter(physical=physical special=special)
      SearchBar
      List(pokeData=pokemons physical=physical special=special)
  `
}