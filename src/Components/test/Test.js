import React, { Component } from 'react';

export class Test extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return <div>Test Page</div>;
  }
}

export default Test;
