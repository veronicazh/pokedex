import React, {useState, useEffect} from 'react'
import './index.styl'
import TypesFilter from './TypesFilter'
import SearchBar from './SearchBar'
import List from './List'
import Pagination from './Pagination'


const TYPES_DATA = [
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
  },
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
  let [animated, setAnimated] = useState(false)
  let [itemsPerPage, setItemsPerPage] = useState(20)
  let [currentPage, setCurrentPage] = useState(0)
  let [pagesAmount, setPagesAmount] = useState(0)

  console.log(pagesAmount, 'pagesAmount DEFAULT')

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
      updateFilteredPokemons(undefined, pokemonArray)
      // setFilteredPokemons(pokemonArray)
      // setPokemons(apiAnswer.results)
  })
  },[]);

  // let [physical, setPhysical] = useState(PHYSICAL_DATA);
  // let [special, setSpecial] = useState(SPECIAL_DATA);
  let [types, setTypes] = useState(TYPES_DATA)
  let [search, setSearch] = useState('')

  function toggleActive (index) {
    let newArray = [...types];
    newArray[index].isActive = !newArray[index].isActive
    setTypes(newArray)

    console.log(newArray, 'НОВЫЙ МАССИВ')
  }

  function toggleActivePage () {
    console.log('toggle active page')
  }

  function toggleAnimated () {
    setAnimated(!animated)
  }

  // function dataSearch (event) {
  //   let value = event.target.value.toLowerCase()
  //   console.log(value, 'VALUE')
  //   let newArray = filteredPokemons.filter((elem) => elem.name.includes(value))
  //   console.log(newArray, 'NEWARRAY')
  //   setFilteredPokemons(newArray)
  //   if (value === '') {
  //     setFilteredPokemons(pokemons)
  //   }
  // }

  // function typeFilter (currentItem, array) {
  //   let isActiveTrueArray = array.filter((elem) => {
  //     if (elem.isActive) {
  //       return true
  //     }
  //   })
  //   console.log(isActiveTrueArray, 'arrayACTIVE')
  //   // if (currentItem.isActive) {
  //     console.log('FUNCTION WORKS')
  //     console.log(pokemons, 'POKEMONCHIKI')
  //     console.log(currentItem.type, 'TYPE')
  //     // let commonArray = []
  //     let filteredByTypePokemons = pokemons.filter((elem) => {
  //       // console.log('ELEM')
  //       for(let i = 0; i < elem.types.length; i++) {
  //         console.log('FOR WORKS')
  //         for(let j = 0; j < isActiveTrueArray.length; j++) {
  //           console.log(isActiveTrueArray[j].type.toLowerCase(), 'TYPE')
  //           if (elem.types[i].type.name === isActiveTrueArray[j].type.toLowerCase()) {
  //             return true
  //           }
  //         }
  //       }
  //     })
  //     console.log(filteredByTypePokemons, 'FILTERED')
  //     setFilteredPokemons(filteredByTypePokemons)
  //   // }
  // }

  function findStart (page) {
    console.log('page from start', page)
    return page * itemsPerPage
  }

  function findEnd (page) {
    console.log('page from end', page)
    return (page * itemsPerPage) + (itemsPerPage - 1)
  }

  // useEffect(updateFilteredPokemons,[]);

  function updateFilteredPokemons (pageClicked = 0, newPokemons = pokemons) {

    let newArray = newPokemons.filter((elem) => {

      let nameMatches = false
      if (elem.name.toLowerCase().includes(search.toLowerCase())) {
        nameMatches = true
      }

      let typeMatches = false
      let isActiveTrueArray = types.filter((elem) => {
        if (elem.isActive) {
          return true
        }
      })
      console.log(isActiveTrueArray, 'activeArray')
      for (let pokemonType of elem.types) {
        console.log(pokemonType, 'PokemonType')
        for (let selectedType of isActiveTrueArray) {
          console.log(selectedType, 'selectedType')
          if (pokemonType.type.name === selectedType.type.toLowerCase()) {
            typeMatches = true
          }
        }
      }

      console.log(nameMatches, 'NAME_MATCHES')
      console.log(typeMatches, 'TYPE_MATCHES')

      console.log(types, 'types')

      let hasSelectedType = false
      for (let type of types) {
        console.log(type, 'type')
        if (type.isActive) {
          hasSelectedType = true
        }
      }

      if (( !hasSelectedType || typeMatches ) && nameMatches) {
        return true
      } else {
        return false
      }

    })
    console.log(pageClicked, 'pageClicked')

    let pages = Math.round((newArray.length + 2) / itemsPerPage)

    console.log('PAGES!', pages)

    setPagesAmount(pages)

    let slicedArray = newArray.slice(findStart(pageClicked), (findEnd(pageClicked)) + 1)

    console.log('START', findStart(pageClicked))

    console.log('END', findEnd(pageClicked))

    setFilteredPokemons(slicedArray)

    setCurrentPage(pageClicked)


  }
  console.log(filteredPokemons, 'FILTEREDFUCKINGPOKEMONS')

  // let filteredPokemonsLength = filteredPokemons.length //длина массива фильтред покемонс

  return pug `
    div.root
      img.mainTitle(src='https://fontmeme.com/permalink/191115/c9fa65f819a2a9326a14012c39ab3f7d.png')
      TypesFilter(
        types=types
        toggleActive=toggleActive
      )
      SearchBar(
        updateFilteredPokemons=updateFilteredPokemons
        search=search
        setSearch=setSearch
        animated=animated
        toggleAnimated=toggleAnimated
      )
      Pagination(
        itemsPerPage=itemsPerPage
        updateFilteredPokemons=updateFilteredPokemons
        pagesAmount=pagesAmount
        currentPage=currentPage
      )
      List(
        pokeData=filteredPokemons
        types=types
        animated=animated
      )
      Pagination(
        itemsPerPage=itemsPerPage
        updateFilteredPokemons=updateFilteredPokemons
        pagesAmount=pagesAmount
        currentPage=currentPage
      )
  `
}