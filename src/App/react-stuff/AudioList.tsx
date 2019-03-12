import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListToggle,
  DataListContent,
  DataListCheck,
  DataListAction
} from '@patternfly/react-core';
import { AudioControl } from '@draftcab/react-stuff/audio-component';
import audioClip1 from '@draftcab/assets/audio/everything-you-are-looking-for.mp3';
import audioClip2 from '@draftcab/assets/audio/martha-my-dear.wav';

export class AudioList extends React.Component<{}> {
  public state = {
    expanded: ['ex-toggle1']
  };

  render() {
    const toggle = (id: string) => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =  index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    }
    return (
      <DataList aria-label="Expandable data list example">
        <DataListItem aria-labelledby="ex-item1" isExpanded={this.state.expanded.includes('ex-toggle1')}>
          <DataListToggle
            aria-labelledby="test"
            aria-label="test"
            onClick={() => toggle('ex-toggle1')}
            isExpanded={this.state.expanded.includes('ex-toggle1')}
            id="ex-toggle1"
            aria-controls="ex-expand1"
          />
          <DataListCheck aria-labelledby="ex-item1" name="ex-check1" />
          <DataListCell width={1}>
            <div id="ex-item1">Everything You're Looking For</div>
          </DataListCell>
          <DataListCell width={1}>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </DataListCell>
          <DataListAction aria-labelledby="ex-item1 ex-action1" id="ex-action1" aria-label="Actions" />
          <DataListContent aria-label="Primary Content Details" id="ex-expand1" isHidden={!this.state.expanded.includes('ex-toggle1')}>
            <AudioControl soundFile={audioClip1} />
            <p>
              This was an inpromptu jam
            </p>
          </DataListContent>
        </DataListItem>
        <DataListItem aria-labelledby="ex-item2" isExpanded={this.state.expanded.includes('ex-toggle2')}>
          <DataListToggle
            aria-labelledby="test"
            aria-label="test"
            onClick={() => toggle('ex-toggle2')}
            isExpanded={this.state.expanded.includes('ex-toggle2')}
            id="ex-toggle2"
            aria-controls="ex-expand2"
          />
          <DataListCheck aria-labelledby="ex-item2" name="ex-check2" />
          <DataListCell width={1}>
            <div id="ex-item2">Martha My Dear</div>
          </DataListCell>
          <DataListCell width={1}>
            <span>Lorem ipsum dolor sit amet.</span>
          </DataListCell>
          <DataListAction aria-labelledby="ex-item2 ex-action2" id="ex-action2" aria-label="Actions" />
          <DataListContent aria-label="Primary Content Details" id="ex-expand2" isHidden={!this.state.expanded.includes('ex-toggle2')}>
          <AudioControl soundFile={audioClip2} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </DataListContent>
        </DataListItem>
      </DataList>
    );
  }

}

export default AudioList;
