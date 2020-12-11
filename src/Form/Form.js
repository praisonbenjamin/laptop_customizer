import React from 'react';
import FEATURES from '../FEATURES'
import Feature from '../Feature/Feature'
import './Form.css'

function Form(props) {

  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    // feature
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Feature
          feature={feature}
          selected={props.selected}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature}
          FEATURES={FEATURES}
          key={featureHash}
          idx={idx}
        />
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
export default Form