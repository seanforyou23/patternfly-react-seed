import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { CustomTable } from '@app/Dashboard/CustomTable';

const Dashboard: React.FunctionComponent<{}> = () => (
    <PageSection>
      <Title size="lg">Dashboard Page Title</Title>

      <CustomTable />
    </PageSection>
  )

export { Dashboard };
