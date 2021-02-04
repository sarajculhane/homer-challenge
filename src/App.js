import React, { Component} from "react";
import {ImageSelector, SmallImage} from './components'

class App extends Component{
  render(){
    return(
      <div>
        <div className='app'>
          <div>HIII </div>
          {/* <SmallImage /> */}
          <ImageSelector />
        </div>
      </div>
    );
  }
}

export default App;