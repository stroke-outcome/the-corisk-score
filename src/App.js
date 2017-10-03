import React, {Component} from 'react';

import packageJson from './package.json.lnk';

import Footer from './components/Footer';
import CoRiskScoreResult from './components/CoRiskScoreResult';
import CoRiskScoreForm from './components/CoRiskScoreForm';

import calculateCoRiskScore from './core/coRiskScore';

import ReactGA from 'react-ga';

class App extends Component {

  constructor(props) {
    super(props);

    const state = {
      age: undefined,
      nihss: undefined,
      copeptin: undefined,
      thrombolysis: false,
      percentage: null
    };

    this.state = state;
  }

  onCalculate = ({age, nihss, copeptin, thrombolysis}) => {
    const state = this.state;
    const percentage = calculateCoRiskScore({age, nihss, copeptin, thrombolysis});
    console.log(percentage);

    this.setState({
      ...state,
      age,
      nihss,
      copeptin,
      thrombolysis,
      percentage
    });
  }

  onRecalculate = () => {
    const state = this.state;

    this.setState({
      ...state,
      percentage: null
    });
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <Footer version={packageJson.version}/>
      </div>
    );
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
      thrombolysis={this.state.thrombolysis}
      onCalculate={this.onCalculate}/>);
  }
}

export default App;
