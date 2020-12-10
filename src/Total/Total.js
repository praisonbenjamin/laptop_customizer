import React from "react";
import './Total.css'

function Total(props) {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">{props.cost}</div>
    </div>
  );
}

export default Total;