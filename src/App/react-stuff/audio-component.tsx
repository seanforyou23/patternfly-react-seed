import React from 'react';
// import soundFile from '@draftcab/assets/audio/everything-you-are-looking-for.mp3';
// import img from '~@draftcab/App/assets/images/bundleChunk.png';
// import img from '~/assets/images/bundleChunk.png';
// import img from '@draftcab/App/assets/images/bundleChunk.png';
// import img from '/assets/images/bundleChunk.png';

// import img from '~/bundleChunk.png'
import img from '@draftcab/assets/images/bundleChunk.png';
// import img from '../assets/images/bundleChunk.png';

const AudioScript: React.FunctionComponent<{}> = () => {

  return (
    // <audio controls src={soundFile} preload="metadata"></audio>
    <img src={img} alt="test image" />
  );
}

export default AudioScript;
