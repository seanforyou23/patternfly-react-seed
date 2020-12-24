import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import markdown from '@app/Dashboard/markdown-test.md';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </PageSection>
)

export { Dashboard };
