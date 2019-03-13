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

const SFConfirm: React.FunctionComponent<IProps> = (props) => {
  console.log('SFConfirm rendering');
  const [cancelClickCount, setCancelClickCount] = React.useState(0); // create a state & destructure the resulting array

  // second param of useEffect is an array of values which determines
  // when our arrow function is called (when those array values change)
  // React.useEffect(() => {
  //   console.log('SFConfirm first rendering');
  // }, []); // [] = will never be called after the initial render
  React.useEffect(() => {
    console.log('Open changed');
  }, [props.open]); // hook into when the open prop changes

  React.useEffect(() => { return () => {
    // console.log('Confirm unmounted');
  } }); // hook into when a component is unmounted

  // using arrow functions in event handlers is one way to treat the "this" problem
  const handleOkClick = () => {
    props.onOk && props.onOk();
  }
  const handleCancelClick = () => {
    const newCount = cancelClickCount + 1; // create a new variable to hold the new state value
    setCancelClickCount(newCount); // update the hook state
    if (newCount > 2) {
      props.onCancel && props.onCancel();
    }
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
          <button className="confirm-cancel" onClick={handleCancelClick}>
            {cancelClickCount === 0 ? props.cancelCaption : 'Really?'}
          </button>
          <button className="confirm-ok" onClick={handleOkClick}>{props.okCaption}</button>
        </div>
      </div>
    </div>
  );
}

SFConfirm.defaultProps = {
  cancelCaption: 'Cancel',
  okCaption: 'Okay'
}

const SFConfirmMemo = React.memo(SFConfirm); // built in memoization!

export { SFConfirmMemo as SFConfirm };
