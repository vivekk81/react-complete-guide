import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>hello app class</h2>
        <Person name="vivek" age={28}/>
        <Person name="rajeev" age={48}>
          <h5>I am vivek's father</h5>
        </Person>
        <Person name="manju" age={43}/>
      </div>
    );
  }
}

export default App;
