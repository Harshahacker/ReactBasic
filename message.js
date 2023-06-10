import React, { Component } from 'react'

class Mess extends Component {
    constructor() {
      super()
    
      this.state = {
        message:'welcome visitor' ,
      };
    }
    changeMesage()
    {
        this.setState({
            message:'Thanks for visiting',
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMesage()}>Visit</button>
        
      </div>
    )
  }
}

export default Mess
