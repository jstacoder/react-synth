import React, { Component } from 'react';

import Keyboard from './components/keyboard'
import OscTypePicker from './components/osc-type-picker'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      oscType: 'sine'
    }
  }
  setOscType = oscType =>{
    this.setState({oscType})
  }
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        <p className="App-intro">
          
        </p>
        <Keyboard oscType={this.state.oscType} />
        <OscTypePicker
          oscType={this.state.oscType}
          setOscType={this.setOscType}
        />
      </div>
    );
  }
}

export default App;
