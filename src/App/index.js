import React, { Component } from 'react';
import { Alert, Button } from '@patternfly/react-core';
import PageLayoutDefaultNav from './page/page';
import './app.css';

export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing } = this.state;
    return (
      <PageLayoutDefaultNav />
    );
  }
}
