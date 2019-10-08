import * as React from 'react';
import { PageSection, Title, Pagination } from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  textCenter,
  wrappable,
  cellWidth
} from "@patternfly/react-table";

const columns: object[] = [
  { title: "First column" },
  {
    title: "Second column",
    columnTransforms: [textCenter]
  },
  {
    title: "Third column header with an unusally long label that could potentially span many lines",
    transforms: [cellWidth(20), wrappable]
  }
];

const defaultRows = [
  {
    cells: [
      { title: "Row 1 column 1" },
      { title: "Row 1 column 2" },
      { title: "Row 1 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 2 column 1" },
      { title: "Row 2 column 2" },
      { title: "Row 2 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 3 column 1" },
      { title: "Row 3 column 2", props: { textCenter: null } },
      { title: "Row 3 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 4 column 1" },
      { title: "Row 4 column 2" },
      { title: "Row 4 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 5 column 1" },
      { title: "Row 5 column 2" },
      { title: "Row 5 column 3" }
    ]
  },
  {
    cells: [
      { title: "Row 6 column 1" },
      { title: "Row 6 column 2" },
      { title: "Row 6 column 3" }
    ]
  }
];

const Dashboard: React.FunctionComponent<any> = (props) => {
  const [numPerPage, setNumPerPage] = React.useState(2);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rows, setRows] = React.useState(defaultRows);
  const handlePerPageSelect = (evt: any, value: number) => {
    updateList(currentPage);
    setNumPerPage(value);
  };
  const updateList = (value: number) => {
    setCurrentPage(value);
    const beginMark = (value - 1) * numPerPage;
    const endMark = beginMark + numPerPage;
    let newRows = defaultRows.slice(beginMark, endMark);
    setRows(newRows);
  };

  const getPagination = () => {
    return (
      <Pagination
        isCompact={true}
        itemCount={defaultRows.length}
        perPage={numPerPage}
        onSetPage={(_evt, value) => {
          updateList(value);
        }}
        onPerPageSelect={handlePerPageSelect}
        page={currentPage}
        perPageOptions={[{ title: "2", value: 2 }, { title: "3", value: 3 }]}
      />
    );
  };
  React.useEffect(() => {
    handlePerPageSelect(null, numPerPage)
  }, [numPerPage]);
  return (
    <PageSection>
      <Title size="lg">Pagination Table Tutorial</Title>
      {getPagination()}
      <Table
        variant="compact"
        caption="Basic Transforms Table"
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </PageSection>
  );
}

export { Dashboard };
