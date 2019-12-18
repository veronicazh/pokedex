import React from 'react'
import './index.styl'

export default function TypesFilter ({types, toggleActive, typeFilter}) {
  return pug `
    div.root
      div.title
        span Choose your type:
      div.buttons
        each item, index in types
          span.button(
            style={backgroundColor: item.isActive ? 'white' : item.color}
            key=index
            onClick=() => toggleActive(index)
            styleName=item.isActive ? 'active' : ''
          ) #{item.type}
`
}