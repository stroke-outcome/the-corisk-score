import React, {Component} from 'react';

import './App.css';

import parseUrlQueryKeyValue from './core/parseUrlQueryKeyValue';
import CoScoreResult from './components/CoScoreResult';
import CoScoreForm from './components/CoScoreForm';

class App extends Component {

  constructor(props) {
    super(props);

    const queryParams = parseUrlQueryKeyValue(window.location.search);
    const {age, nihss, copeptin} = queryParams;

    const state = {
      age: age,
      nihss: nihss,
      copeptin: copeptin,
      percentage: null
    };

    // TODO: calculate the formula and if valid, show it!
    if (age && nihss && copeptin) {
      state.percentage = 99;
    }

    this.state = state;
  }

  render() {
    if (this.state.percentage) {
      return (<CoScoreResult percentage={this.state.percentage}/>);
    }

    return (
      <CoScoreForm age={this.state.age} nihss={this.state.nihss} copeptin={this.state.copeptin} />
    );
  }
}

export default App;
