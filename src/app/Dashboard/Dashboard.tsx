import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import App from '../Table/Table';

const Dashboard: React.FunctionComponent<any> = (props) => {
  return (
    <PageSection>
      <App />
    </PageSection>
  );
}

export { Dashboard };
