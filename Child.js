import React from 'react'

function Child(props) {
  return (
    <div>
     <button onClick={props.greet}>Wish</button> 
    </div>
  )
}

export default Child
