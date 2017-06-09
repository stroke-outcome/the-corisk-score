import React, {Component} from 'react';

// import './App.css';

import parseUrlQueryKeyValue from './core/parseUrlQueryKeyValue';

import Footer from './components/Footer';
import CoRiskScoreResult from './components/CoRiskScoreResult';
import CoRiskScoreForm from './components/CoRiskScoreForm';

import calculateCoRiskScore, {validateAge, validateNihssPoints, validateCopeptinLevel} from './core/coRiskScore';

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

    const percentage = calculateCoRiskScore(age, nihss, copeptin);
    if (percentage !== -1) {
      state.percentage = percentage;
    }

    this.state = state;
  }

  renderContent() {
    if (this.state.percentage) {
      return (<CoRiskScoreResult percentage={this.state.percentage}/>);
    }

    return (<CoRiskScoreForm
      age={this.state.age}
      nihss={this.state.nihss}
      copeptin={this.state.copeptin}/>);
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <Footer />
      </div>
    );
  }
}

export default App;
