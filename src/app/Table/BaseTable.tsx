import * as React from 'react';
import * as Table from 'reactabular-table';
import { PageSection } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Table/table.css';

const rows = [
  {
    id: 100,
    name: 'John',
    tools: {
      hammer: true
    },
    country: 'fi'
  },
  {
    id: 101,
    name: 'Jack',
    tools: {
      hammer: false
    },
    country: 'dk'
  }
];
const countries = {
  fi: 'Finland',
  dk: 'Denmark'
};

let dragSrcElement = {
  innerHTML: null
};

const dragFunctions = {
  onDragStart: (e) => {
    console.log(e);
    e.target.style.opacity = 0.4;
    dragSrcElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  },
  onDragEnd: (e) => {
    e.target.style.opacity = 1;
  },
  onDrop: (e) => {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcElement.innerHTML && dragSrcElement !== e.target) {
      console.log(e);
      // replace the item you were dragging with the one you dragged it onto
      dragSrcElement.innerHTML = e.target.innerHTML;
      // now replace the item you dropped onto with the one you were dragging
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }
    e.target.style.border = 'none';
    return false;
  },
  onDragOver: (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  },
  onDragEnter: (e) => {
    e.target.style.border = '2px black dashed';
  },
  onDragLeave: (e) => {
    e.target.style.border = 'none';
  }
}

const columns = [
  {
    property: 'name',
    header: {
      props: {
        draggable: true,
        tabIndex: 0,
        ...dragFunctions
      },
      label: 'Name'
    }
  },
  {
    property: 'tools',
    header: {
      props: {
        draggable: true,
        tabIndex: 0,
        ...dragFunctions
      },
      label: 'Active'
    },
    cell: {
      formatters: [
        tools => tools.hammer ? 'Hammertime' : 'nope'
      ]
    }
  },
  {
    property: 'country',
    header: {
      props: {
        draggable: true,
        tabIndex: 0,
        ...dragFunctions
      },
      label: 'Country',
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    },
    cell: {
      formatters: [
        country => countries[country]
      ]
    }
  },
];

interface IBaseTableProps {
  colReorder: boolean;
}
interface IBaseTableState {
  rows: any;
  columns: any;
}

class BaseTable extends React.Component<IBaseTableProps, IBaseTableState> {

  state = {
    rows,
    columns
  }

  render() {
    return (
      <PageSection variant="light">
        <Table.Provider
          role="grid"
          className="pf-c-table"
          columns={this.state.columns}
        >
          <Table.Header />

          <Table.Body rows={this.state.rows} rowKey="id" />
        </Table.Provider>
      </PageSection>
    );
  }
}

export { BaseTable };
