import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { accessibleRouteChangeHandler } from '@app/utils/utils';
import { NotFound } from '@app/NotFound/NotFound';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';
import { LastLocationProvider, useLastLocation } from 'react-router-last-location';
import { InaccessibleCat } from '@app/SVG/InaccessibleCat';
import { AccessibleCat01 } from '@app/SVG/AccessibleCat01';
import { AccessibleCat02 } from '@app/SVG/AccessibleCat02';
import { AccessibleCat03 } from '@app/SVG/AccessibleCat03';
import { InaccessibleStackChart } from '@app/SVG/InaccessibleStackChart';
import { AccessibleStackChart } from '@app/SVG/AccessibleStackChart';

let routeFocusTimer: number;

export interface IAppRoute {
  label?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  isAsync?: boolean;
}

const routes: IAppRoute[] = [
  {
    component: InaccessibleCat,
    exact: true,
    isAsync: true,
    label: 'InaccessibleCat',
    path: '/',
    title: 'Stub',
  },
  {
    component: AccessibleCat01,
    exact: true,
    isAsync: true,
    label: 'AccessibleCat01',
    path: '/accessible-cat-01',
    title: 'Stub',
  },
  {
    component: AccessibleCat02,
    exact: true,
    isAsync: true,
    label: 'Title + desc elements',
    path: '/accessible-cat-02',
    title: 'Accessible SVG using title and desc elements',
  },
  {
    component: AccessibleCat03,
    exact: true,
    isAsync: true,
    label: 'Aria-labels',
    path: '/accessible-cat-03',
    title: 'Accessible SVG using aria-label',
  },
  {
    component: InaccessibleStackChart,
    exact: true,
    isAsync: true,
    label: 'Inaccessible StackChart',
    path: '/inaccessible-stack-chart',
    title: 'Current PatternFly Stack Chart',
  },
  {
    component: AccessibleStackChart,
    exact: true,
    isAsync: true,
    label: 'Accessible StackChart',
    path: '/accessible-stack-chart',
    title: 'Modified PatternFly Stack Chart',
  }
];

// a custom hook for sending focus to the primary content container
// after a view has loaded so that subsequent press of tab key
// sends focus directly to relevant content
const useA11yRouteChange = (isAsync: boolean) => {
  const lastNavigation = useLastLocation();
  React.useEffect(() => {
    if (!isAsync && lastNavigation !== null) {
      routeFocusTimer = accessibleRouteChangeHandler();
    }
    return () => {
      window.clearTimeout(routeFocusTimer);
    };
  }, [isAsync, lastNavigation]);
};

const RouteWithTitleUpdates = ({ component: Component, isAsync = false, title, ...rest }: IAppRoute) => {
  useA11yRouteChange(isAsync);
  useDocumentTitle(title);

  function routeWithTitle(routeProps: RouteComponentProps) {
    return <Component {...rest} {...routeProps} />;
  }

  return <Route render={routeWithTitle} />;
};

const PageNotFound = ({ title }: { title: string }) => {
  useDocumentTitle(title);
  return <Route component={NotFound} />;
};

const AppRoutes = () => (
  <LastLocationProvider>
    <Switch>
      {routes.map(({ path, exact, component, title, isAsync }, idx) => (
        <RouteWithTitleUpdates
          path={path}
          exact={exact}
          component={component}
          key={idx}
          title={title}
          isAsync={isAsync}
        />
      ))}
      <PageNotFound title="404 Page Not Found" />
    </Switch>
  </LastLocationProvider>
);

export { AppRoutes, routes };
