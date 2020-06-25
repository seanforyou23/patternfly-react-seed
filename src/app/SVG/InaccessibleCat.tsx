import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

const InaccessibleCat: React.FunctionComponent<{}> = () => (
  <PageSection>
    <Title headingLevel="h1">O'Reilly the inaccessible cat</Title>
    <p>Notice this cat, while carrying an accessible name and even a description, isn't very accessible. This svg uses a similar strategy as we do in <code>{`@patternfly/react-{charts,icons}`}</code> by using <code>role="img"</code> and attaching an accessible name/description and calling it a day.</p>
    <svg
      role="img"
      aria-labelledby="title desc"
      aria-hidden="false"
      width={140}
      height={170}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <title id="title">O'Reilly</title>
      <desc id="desc">A stick figure cat</desc>

      {/* The circle for the head */}
      <circle cx="70" cy="95" r="50" style={{ stroke: 'black', fill: 'none' }} />

      {/* Left eye */}
      <circle cx="55" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right eye */}
      <circle cx="85" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right wiskers */}
      <g id="wiskers">
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
