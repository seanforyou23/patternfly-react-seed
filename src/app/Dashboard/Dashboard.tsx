import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { DatePickerWidget } from '../DatePickerWidget'

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
    <DatePickerWidget />
  </PageSection>
)

export { Dashboard };
