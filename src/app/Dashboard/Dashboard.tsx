import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import PaginatedTable from '../Table/PaginatedTable';
import { MyTable } from '../Table/Table';

const Dashboard: React.FunctionComponent<any> = (props) => {
  return (
    <PageSection>
      <Title size="lg">Dashboard Page Title</Title>
      {/* <PaginatedTable /> */}
      <MyTable />
    </PageSection>
  );
}

export { Dashboard };
