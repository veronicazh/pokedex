import React from 'react'
import './index.styl'

export default function TypesFilter () {
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
      div.title
        span Physical:
      div.buttons
        each Item, idx in physical
          span.button(style={backgroundColor: Item.color} key=idx) #{Item.type}
      div.title
        span Special:
      div.buttons
        each Item, idx in special
          span.button(style={backgroundColor: Item.color} key=idx) #{Item.type}
`
}