import * as React from 'react';
import { PageSection } from '@patternfly/react-core';

const AccessibleCat02: React.FunctionComponent<{}> = () => (
  <PageSection>
    <svg
      role="group"
      aria-labelledby="image-0title"
      aria-describedby="image-description"
      width={140}
      height={170}
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title id="image-title">A semetrical cat</title>
      <desc id="image-desc">This stick figure of a cat has been vectorized with svg.</desc>

      {/* The circle for the head */}
      <circle role="presentation" cx="70" cy="95" r="50" style={{ stroke: 'black', fill: 'none' }} />

      {/* Left eye */}
      <circle role="presentation" cx="55" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right eye */}
      <circle role="presentation" cx="85" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right wiskers */}
      <g aria-labelledby="right-wiskers-title" aria-describedby="right-wiskers-desc">
        <title id="right-wiskers-title">Right wiskers</title>
        <desc id="right-wiskers-desc">Wiskers on the right side of the cat face.</desc>
        <line aria-label="Top wisker" aria-describedby="right-wiskers-desc" x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line aria-label="Bottom wisker" aria-describedby="right-wiskers-desc" x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Left wiskers */}
      <g aria-labelledby="left-wiskers-title" aria-describedby="left-wiskers-desc" transform="scale(-1 1) translate(-140 0)">
        <title id="left-wiskers-title">Left wiskers</title>
        <desc id="left-wiskers-desc">Wiskers on the left side of the cat face.</desc>
        <line aria-label="Top wisker" aria-describedby="left-wiskers-desc" x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line aria-label="Bottom wisker" aria-describedby="left-wiskers-desc" x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Ears */}
      <polyline
        aria-label="Ears"
        points="108 62, 90 10, 70 45, 50, 10, 32, 62"
        style={{ stroke: 'black', fill: 'none' }} />

      {/* Mouth */}
      <polyline
        aria-label="Mouth"
        points="35 110, 45 120, 95 120, 105, 110"
        style={{ stroke: 'black', fill: 'none' }} />

      {/* Nose */}
      <path
        id="nose"
        aria-label="Nose"
        d="M 75 90 L 65 90 A 5 10 0 0 0 75 90"
        style={{ stroke: 'black', fill: '#ffcccc' }} />
    </svg>
  </PageSection>
)

export { AccessibleCat02 };
