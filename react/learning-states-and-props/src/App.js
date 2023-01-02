import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent title="React" />
      </div>
    );
  }
}

export default App;
