import React from 'react';

class MyComponent extends React.Component {
  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click me!</button>
      </div>
    );
  }
}

export default MyComponent;
