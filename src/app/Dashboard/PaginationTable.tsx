import * as React from "react";
import { Pagination, OnPerPageSelect, OnSetPage } from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from "@patternfly/react-table";
import { columns, defaultRows } from '@app/Dashboard/data.js';

const PaginationTable = () => {
  const defaultPerPage = 2;
  const [numPerPage, setNumPerPage] = React.useState(defaultPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rows, setRows] = React.useState(defaultRows.slice(0, defaultPerPage));

  const handlePerPageSelect: OnPerPageSelect = (_evt, newPerPage, newPage = 1, startIdx, endIdx) => {
    setNumPerPage(newPerPage);
    setCurrentPage(newPage);
    setRows(defaultRows.slice(startIdx, endIdx));
  };

  const handleSetPage: OnSetPage = (_evt, newPage, perPage, startIdx, endIdx) => {
    setCurrentPage(newPage);
    setRows(defaultRows.slice(startIdx, endIdx));
  }

  const myActions = [
    {
      title: "Some Action",
      onClick: (event, rowId, rowData, extra) => {
        console.log('you clicked this row!');
        console.log(rowId, rowData, extra);
      }
    }
  ]

  return (
    <React.Fragment>

      <Pagination
        itemCount={defaultRows.length}
        perPage={numPerPage}
        page={currentPage}
        onPerPageSelect={handlePerPageSelect}
        onSetPage={handleSetPage}
        defaultToFullPage
        perPageOptions={[{ title: "2", value: 2 }, { title: "3", value: 3 }, { title: "100", value: 100 }]} />

      <Table actions={myActions} variant="compact" caption="Patternfly React Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
};

export { PaginationTable };
