import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '@app/index';
import { DashboardPage } from './dashboard/dashboard';
import { SettingsPage } from './settings/settings';

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/settings" component={SettingsPage} />
      </div>
    </Router>
  );
}

export { Routes };
