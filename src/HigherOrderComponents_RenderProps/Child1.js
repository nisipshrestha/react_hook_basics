import React from 'react'

const Child1 = ({children, temp}) => {
  return (
    <div>Child1: {children('someData')} {temp("someData")}</div>
  )
}

export default Child1;