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
  let [filteredPokemons, setFilteredPokemons] = useState(pokemons)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
    .then(response => response.json())
    .then(async apiAnswer => {
      console.log(apiAnswer, 'apiAnswer')
      let pokeResults = apiAnswer.results
      console.log(pokeResults, 'pokeResults')
      let promiseArray = pokeResults.map(async elem => (await fetch(elem.url)).json())
      console.log(promiseArray, 'promiseArray!')
      let pokemonArray = await Promise.all(promiseArray)
      console.log(pokemonArray, 'массив покемонов')
      setPokemons(pokemonArray)
      setFilteredPokemons(pokemonArray)
      // setPokemons(apiAnswer.results)
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

  function dataSearch (event) {
    let value = event.target.value.toLowerCase()
    console.log(value, 'VALUE')
    let newArray = filteredPokemons.filter((elem) => elem.name.includes(value))
    console.log(newArray, 'NEWARRAY')
    setFilteredPokemons(newArray)
    if (value === '') {
      setFilteredPokemons(pokemons)
    }
  }

  function typeFilter (currentItem, array) {
    let isActiveTrueArray = array.filter((elem) => {
      if (elem.isActive) {
        return true
      }
    })
    console.log(isActiveTrueArray, 'arrayACTIVE')
    // if (currentItem.isActive) {
      console.log('FUNCTION WORKS')
      console.log(pokemons, 'POKEMONCHIKI')
      console.log(currentItem.type, 'TYPE')
      // let commonArray = []
      let filteredByTypePokemons = pokemons.filter((elem) => {
        // console.log('ELEM')
        for(let i = 0; i < elem.types.length; i++) {
          console.log('FOR WORKS')
          for(let j = 0; j < isActiveTrueArray.length; j++) {
            console.log(isActiveTrueArray[j].type.toLowerCase(), 'TYPE')
            if (elem.types[i].type.name === isActiveTrueArray[j].type.toLowerCase()) {
              return true
            }
          }
        }
      })
      console.log(filteredByTypePokemons, 'FILTERED')
      setFilteredPokemons(filteredByTypePokemons)
    // }
  }

  function updateFilteredPokemons (array, inputValue) {
    let isActiveTrueArray = array.filter((elem) => {
      if (elem.isActive) {
        return true
      }
    })
    setFilteredPokemons(pokemons.filter((elem) => {

      let nameMatches = false

    }))
  }

  // let [commonArray, setCommonArray] = useState(physical.concat(special));

  return pug `
    div.root
      img.mainTitle(src='https://fontmeme.com/permalink/191115/c9fa65f819a2a9326a14012c39ab3f7d.png')
      TypesFilter(physical=physical special=special toggleActive=toggleActive typeFilter=typeFilter)
      SearchBar(dataSearch=dataSearch updateFilteredPokemons=updateFilteredPokemons)
      List(pokeData=filteredPokemons physical=PHYSICAL_DATA special=SPECIAL_DATA)
  `
}