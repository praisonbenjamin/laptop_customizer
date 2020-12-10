import React from 'react';
import FEATURES from '../FEATURES'
import Feature from '../Feature/Feature'
import './Form.css'

function Form(props) {

  const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      // return a feature component on each loop
      return (
       <Feature 
       FEATURES={FEATURES} 
       feature={feature} 
       selected={props.selected}
       key={featureHash}
       updateFeature={props.updateFeature}
       USCurrencyFormat={props.USCurrencyFormat}
       idx={idx}
       />
      );
    });

  return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
  )
}

export default Form