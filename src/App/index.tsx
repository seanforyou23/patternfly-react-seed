import React, { Component } from 'react';
import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import './app.css';
import { Title } from '@patternfly/react-core';
// import './ts-examples/basics/type-annotations';
// import './ts-examples/basics/type-interfaces';
// import './ts-examples/basics/classes-beginner';
// import './ts-examples/basics/classes-intermediate';
// import './ts-examples/ts-3/tuples-rest';
// import './ts-examples/ts-3/tuples-spread';
// import './ts-examples/ts-3/type-unknown';
// import Modal from './react-stuff/Confirm';
// import { FSConfirm } from './react-stuff/function-components'; // functional stateless
// import AudioList from './react-stuff/AudioList';
import { SFConfirm } from './react-stuff/stateful-functional-component'; // stateful function components

interface IState {
  isShowing: boolean;
  confirmOpen: boolean;
  confirmBtnVisible: boolean;
  feedbackMsg: string;
  countDown: number;
}

// props is first param and state is second
// if a component requires no props, supply an empty obj
// TODO: why doesn't Confirm.tsx require this object as first param?
export default class App extends Component<{}, IState> {

  private handleConfirm = () => {
    window.clearInterval(this.timer);
  }

  private timer: number = 0;

  private renderCount: number = 0;

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
      feedbackMsg: 'You canceled'
    });
    window.clearInterval(this.timer);
  }

  private handleOkConfirm = () => {
    this.setState({
      confirmOpen: false,
      feedbackMsg: 'You pressed Ok btn'
    });
    window.clearInterval(this.timer);
  }

  private handleTimer = () => {
    // console.log(this.state);
    this.setState({
      countDown: this.state.countDown - 1,
      feedbackMsg: `${this.state.countDown - 1} seconds to go`
    },
    () => {
      if (this.state.countDown <= 0) {
        window.clearInterval(this.timer);
        this.setState({
          confirmOpen: false,
          confirmBtnVisible: false,
          feedbackMsg: 'Too late to confirm!'
        });
      }
    });

    // wrong - setState is async, move this code to the setState callback
    // if (this.state.countDown <= 0) {
    //   window.clearInterval(this.timer);
    //   this.setState({
    //     confirmOpen: false
    //   });
    // }
  }

  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };

  private countDownStartingVal = 10;

  // using a constructor
  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     confirmOpen: false,
  //     isShowing: false
  //   }
  // }
  // without a constructor
  public state: IState = {
    isShowing: true,
    confirmOpen: false,
    confirmBtnVisible: true,
    feedbackMsg: `${this.countDownStartingVal} seconds to go`,
    countDown: this.countDownStartingVal
  };

  public startTimer = () => {
    this.timer = window.setInterval(() => {
      this.handleTimer();
    }, 1000);
  }

  public componentDidMount() {
    this.startTimer();
  }

  // invoked just before the component is removed from the DOM
  public componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  // getDerivedStateFromProps is invoked every time a component is rendered
  // Can be used to change state when certain props change
  // Returns the changed state or null if there are no changes to the state
  public static getDerivedStateFromProps(props: {}, state: IState) {
    // console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  // invoked just before rendering happens
  // returns a boolean that determines whether rendering updates to the DOM should happen
  public shouldComponentUpdate(nextProps: {}, nextState: IState) {
    // console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  // getSnapshotBeforeUpdate is called just before the DOM is updated
  // value that is returned here is passed on to componentDidUpdate
  public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
    this.renderCount += 1;
    // console.log('getSnapshotBeforeUpdate', prevProps, prevState, {renderCount: this.renderCount});
    return this.renderCount;
    // return 'foo';
  }

  // componentDidUpdate is called as soon as the DOM is updated
  public componentDidUpdate(prevProps: {}, prevState: IState, snapshot: number) {
    // console.log('componentDidUpdate', prevProps, prevState, snapshot, {
    //   renderCount: this.renderCount
    // });
    // console.log('componentDidUpdate prevProps: ', prevProps);
    // console.log('componentDidUpdate prevState: ', prevState);
    // console.log('componentDidUpdate snapshot: ', snapshot);
    // console.log('componentDidUpdate renderCount: ', {
    //   renderCount: this.renderCount
    // });
  }

  public render() {
    const { isShowing, confirmOpen, feedbackMsg, confirmBtnVisible, countDown } = this.state;
    return (
      <React.Fragment>
        {/* <Title size="2xl" headingLevel="h1">DC</Title> */}
        <button type="button" onClick={this.openDialog}>Open Dialog</button>
        <button type="button" onClick={this.launchAlert}>Launch Alert</button>
        {/* <AudioList /> */}

        {confirmBtnVisible && (
          <button type="button" onClick={this.handleConfirm}>Confirm</button>
        )}

        <p>{feedbackMsg}</p>
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

          {/* <Modal
            title="React & Typescript"
            content="Are you sure you want to learn React & TS?"
            onCancel={this.handleCancelConfirm}
            onOk={this.handleOkConfirm}
            open={confirmOpen}
            /> */}

          {/* <FSConfirm
            title="React & Typescript"
            content="Are you sure you want to learn React & TS?"
            onCancel={this.handleCancelConfirm}
            onOk={this.handleOkConfirm}
            open={confirmOpen}
            /> */}

          {countDown > 0 && (
            <SFConfirm
              title="React & Typescript"
              content="Are you sure you want to learn React & TS?"
              onCancel={this.handleCancelConfirm}
              onOk={this.handleOkConfirm}
              open={confirmOpen}
              />
          )}
        </div>

      </React.Fragment>
    );
  }
}
