
import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  textCenter,
  IRow
} from '@patternfly/react-table';
import { Text, TextVariants } from '@patternfly/react-core';

export class CustomTable extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
        {
          cells: [
            {
              title: <div>one - 2</div>,
              props: { title: 'hover title', colSpan: 3 }
            },
            'four - 2',
            'five - 2'
          ]
        },
        {
          cells: [
            'one - 3',
            'two - 3',
            'three - 3',
            'four - 3',
            {
              title: 'five - 3 (not centered)',
              props: { textCenter: false }
            }
          ]
        }
      ],
      perPage: 10,
      page: 1,
      pipelines: [
        {
          name: 'foo',
          lastRun: 'bar'
        },
        {
          name: 'biz',
          lastRun: 'baz'
        }
      ]
    };
  }

  getRows = (): (IRow | string[])[] => {
    const startItem = (this.state.page - 1) * this.state.perPage;
    return this.state.pipelines
      .slice(startItem, startItem + this.state.perPage)
      .map(pipeline => {
        return {
          cells: [
            {
              title: <Text component={TextVariants.a} href={"/pipeline/" + this.props.product + "/" + pipeline.name}>{pipeline.name}</Text>
            },
            {
              title: <Text component={TextVariants.a} href={"/pipeline/runs/" + pipeline.lastRun}>{pipeline.lastRun}</Text>
            },
            {
              title: <div className="nowrap">status icon, status text</div>
            },
            {
              title: <p>pipeline stuffs</p>
            },
            {
              title: <p>duration stuffs</p>
            }
          ]
        }
      });
  };

  render() {
    const { columns, rows } = this.state;
    console.log(rows);
    console.log(this.getRows());

    return (
      <Table aria-label="Simple Table" cells={columns} rows={this.getRows()}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
