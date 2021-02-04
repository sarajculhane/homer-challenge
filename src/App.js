import React, { Component} from "react";
import {Main} from './components'

class App extends Component{
  render(){
    return(
      <div>
        <div className='app'>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;