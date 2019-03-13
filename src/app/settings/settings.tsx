import * as React from 'react';

interface ISettingsProps {}
interface ISettingsState {}

class SettingsPage extends React.Component<ISettingsProps, ISettingsState> {
  public constructor(props: ISettingsProps) {
    super(props);

    this.state = {};
  }
  public render() {
    return (<div>Settings</div>);
  }
}

export { SettingsPage };
