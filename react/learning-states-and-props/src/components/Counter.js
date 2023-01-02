import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Increment!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
