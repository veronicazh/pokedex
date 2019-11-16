import React from 'react'
import './index.styl'
import TypesFilter from './TypesFilter'
import SearchBar from './SearchBar'

export default function PoxedexMain () {
  return pug `
    div.root
      img.mainTitle(src='https://fontmeme.com/permalink/191115/c9fa65f819a2a9326a14012c39ab3f7d.png')
      TypesFilter
      SearchBar
  `
}