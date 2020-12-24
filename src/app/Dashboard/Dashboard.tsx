import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import markdown from '@app/Dashboard/markdown-test.md';
import 'github-markdown-css/github-markdown.css';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: markdown }} />
  </PageSection>
)

export { Dashboard };
