import React from 'react';
import { CounterThumb } from './Counter.styled';

class Counter extends React.Component {
  render() {
    return (
      <CounterThumb>
        <span className="Counter__value">0</span>

        <div className="Counter__controls">
          <button type="button">Up to 1</button>
          <button type="button">Down to 1</button>
        </div>
      </CounterThumb>
    );
  }
}

export default Counter;
