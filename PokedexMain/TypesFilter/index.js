import React from 'react'
import './index.styl'

export default function TypesFilter ({physical, special, toggleActive, typeFilter}) {
  function onTypeClick(array, index, item) {
    toggleActive(array, index);
    typeFilter(item)
  }
  return pug `
    div.root
      div.title
        span Physical:
      div.buttons
        each item, index in physical
          span.button(
            style={backgroundColor: item.isActive ? 'white' : item.color}
            key=index
            onClick=() => onTypeClick(physical, index, item)
            styleName=item.isActive ? 'active' : ''
          ) #{item.type}
      div.title
        span Special:
      div.buttons
        each item, index in special
          span.button(
            style={backgroundColor: item.isActive ? 'white' : item.color}
            key=index
            onClick=() => toggleActive(special, index)
            styleName=item.isActive ? 'active' : ''
          ) #{item.type}
`
}