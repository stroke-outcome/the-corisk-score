import React from 'react';

const CoRiskScoreFormHint = (props) => {

  const isShownClass = props.formHint
    ? ''
    : 'hide';

  return (
    <div className={"form-group form-input-hint fade-in " + isShownClass}>
      <div className="col-12 text-right">
        {props.formHint}
      </div>
    </div>
  );

};

export default CoRiskScoreFormHint;
