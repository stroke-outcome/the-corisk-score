import React, {Component} from 'react';

import {validateAge, validateNihssPoints, validateCopeptinLevel} from '../core/coRiskScore';

const INITIAL = Number.MAX_SAFE_INTEGER;

const checkSubmittable = (state) => {
  if (state.ageFormHint || state.nihssFormHint || state.copeptinFormHint || state.age === INITIAL || state.nihss === INITIAL || state.copeptin === INITIAL) {
    return false;
  }
  return true;
}

const getFormHint = (value, validator) => {
  const validationResult = validator(value);
  if (!validationResult.isValid) {
    return validationResult.reason;
  }
  return '';
};

const updateState = (newState) => {
  if (newState.age !== INITIAL) {
    newState.ageFormHint = getFormHint(newState.age, validateAge);
  }

  if (newState.nihss !== INITIAL) {
    newState.nihssFormHint = getFormHint(newState.nihss, validateNihssPoints);
  }

  if (newState.copeptin !== INITIAL) {
    newState.copeptinFormHint = getFormHint(newState.copeptin, validateCopeptinLevel);
  }

  newState.isSubmittable = checkSubmittable(newState);
  return newState;
}

/**
 * Note that the default values are undefined
 */
class CoRiskScoreForm extends Component {

  constructor(props) {
    super(props);

    const {
      age = INITIAL,
      nihss = INITIAL,
      copeptin = INITIAL
    } = props;

    const state = {
      age: age,
      ageFormHint: '',
      nihss: nihss,
      nihssFormHint: '',
      copeptin: copeptin,
      copeptinFormHint: '',
      isSubmittable: false
    };

    const newState = updateState(state);
    this.state = newState;
  }

  setLocalState(newState) {
    newState = updateState(newState);
    this.setState(newState);
  }

  handleAgeChange(event) {
    const newState = {
      ...this.state,
      age: event.target.value
    };

    this.setLocalState(newState);
  }

  handleNihssChange(event) {
    const newState = {
      ...this.state,
      nihss: event.target.value
    };

    this.setLocalState(newState);
  }

  handleCopeptinChange(event) {
    const newState = {
      ...this.state,
      copeptin: event.target.value
    }

    this.setLocalState(newState);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const state = this.state;

    this
      .props
      .onCalculate({age: state.age, nihss: state.nihss, copeptin: state.copeptin});
  }

  render() {
    return (
      <div className="container grid-480">
        <div className="">
          <h1 className="app-title text-center">The CoRisk Score</h1>
          <p className="info ">
            The CoRisk score is the probability of an unfavorable 3-month outcome for
            patients using Copeptin.
          </p>

          <p className="info">
            Use the form below to calculate your patient's score. All fields are required.
          </p>

          <form
            className="form-horizontal"
            action=""
            type="GET"
            onSubmit={this.handleSubmit}>

            <div className="form-group">
              <div className="col-6">
                <label className="form-label">Age</label>
              </div>
              <div className="col-6">
                <input
                  className="form-input"
                  name="age"
                  type="number"
                  min="0"
                  max="200"
                  value={this.state.age === INITIAL
                  ? ''
                  : this.state.age}
                  onChange={this
                  .handleAgeChange
                  .bind(this)}/>
              </div>
            </div>
            <div
              className={"form-group form-input-hint fade-in " + (this.state.ageFormHint
              ? ''
              : 'hide')}>
              <div className="col-12 text-right">
                {this.state.ageFormHint}
              </div>
            </div>

            <div className="form-group">
              <div className="col-6">
                <label className="form-label">NIHSS points</label>
              </div>
              <div className="col-6">
                <input
                  className="form-input"
                  name="nihss"
                  type="number"
                  min="0"
                  max="42"
                  value={this.state.nihss === INITIAL
                  ? ''
                  : this.state.nihss}
                  onChange={this
                  .handleNihssChange
                  .bind(this)}/>
              </div>
            </div>
            <div
              className={"form-group form-input-hint fade-in " + (this.state.nihssFormHint
              ? ''
              : 'hide')}>
              <div className="col-12 text-right">
                {this.state.nihssFormHint}
              </div>
            </div>

            <div className="form-group">
              <div className="col-6">
                <label className="form-label">Copeptin blood level (pmol/L)</label>
              </div>
              <div className="col-6">
                <input
                  className="form-input"
                  name="copeptin"
                  value={this.state.copeptin === INITIAL
                  ? ''
                  : this.state.copeptin}
                  onChange={this
                  .handleCopeptinChange
                  .bind(this)}/>
              </div>
            </div>
            <div
              className={"form-group form-input-hint fade-in " + (this.state.copeptinFormHint
              ? ''
              : 'hide')}>
              <div className="col-12 text-right">
                {this.state.copeptinFormHint}
              </div>
            </div>

            <div className="form-group mt-30">
              <div className="col-12 text-center">
                <button
                  className="btn btn-primary btn-lg"
                  disabled={this.state.isSubmittable
                  ? ''
                  : 'disabled'}>
                  Calculate
                </button>
              </div>
            </div>

          </form>

        </div>
      </div>
    );
  }
}

export default CoRiskScoreForm;
