import React from 'react';
import './App.css';
import Counter from './components/Counter';
import MyComponent from './components/MyComponent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
        <h2>Counter</h2>
        <Counter />
      </div>
    );
  }
}

export default App;
