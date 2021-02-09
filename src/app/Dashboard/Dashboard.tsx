import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
// import markdown from '@app/Markdowns/test-01.md';
import 'github-markdown-css/github-markdown.css';

const markdownContext = require.context('../Markdowns/', false, /\.md$/);

function importAll (r) {
  let files: string[] = [];
  r.keys().forEach((r) => {
    console.log('r: ', r);
    files.push(markdownContext(r))
  });
  return files;
}

const markdownFiles = markdownContext.keys().map(filePath => markdownContext(filePath))
const newMarkdownFiles = importAll(markdownContext);
console.log(markdownFiles);

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
    {markdownFiles.map((el, idx) => {
      return <div key={idx} className="markdown-body" dangerouslySetInnerHTML={{ __html: el }} />;
    })}
    <div id="output"></div>
  </PageSection>
)

export { Dashboard };
