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

const FSConfirm: React.SFC<IProps> = (props) => {

  // using arrow functions in event handlers is one way to treat the "this" problem
  const handleOkClick = () => {
    props.onOk && props.onOk();
  }
  const handleCancelClick = () => {
    props.onCancel && props.onCancel();
  }
  const classes = () => {
    let classList = ['confirm-wrapper'];
    props.open
      ? classList.push('confirm-visible')
      : classList.filter((el) => !(el === 'confirm-visible'));
    return classList.join(' ');
  }
  return (
    <div className={classes()}>
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{props.title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel" onClick={handleCancelClick}>{props.cancelCaption}</button>
          <button className="confirm-ok" onClick={handleOkClick}>{props.okCaption}</button>
        </div>
      </div>
    </div>
  );
}

FSConfirm.defaultProps = {
  cancelCaption: 'Cancel',
  okCaption: 'Okay'
}

export default FSConfirm;
