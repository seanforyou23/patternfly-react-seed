import * as React from 'react';
import { Alert, AlertProps } from '@patternfly/react-core';

interface IAlertGroupProps {
  children: AlertProps[];
}

// const buildAlert = (props: AlertProps, key: number): JSX.Element => {
//   return (
//     <Alert {...props} key={key} />
//   );
// }



// const liveRegion = () => {
//   return (
//     <div
//       className="live-region-container"
//       aria-atomic="false"
//       aria-live="polite"
//       aria-relevant="additions text">
//     </div>
//   );
// }

// const insertLiveRegion = (alert: any) => {
//   return new Promise((res, rej) => {
//     const currentLiveRegion = liveRegion();
//   });
// }

// const timeout = (component: any) => {
//   console.log(component);
//   setTimeout(() => {
//     return (
//       component
//       );
//   }, 1000);
// }
// const wait = (ms: number, component: any) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(component);
//     }, ms);
//   });
// }

const AlertGroup: React.FunctionComponent<IAlertGroupProps> = (props) => {
  const [rendered, setRendered] = React.useState(false);

  const buildAlert = (props: AlertProps, key: number, rendered: boolean): JSX.Element => {
    console.log('passed in rendered: ', rendered);
    // return <Alert {...props} key={key} />;
    return (
      <div aria-atomic="false" aria-live="polite" aria-relevant="additions text" key={key}>
        {rendered && <Alert {...props} key={key} />}
      </div>
    );
  }

  React.useEffect(() => {
    console.log('AlertGroup first rendering');
    setTimeout(() => {setRendered(true)}, 2000);
  }, []); // [] = will never be called after the initial render

  return (
    <React.Fragment>
      {props.children && props.children.map((alert: any, index: number) => {
        // return (<Alert {...alert.props} key={index} />); // works
        return buildAlert({...alert.props}, index, rendered); // works
        // return (
        //   <div aria-atomic="false" aria-live="polite" aria-relevant="additions text" key={index}>
        //     {alerts}
        //   </div>
        //   );


      })}
    </React.Fragment>
  );
}

export { AlertGroup };
