import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  IRow,
  expandable,
  cellWidth,
  IExtraRowData,
  RowWrapper,
  RowWrapperProps
} from "@patternfly/react-table";

const myCollection = [
  { id: 1, exampleValue: ['first row', 'stub', 'cell'] },
  { id: 2, exampleValue: ['second row', 'stub', 'cell'] },
  { id: 3, exampleValue: ['third row', 'stub', 'cell'] },
  { id: 4, exampleValue: ['fourth row', 'stub', 'cell'] },
  { id: 5, exampleValue: ['fifth row', 'stub', 'cell'] },
  { id: 6, exampleValue: ['sixth row', 'stub', 'cell'] },
  { id: 7, exampleValue: ['seventh row', 'stub', 'cell'] }
];

interface IComputedData {
  isInput: boolean;
  isButton: boolean;
}

const columns: any[] = [
  {
    title: "First column",
    props: { className: "first-column-stuff" },
    cellFormatters: [expandable],
    columnTransforms: [
      cellWidth(10)
    ]
  },
  { title: "Second column" },
  { title: "Third column" }
];
const myRows = myCollection.reduce((acc, entry, idx) => [
    ...acc,
    {
      cells: [
        { title: entry.exampleValue[0] },
        { title: entry.exampleValue[1] },
        { title: entry.exampleValue[2] }
      ],
      isOpen: false
    },
    {
      cells: [`Content for ${entry.id}`, '', ''],
      fullWidth: true,
      parent: idx * 2
    }
  ], [] as IRow[]);

const MyTable = () => {

  const [rows, setRows] = React.useState<IRow[]>(myRows);

  const onCollapse = (event: React.MouseEvent, rowKey: number, isOpen: boolean) => {
    const newRows = Array.from(rows);
    newRows[rowKey].isOpen = isOpen;
    setRows(newRows);
  }

  const onSelect = (event: React.FormEvent<HTMLInputElement>, isSelected: boolean, rowId: number) => {
    console.log(event.target);
    console.log(event.currentTarget);
    let newRows: IRow[];
    if (rowId === -1) {
      newRows = rows.map(oneRow => {
        oneRow.selected = isSelected;
        return oneRow;
      });
    } else {
      newRows = [...rows];
      newRows[rowId].selected = isSelected;
    }
    setRows(newRows);
  }

  const rowWrapper = (props: RowWrapperProps) => {
    return <RowWrapper className="custom-row" {...props} />
  }

  return (
    <Table onSelect={onSelect} onCollapse={onCollapse} caption="Row click table" cells={columns} rows={rows} rowWrapper={rowWrapper}>
      <TableHeader />
      <TableBody onRowClick={(event: React.MouseEvent, row: IRow, rowProps: IExtraRowData, computedData: IComputedData) => {
        // console.log('row stuff: ', row);
        }} />
    </Table>
  );
};
export { MyTable };
