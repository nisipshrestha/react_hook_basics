import React from 'react'

const WithButton = (Component) => {
    const text = "lorem";
  return (props) => <Component {...props} text={text} />
}

export default WithButton;