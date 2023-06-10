import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'ParentCompo'
      }
      this.greetparent=this.greetparent.bind(this)
    
    }
    greetparent(){
        alert(`Hello ${this.state.name}`)
    }
    
  render() {
    return (
      <div>
        <Child greet={this.greetparent}/>
      </div>
    )
  }
}

export default Parent
