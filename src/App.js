import React, { Component } from 'react';
import trumpbackground from './trump-01.jpeg';
import facts from './facts.json';
import './App.css';

class App extends Component {
  render() {
    var factArr = facts.facts;
    var factList = factArr.map(function(fact) {
      return <li>{fact.fact}</li>
    });

    return (
      <div className="App">
        <h1>Factual Trump</h1>
        <p>Submit your own Factual Trump facts and they will be displayed here for all to see!</p>
        <div>
          <input type="text" id="fact-field" />&nbsp;
          <button id="submit">Submit</button>
        </div>
        <br />
        <img src={trumpbackground} role="presentation" />
        <ul>{ factList }</ul>
      </div>
    );
  }
}

export default App;
