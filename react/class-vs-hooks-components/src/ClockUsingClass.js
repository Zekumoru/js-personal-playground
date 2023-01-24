import React from 'react';
import './ClockUsingClass.css';

class ClockUsingClass extends React.Component {
  interval = null;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  changeTime = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.changeTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ClockUsingClass">
        <h1>Clock Using Class</h1>
        <h2>It is currently {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default ClockUsingClass;
