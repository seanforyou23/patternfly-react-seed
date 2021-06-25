import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/react-styles/css/utilities/Spacing/spacing.css';
import { QueryClient, QueryCache, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

const App: React.FunctionComponent = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  </QueryClientProvider>
);

export default App;
