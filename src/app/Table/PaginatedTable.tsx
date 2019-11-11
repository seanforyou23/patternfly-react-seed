import * as React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Table, TableHeader, TableBody } from "@patternfly/react-table";
import { Pagination } from '@patternfly/react-core';
import { columns, defaultRows } from './data';

const PaginatedTable = () => {

  const [numPerPage, setNumPerPage] = React.useState(2);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rows, setRows] = React.useState(defaultRows.slice(0, numPerPage));

  const onPerPageSelect = (
    _evt: MouseEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    newPerPage: number,
    page?: number,
    startIdx?: number,
    endIdx?: number
    ) => {
      console.log('per page select', newPerPage, page, startIdx, endIdx);
    setNumPerPage(newPerPage);
    if (page !== undefined) {
      setCurrentPage(page);
    }
    if (startIdx !== undefined && endIdx !== undefined) {
      setRows(defaultRows.slice(startIdx, endIdx));
    }
  }

  const onSetPage = (
    _evt: MouseEvent | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    newPage: number,
    newPerPage?: number,
    startIdx?: number,
    endIdx?: number
    ) => {
    setCurrentPage(newPage);
    if (newPerPage) {
      setNumPerPage(newPerPage);
    }
    if (startIdx !== undefined && endIdx !== undefined) {
      setRows(defaultRows.slice(startIdx, endIdx));
    }
  }

  return (
    <React.Fragment>
      <Pagination
        defaultToFullPage
        itemCount={defaultRows.length}
        perPage={numPerPage}
        page={currentPage}
        perPageOptions={[{ title: "1", value: 1 }, { title: "2", value: 2 }, { title: "3", value: 3 }, { title: "50", value: 50 }]}
        onPerPageSelect={(_evt, newPerPage, page, startIdx, endIdx) => {
          onPerPageSelect(_evt, newPerPage, page, startIdx, endIdx);
        }}
        onSetPage={(_evt, newPage, perPage, startIdx, endIdx) => {
          onSetPage(_evt, newPage, perPage, startIdx, endIdx);
        }}
        />
      <Table variant="compact" caption="Patternfly React Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
};
export default PaginatedTable;
