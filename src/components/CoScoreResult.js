import React from 'react';

import './co-score-result.css';

const CoScoreResult = (props) => {

  return (
    <div className="container grid-480">
      <div className="text-center">
        <h1 className="app-title">Your CoRisk Score</h1>
        <div className="centered" id="score">
          <div id="score-content">
            <div id="score-content-value">{props.percentage}</div>
            <div id="score-content-percentage">%</div>
          </div>
        </div>

        {/*
        <div className="circle">
          <div className="circle__inner">
            <div className="circle__wrapper">
              <div className="circle__content">
                <div id="score-content-value">{props.percentage}</div>
                <div id="score-content-percentage">%</div>
              </div>
            </div>
          </div>
        </div>
        */}
        
        <a href="/" className="btn btn-lg">Re-calculate</a>
      </div>
    </div>
  );

};

export default CoScoreResult;
