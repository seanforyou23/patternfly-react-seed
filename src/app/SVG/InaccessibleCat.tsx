import * as React from 'react';
import { PageSection } from '@patternfly/react-core';

const InaccessibleCat: React.FunctionComponent<{}> = () => (
  <PageSection>
    <svg
      aria-labelledby="title desc"
      aria-hidden="false"
      width={140}
      height={170}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title id="title">A sementrical cat</title>
      <desc id="desc">This stick figure of a cat has been vectorized with svg.</desc>

      {/* The circle for the head */}
      <circle cx="70" cy="95" r="50" style={{ stroke: 'black', fill: 'none' }} />

      {/* Left eye */}
      <circle cx="55" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right eye */}
      <circle cx="85" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right wiskers */}
      {/* Each group may also have its own title and desc to identify it for text-based XML apps or assistive technology */}
      <g id="wiskers" tabIndex={0} aria-labelledby="wiskers-title" aria-describedby="wiskers-desc">
        <title id="wiskers-title">Some wiskers for a cat</title>
        <desc id="wiskers-desc">These wiskers are sementrical.</desc>
        <line x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Left wiskers */}
      <use xlinkHref="#wiskers" transform="scale(-1 1) translate(-140 0)" />

      {/* Ears */}
      <polyline points="108 62, 90 10, 70 45, 50, 10, 32, 62" style={{ stroke: 'black', fill: 'none' }} />

      {/* Mouth */}
      <polyline points="35 110, 45 120, 95 120, 105, 110" style={{ stroke: 'black', fill: 'none' }} />

      {/* Nose */}
      <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" style={{ stroke: 'black', fill: '#ffcccc' }} />

      <text x="10" y="165">Inaccessible cat</text>
    </svg>
  </PageSection>
)

export { InaccessibleCat };
