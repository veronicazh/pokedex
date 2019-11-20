import React from 'react'
import './index.styl'

export default function TypesFilter ({physical, special}) {
  return pug `
    div.root
      div.title
        span Physical:
      div.buttons
        each item, idx in physical
          span.button(style={backgroundColor: item.color} key=idx) #{item.type}
      div.title
        span Special:
      div.buttons
        each item, idx in special
          span.button(style={backgroundColor: item.color} key=idx) #{item.type}
`
}