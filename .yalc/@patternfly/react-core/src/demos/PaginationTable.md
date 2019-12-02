---
title: 'Pagination table'
section: 'demos'
---

## Pagination table demo

import { Pagination, PaginationVariant, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

```js
import React from 'react';
import { Pagination, PaginationVariant, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.state = {
      res: [],
      perPage: 20,
      total: 100,
      page: 1,
      error: null,
      loading: true
    };
  }

  fetch(page, perPage) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ res: resp, perPage, page, loading: false }))
      .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetch(this.state.page, this.state.perPage);
  }

  renderPagination(variant = 'top') {
    const { page, perPage, total } = this.state;
    return (
      <Pagination
        itemCount={total}
        page={page}
        perPage={perPage}
        onSetPage={(_evt, value) => this.fetch(value, perPage)}
        onPerPageSelect={(_evt, value) => this.fetch(1, value)}
        variant={variant}
      />
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        {this.renderPagination()}
        {!loading && (
          <Table cells={['Title', 'Body']} rows={this.state.res.map(post => [post.title, post.body])} aria-label="Pagination table">
            <TableHeader />
            <TableBody />
          </Table>
        )}
        {loading && <center><Title size="3xl">Please wait while loading data</Title></center>}
      </React.Fragment>
    );
  }
}
```

## Automated pagination table demo

```js
import React from 'react';
import { Pagination, PaginationVariant, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.columns = [
      { title: "First column" },
      { title: "Second column" },
      { title: "Third column" }
    ];
    this.defaultRows = [
      { cells: [
        { title: "Row 1 column 1" },
        { title: "Row 1 column 2" },
        { title: "Row 1 column 3" }
      ]},
      { cells: [
        { title: "Row 2 column 1" },
        { title: "Row 2 column 2" },
        { title: "Row 2 column 3" }
      ]},
      { cells: [
        { title: "Row 3 column 1" },
        { title: "Row 3 column 2" },
        { title: "Row 3 column 3" }
      ]},
      { cells: [
        { title: "Row 4 column 1" },
        { title: "Row 4 column 2" },
        { title: "Row 4 column 3" }
      ]},
      { cells: [
        { title: "Row 5 column 1" },
        { title: "Row 5 column 2" },
        { title: "Row 5 column 3" }
      ]},
      { cells: [
        { title: "Row 6 column 1" },
        { title: "Row 6 column 2" },
        { title: "Row 6 column 3" }
      ]},
      { cells: [
        { title: "Row 7 column 1" },
        { title: "Row 7 column 2" },
        { title: "Row 7 column 3" }
      ]},
      { cells: [
        { title: "Row 8 column 1" },
        { title: "Row 8 column 2" },
        { title: "Row 8 column 3" }
      ]},
      { cells: [
        { title: "Row 9 column 1" },
        { title: "Row 9 column 2" },
        { title: "Row 9 column 3" }
      ]},
      { cells: [
        { title: "Row 10 column 1" },
        { title: "Row 10 column 2" },
        { title: "Row 10 column 3" }
      ]},
      { cells: [
        { title: "Row 11 column 1" },
        { title: "Row 11 column 2" },
        { title: "Row 11 column 3" }
      ]},
      { cells: [
        { title: "Row 12 column 1" },
        { title: "Row 12 column 2" },
        { title: "Row 12 column 3" }
      ]}
    ];
    this.defaultPerPage = 10;
    this.state = {
      perPage: this.defaultPerPage,
      page: 1,
      rows: this.defaultRows.slice(0, this.defaultPerPage)
    };
  }

  handleSetPage(page, startIdx, endIdx) {
    this.setState({
      page,
      rows: this.defaultRows.slice(startIdx, endIdx)
    });
  }

  handlePerPageSelect(page, perPage, startIdx, endIdx) {
    this.setState({
      perPage,
      page,
      rows: this.defaultRows.slice(startIdx, endIdx)
    });
  }

  renderPagination(variant = 'top') {
    const { page, perPage, total } = this.state;
    return (
      <Pagination
        itemCount={this.defaultRows.length}
        page={page}
        perPage={perPage}
        defaultToFullPage
        onSetPage={(_evt, newPage, perPage, startIdx, endIdx) => {
          this.handleSetPage(newPage, startIdx, endIdx);
        }}
        onPerPageSelect={(_evt, newPerPage, newPage, startIdx, endIdx) => {
          this.handlePerPageSelect(newPage, newPerPage, startIdx, endIdx);
        }}
        perPageOptions={[
          { title: "3", value: 3 },
          { title: "5", value: 5 },
          { title: "12", value: 12},
          { title: '20', value: 20 }
        ]}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderPagination()}
        <Table aria-label="Automated pagination table" cells={this.columns} rows={this.state.rows.map(row => row.cells)}>
          <TableHeader />
          <TableBody />
        </Table>
      </React.Fragment>
    );
  }
}
```
