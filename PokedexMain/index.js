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
  let [itemsPerPage, setItemsPerPage] = useState(40)
  let [currentPage, setCurrentPage] = useState(0)
  let [pagesAmount, setPagesAmount] = useState(0)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
    .then(response => response.json())
    .then(async apiAnswer => {
      let pokeResults = apiAnswer.results
      let promiseArray = pokeResults.map(async elem => (await fetch(elem.url)).json())
      let pokemonArray = await Promise.all(promiseArray)
      setPokemons(pokemonArray)
      updateFilteredPokemons(undefined, pokemonArray)
    })
  },[]);

  let [types, setTypes] = useState(TYPES_DATA)
  let [search, setSearch] = useState('')

  function toggleActive (index) {
    let newArray = [...types];
    newArray[index].isActive = !newArray[index].isActive
    setTypes(newArray)
  }

  function toggleAnimated () {
    setAnimated(!animated)
  }

  function handleNext (currentPage) {
    let newCurrentPage = currentPage + 1
    setCurrentPage(newCurrentPage)
    updateFilteredPokemons(newCurrentPage, undefined)
  }

  function handlePrev (currentPage) {
    let newCurrentPage = currentPage - 1
    setCurrentPage(newCurrentPage)
    updateFilteredPokemons(newCurrentPage, undefined)
  }

  function getRandomPokemon () {
    let randomIndex = Math.round(Math.random() * (806 - (0)) + (0))
    // let randomPokemon = pokemons[randomIndex]
    console.log(randomIndex, 'randomIndex')
    let newArray = pokemons.filter((item) => {
      if (item.id === (randomIndex + 1)) {
        return true
      }
    })
    updateFilteredPokemons(undefined, newArray, undefined)
    console.log(newArray, 'newArray')
    // updateFilteredPokemons(undefined, randomPokemon, undefined)
  }

  function findStart (page, itemsPerPage) {
    return page * itemsPerPage
  }

  function findEnd (page, itemsPerPage) {
    return (page * itemsPerPage) + (itemsPerPage - 1)
  }

  function handleItemsPerPage (event, pokemonsData = pokemons) {
    let newItemsPerPage = event.target.value
    setItemsPerPage(newItemsPerPage)
    updateFilteredPokemons(currentPage, undefined, newItemsPerPage)
    console.log(itemsPerPage, 'itemsPerPage')
  }

  function updateFilteredPokemons (pageClicked = 0, newPokemons = pokemons, newItemsPerPage = itemsPerPage) {

    console.log(newPokemons)

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
      for (let pokemonType of elem.types) {
        for (let selectedType of isActiveTrueArray) {
          if (pokemonType.type.name === selectedType.type.toLowerCase()) {
            typeMatches = true
          }
        }
      }

      let hasSelectedType = false
      for (let type of types) {
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

    let pages = Math.round((newArray.length + 2) / newItemsPerPage)

    setPagesAmount(pages)

    let slicedArray = newArray.slice(findStart(pageClicked, newItemsPerPage), (findEnd(pageClicked, newItemsPerPage)) + 1)

    setFilteredPokemons(slicedArray)

    setCurrentPage(pageClicked)
  }

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
        getRandomPokemon=getRandomPokemon
      )
      Pagination(
        itemsPerPage=itemsPerPage
        updateFilteredPokemons=updateFilteredPokemons
        pagesAmount=pagesAmount
        currentPage=currentPage
        handleNext=handleNext
        handlePrev=handlePrev
        handleItemsPerPage=handleItemsPerPage
        pokeData=filteredPokemons
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
        handleNext=handleNext
        handlePrev=handlePrev
        handleItemsPerPage=handleItemsPerPage
        pokeData=filteredPokemons
      )
  `
}