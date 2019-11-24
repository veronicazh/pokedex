import React, {useState, useEffect} from 'react'
import './index.styl'
import TypesFilter from './TypesFilter'
import SearchBar from './SearchBar'
import List from './List'

const PHYSICAL_DATA = [
  {
    type: 'NORMAL',
    isActive: false,
    color: '#AAAA9B'
  },
  {
    type: 'FIGHTING',
    isActive: false,
    color: '#AF5B4A'
  },
  {
    type: 'FLYING',
    isActive: false,
    color: '#8A9BF8'
  },
  {
    type: 'POISON',
    isActive: false,
    color: '#9F5B96'
  },
  {
    type: 'GROUND',
    isActive: false,
    color: '#D8BB66'
  },
  {
    type: 'ROCK',
    isActive: false,
    color: '#B9AA6F'
  },
  {
    type: 'BUG',
    isActive: false,
    color: '#AEB944'
  },
  {
    type: 'GHOST',
    isActive: false,
    color: '#6568B6'
  },
  {
    type: 'STEEL',
    isActive: false,
    color: '#AAAABA'
  }
]

const SPECIAL_DATA = [
  {
    type: 'FAIRY',
    isActive: false,
    color: '#E29FE9'
  },
  {
    type: 'FIRE',
    isActive: false,
    color: '#EC5435'
  },
  {
    type: 'WATER',
    isActive: false,
    color: '#4F9AF8'
  },
  {
    type: 'GRASS',
    isActive: false,
    color: '#4F9AF8'
  },
  {
    type: 'ELECTRIC',
    isActive: false,
    color: '#F8CD55'
  },
  {
    type: 'PSYCHIC',
    isActive: false,
    color: '#ED6398'
  },
  {
    type: 'ICE',
    isActive: false,
    color: '#7FCBFA'
  },
  {
    type: 'DRAGON',
    isActive: false,
    color: '#736BE6'
  },
  {
    type: 'DARK',
    isActive: false,
    color: '#725647'
  }
]

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

  let [physical, setPhysical] = useState(PHYSICAL_DATA);
  let [special, setSpecial] = useState(SPECIAL_DATA);

  function toggleActive (array, index) {
    let newArray = [...array];
    newArray[index].isActive = !newArray[index].isActive
    if (array === physical) {
      setPhysical(newArray)
    } else if (array === special) {
      setSpecial(newArray)
    }
    // console.log(newArray, 'НОВЫЙ МАССИВ')
  }

  // let [commonArray, setCommonArray] = useState(physical.concat(special));

  return pug `
    div.root
      img.mainTitle(src='https://fontmeme.com/permalink/191115/c9fa65f819a2a9326a14012c39ab3f7d.png')
      TypesFilter(physical=physical special=special toggleActive=toggleActive)
      SearchBar
      List(pokeData=pokemons physical=PHYSICAL_DATA special=SPECIAL_DATA)
  `
}