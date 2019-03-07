import React, { Component } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './app.css';
// import './ts-examples/basics/type-annotations';
// import './ts-examples/basics/type-interfaces';
// import './ts-examples/basics/classes-beginner';
// import './ts-examples/basics/classes-intermediate';
// import './ts-examples/ts-3/tuples-rest';
// import './ts-examples/ts-3/tuples-spread';
import './ts-examples/ts-3/type-unknown';

export default class App extends Component {
  public state = {
    isShowing: true
  };
  public render() {
    const { isShowing } = this.state;
    return (
      <div className="app-container">
        {isShowing && (
          <div className="notification-container">
            <Alert
              variant="success"
              title="Setup Complete"
              action={<AlertActionCloseButton onClose={this.dismissNotification} />}
            >
              You have successfully launched your patternfly starter project.
            </Alert>
          </div>
        )}
      </div>
    );
  }
  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };
}
