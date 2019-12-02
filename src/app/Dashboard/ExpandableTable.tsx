import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth,
  TableProps,
  ICell,
  IRow,
  OnCollapse
} from '@patternfly/react-table';

class ExpandableTable extends React.Component<{}, { columns: (ICell | string)[]; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Header cell',
          cellFormatters: [expandable]
        },
        'Branches',
        { title: 'Pull requests' },
        '' // deliberately empty
      ],
      rows: [
        {
          isOpen: true,
          cells: ['parent - 1', 'two', 'three', 'four']
        },
        {
          parent: 0,
          fullWidth: true,
          cells: ['child - 1']
        },
        {
          isOpen: true,
          cells: ['parent - 3', 'two', 'three', 'four']
        },
        {
          parent: 2,
          noPadding: true,
          cells: [
            // {
            //   title: <div> 'child - 3' </div>,
            //   props: {
            //     emptyTD: null
            //   }
            // }
            'mychild!'
          ],
          // props: {
          //   emptyTD: null
          // }
        }
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(event, rowKey, isOpen) {
    const { rows } = this.state;
    /**
     * Please do not use rowKey as row index for more complex tables.
     * Rather use some kind of identifier like ID passed with each row.
     */
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Compact expandable table"
        variant={TableVariant.compact}
        onCollapse={this.onCollapse}
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export { ExpandableTable };
