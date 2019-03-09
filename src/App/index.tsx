import React, { Component } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './app.css';
// import './ts-examples/basics/type-annotations';
// import './ts-examples/basics/type-interfaces';
// import './ts-examples/basics/classes-beginner';
// import './ts-examples/basics/classes-intermediate';
// import './ts-examples/ts-3/tuples-rest';
// import './ts-examples/ts-3/tuples-spread';
// import './ts-examples/ts-3/type-unknown';
import Modal from './react-stuff/Confirm';

interface IState {
  isShowing: boolean;
  confirmOpen: boolean;
  confirmMsg: string;
}

// props is first param and state is second
// if a component requires no props, supply an empty obj
// TODO: why doesn't Confirm.tsx require this object as first param?
export default class App extends Component<{}, IState> {
  // using a constructor
  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     confirmOpen: false,
  //     isShowing: false
  //   }
  // }
  // without a constructor
  public state = {
    isShowing: true,
    confirmOpen: false,
    confirmMsg: ''
  };
  private openDialog = () => {
    this.setState({
      confirmOpen: true
    });
  }
  private launchAlert = () => {
    this.setState({
      isShowing: true
    });
  }
  private handleCancelConfirm = () => {
    this.setState({
      confirmOpen: false,
      confirmMsg: 'You canceled'
    });
  }
  private handleOkConfirm = () => {
    this.setState({
      confirmOpen: false,
      confirmMsg: 'You pressed Ok btn'
    });
  }
  public render() {
    const { isShowing, confirmOpen, confirmMsg } = this.state;
    return (
      <React.Fragment>
        <button type="button" onClick={this.openDialog}>Open Dialog</button>
        <button type="button" onClick={this.launchAlert}>Launch Alert</button>
        <p>{confirmMsg}</p>
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

          <Modal
            title="React & Typescript"
            content="Are you sure you want to learn React & TS?"
            onCancel={this.handleCancelConfirm}
            onOk={this.handleOkConfirm}
            open={confirmOpen}
            />

        </div>
      </React.Fragment>
    );
  }
  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };
}
