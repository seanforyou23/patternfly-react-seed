import * as React from 'react';
import { BaseTable } from './BaseTable';
import { DragAndDropTable, DragDropContext, HTML5Backend } from './DragNDropTable';
// where does this go? and what's it needed for?
// const DragAndDrop = DragDropContext(HTML5Backend)(DragAndDropTable);

class ColReorderableTable extends React.Component<any, any> {
  render() {
    return (
      // <BaseTable colReorder={true} />
      <DragAndDropTable />
    );
  }
}

export { ColReorderableTable };
