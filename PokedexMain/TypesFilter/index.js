import React from 'react'
import './index.styl'

export default function TypesFilter ({physical, special, handleIsActive}) {
  return pug `
    div.root
      div.title
        span Physical:
      div.buttons
        each item, index in physical
          span.button(style={backgroundColor: item.color} key=index onClick=handleIsActive) #{item.type}
      div.title
        span Special:
      div.buttons
        each item, index in special
          span.button(style={backgroundColor: item.color} key=index) #{item.type}
`
}