import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  cellWidth,
  ITransform,
  IAction
} from '@patternfly/react-table';

const myTransform: ITransform = (thing1, extra) => {
  console.log('I did a thing', thing1, extra);
  return {
    // editable: true
  };
};

const Dashboard: React.FunctionComponent<{}> = () => {
  const columns = [
    { title: 'Header cell', cellTransforms: [cellWidth(50), myTransform] },
    'Branches',
    { title: 'Pull requests', props: { className: 'pf-u-text-align-center' } },
    '' // deliberately empty
  ];
  const rows = [
    [
      'row one column one',
      'row one column two',
      'row one column three',
      'row one column four'
    ],
    [
      'row two column one',
      'row two column two',
      'row two column three',
      'row two column four'
    ],
    [
      'row three column one',
      'row three column two',
      'row three column three',
      'row three column four'
    ]
  ];
  const actions: IAction[] = [
    {
      title: 'Edit',
      onClick: (event, rowId, rowData, extra) => {
        console.log(rowId, rowData, extra);
      }
    }
  ]
  return (
    <PageSection>
      <Title size="lg">Dashboard Page Title</Title>
      <Table actions={actions} aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    </PageSection>
  )
}

export { Dashboard };
