import React, { Component } from 'react';
import { Alert, Button } from '@patternfly/react-core';
import './app.css';
// import { Form, FormGroup, Checkbox } from 'react-bootstrap';
import { Form, FormGroup, Checkbox } from 'patternfly-react'
import 'bootstrap/dist/css/bootstrap.css';

// bsClass?: string;
// disabled?: boolean;
// inline?: boolean;
// inputRef?: (instance: HTMLInputElement) => void;
// validationState?: "success" | "warning" | "error";



export default class App extends Component {
  state = {
    isShowing: true,
    inputChecked: false
  };

  doAThing = () => {
    this.setState({
      inputChecked: !this.state.inputChecked
    });
  };

  dismissNotification = () => {
    this.setState({ isShowing: false });
  };
  render() {
    const { isShowing, inputChecked } = this.state;
    return (
      <div className="app-container">
        {isShowing && (
          <div className="notification-container">
            <Alert
              variant="success"
              title="Setup Complete"
              action={
                <Button onClick={this.dismissNotification} variant="secondary">
                  Dismiss
                </Button>
              }
            >
              You have successfully launched your patternfly starter project.
            </Alert>
          </div>
        )}

        <div>
          <Form>
            <FormGroup>
              <Checkbox
                validationState="warning"
                disabled={false}
                inline={false}
                checked={inputChecked}
                onChange={this.doAThing}
              >check me</Checkbox>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
