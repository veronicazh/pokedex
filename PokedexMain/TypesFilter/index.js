import React from 'react'
import './index.styl'

export default function TypesFilter ({types, toggleActive, typeFilter}) {
  // function onTypeClick(array, index, item) {
  //   toggleActive(array, index);
  //   typeFilter(item, array)
  // }
  return pug `
    div.root
      div.title
        span Choose your type:
      div.buttons
        each item, index in types
          span.button(
            style={backgroundColor: item.isActive ? 'white' : item.color}
            key=index
            onClick=() => toggleActive(types, index)
            styleName=item.isActive ? 'active' : ''
          ) #{item.type}
      // div.title
      //   span Special:
      // div.buttons
      //   each item, index in special
      //     span.button(
      //       style={backgroundColor: item.isActive ? 'white' : item.color}
      //       key=index
      //       onClick=() => toggleActive(special, index)
      //       styleName=item.isActive ? 'active' : ''
      //     ) #{item.type}
`
}