import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  ICell,
  IRow
} from '@patternfly/react-table';

const columns = ['Id', 'Account', 'Email Domain']

const myData = [
  {
    "_id": "07a11d52-af51-4ef2-a2b9-5dbf15c857de",
    "account": "1Lql07DTV0ara9DSQXil9d4bP2b",
    "email_domain": "redhat.com",
    "external_organization": "6340056",
    "version": "4.2.0-0.nightly-2019-11-06-011942",
    "time": 1573104085.1380000114,
    "value": "1573073356",
    "support": null
  },
  {
    "_id": "6f9df2c4-dbf5-455a-93f5-7f910d185fff",
    "account": "1Idy3arA9esn2Wo4ygvAC75wKRt",
    "email_domain": "redhat.com",
    "external_organization": "11909632",
    "version": "4.2.0-0.nightly-2019-11-04-231442",
    "time": 1573104085.1380000114,
    "value": "1572934171",
    "support": null
  }
];

const rowData = myData.map((cluster, idx) => {
  return {
    cells: [
      {
        title: cluster._id,
        props: { key: `${idx}-${idx}` }
      },
      {
        title: cluster.account,
        props: { key: `${idx}-${idx + 1}` }
      },
      {
        title: cluster.email_domain,
        props: { key: `${idx}-${idx + 2}` }
      }
    ]
  }
});

const rowKeyResolver = ({ rowData, rowIndex }) => {
  return `${rowIndex}`;
};

console.log(rowData);

class SimpleTable extends React.Component<{}, { columns: (ICell | string)[]; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: columns,
      rows: rowData
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Compact expandable table"
        variant="compact"
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody rowKey={rowKeyResolver} />
      </Table>
    );
  }
}

export { SimpleTable };
