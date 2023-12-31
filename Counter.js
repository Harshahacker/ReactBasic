import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.increment=this.increment.bind(this);
    }
    increment()
    {
        this.setState(
            {
                count:this.state.count+1
            }
       
        )
    }
    
  render() {
    return (
      <div>
        <h1>Counter using states</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
      </div>
    )
  }
}

export default Counter
