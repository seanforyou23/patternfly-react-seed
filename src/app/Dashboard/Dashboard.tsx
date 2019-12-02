import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { PaginationTable } from '@app/Dashboard/PaginationTable';
import { ExpandableTable } from '@app/Dashboard/ExpandableTable';

const Dashboard: React.FunctionComponent<{}> = () => (
    <PageSection>
      <Title size="lg">Dashboard Page Title</Title>

      {/* <PaginationTable /> */}
      <ExpandableTable />
    </PageSection>
  )

export { Dashboard };
