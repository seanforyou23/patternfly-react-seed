import * as React from 'react';
import './confirm.css';
interface IProps {
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOk?: () => void;
  onCancel?: () => void;
  open: boolean;
}

class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: 'Cancel',
    okCaption: 'Okay'
  }
  // using arrow functions in event handlers is one way to treat the "this" problem
  private handleOkClick = () => {
    this.props.onOk && this.props.onOk();
  }
  private handleCancelClick = () => {
    this.props.onCancel && this.props.onCancel();
  }
  private classes = () => {
    let classList = ['confirm-wrapper'];
    this.props.open
      ? classList.push('confirm-visible')
      : classList.filter((el) => !(el === 'confirm-visible'));
    return classList.join(' ');
  }
  public render() {
    return (
      <div className={this.classes()}>
        <div className="confirm-container">
          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>
          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>
          <div className="confirm-buttons-container">
            <button className="confirm-cancel" onClick={this.handleCancelClick}>{this.props.cancelCaption}</button>
            <button className="confirm-ok" onClick={this.handleOkClick}>{this.props.okCaption}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
