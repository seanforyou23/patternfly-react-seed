import * as React from "react";
import { Table, TableHeader, TableBody, ICell, IRow, expandable, IFormatterValueType, IExtra } from "@patternfly/react-table";
const myCollection = [
  { id: 1, exampleValue: ['first row', 'stub', 'cell'] },
  { id: 2, exampleValue: ['second row', 'stub', 'cell'] },
  { id: 3, exampleValue: ['third row', 'stub', 'cell'] },
  { id: 4, exampleValue: ['fourth row', 'stub', 'cell'] },
  { id: 5, exampleValue: ['fifth row', 'stub', 'cell'] },
  { id: 6, exampleValue: ['sixth row', 'stub', 'cell'] },
  { id: 7, exampleValue: ['seventh row', 'stub', 'cell'] }
];
// should be able to swap these commented lines
type MyColumnsType = any[];
// type MyColumnsType = Array<ICell | string>;
const columns: MyColumnsType = [
  {
    title: "First column",
    props: { className: "first-column-stuff" },
    cellFormatters: [expandable]
  },
  { title: "Second column" },
  { title: "Third column" }
];
const myRows = myCollection.reduce((acc, entry, idx) => {
  return [
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
  ];
}, [] as IRow[]);
const App = () => {
  const [rows, setRows] = React.useState<any[]>(myRows);
  const onCollapse = (event: any, rowKey: any, isOpen: any) => {
    const newRows = Array.from(rows);
    newRows[rowKey].isOpen = isOpen;
    setRows(newRows);
  }
  return (
    <Table onCollapse={onCollapse} caption="Expandable table whos column definition cannot be Array<ICell | string>" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
export default App;
