import React, {Component} from 'react';

// import './App.css'; import parseUrlQueryKeyValue from
// './core/parseUrlQueryKeyValue';

import Footer from './components/Footer';
import CoRiskScoreResult from './components/CoRiskScoreResult';
import CoRiskScoreForm from './components/CoRiskScoreForm';

import calculateCoRiskScore from './core/coRiskScore';

import ReactGA from 'react-ga';

class App extends Component {

  constructor(props) {
    super(props);

    /*
    const queryParams = parseUrlQueryKeyValue(window.location.search);
    const {age, nihss, copeptin} = queryParams;
    */

    const state = {
      age: undefined,
      nihss: undefined,
      copeptin: undefined,
      percentage: null
    };

    /*
    const percentage = calculateCoRiskScore(age, nihss, copeptin);
    if (percentage !== -1) {
      state.percentage = percentage;
    }
    */

    this.state = state;
  }

  onCalculate = ({age, nihss, copeptin}) => {
    const state = this.state;

    this.setState({
      ...state,
      age: age,
      nihss: nihss,
      copeptin: copeptin,
      percentage: calculateCoRiskScore(age, nihss, copeptin)
    });
  }

  onRecalculate = () => {
    const state = this.state;

    this.setState({
      ...state,
      percentage: null
    });
  }

  renderContent() {
    if (this.state.percentage !== null) {
      ReactGA.pageview('/form');
      return (<CoRiskScoreResult
        percentage={this.state.percentage}
        onRecalculate={this.onRecalculate}/>);
    }

    ReactGA.pageview('/result');
    return (<CoRiskScoreForm
      age={this.state.age}
      nihss={this.state.nihss}
      copeptin={this.state.copeptin}
      onCalculate={this.onCalculate}/>);
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <Footer/>
      </div>
    );
  }
}

export default App;
