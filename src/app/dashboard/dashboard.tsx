import * as React from 'react';

interface IDashboardProps {}
interface IDashboardState {}

class DashboardPage extends React.Component<IDashboardProps, IDashboardState> {
  public constructor(props: IDashboardProps) {
    super(props);

    this.state = {};
  }
  public render() {
    return (<div>Dashboard</div>);
  }
}

export { DashboardPage };
