import React from 'react';
// import { AudioList } from '@draftcab/react-stuff/AudioList';

interface IProps {
  soundFile: string;
}
export const AudioControl: React.FunctionComponent<IProps> = (props) => {

  return (
    <audio controls src={props.soundFile} preload="metadata"></audio>
  );
}

// export AudioControl;
