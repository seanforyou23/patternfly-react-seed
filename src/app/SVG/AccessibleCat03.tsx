import * as React from 'react';
import { PageSection } from '@patternfly/react-core';

const AccessibleCat03: React.FunctionComponent<{}> = () => (
  <PageSection>
    <svg
      role="group"
      aria-label="An accessible cat"
      width={140}
      height={170}
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <desc id="desc">This stick figure of a cat has been vectorized with svg.</desc>

      {/* The circle for the head */}
      <circle role="presentation" cx="70" cy="95" r="50" style={{ stroke: 'black', fill: 'none' }} />

      {/* Left eye */}
      <circle role="presentation" cx="55" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right eye */}
      <circle role="presentation" cx="85" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right wiskers */}
      <g id="right-wiskers" tabIndex={0} aria-label="Right wiskers">
        <line aria-label="Top right wisker" x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line aria-label="Bottom right wisker" x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Left wiskers */}
      <g id="left-wiskers" tabIndex={0} aria-label="Left wiskers" transform="scale(-1 1) translate(-140 0)">
        <line aria-label="Top left wisker" x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line aria-label="Bottom left wisker" x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Ears */}
      <polyline
        tabIndex={0}
        aria-label="Ears"
        aria-describedby="desc"
        points="108 62, 90 10, 70 45, 50, 10, 32, 62"
        style={{ stroke: 'black', fill: 'none' }} />

      {/* Mouth */}
      <polyline
        tabIndex={0}
        aria-label="Mouth"
        aria-describedby="desc"
        points="35 110, 45 120, 95 120, 105, 110"
        style={{ stroke: 'black', fill: 'none' }} />

      {/* Nose */}
      <path
        id="nose"
        name="nose"
        tabIndex={0}
        aria-label="Nose"
        aria-describedby="desc"
        d="M 75 90 L 65 90 A 5 10 0 0 0 75 90"
        style={{ stroke: 'black', fill: '#ffcccc' }} />
    </svg>
  </PageSection>
)

export { AccessibleCat03 };
