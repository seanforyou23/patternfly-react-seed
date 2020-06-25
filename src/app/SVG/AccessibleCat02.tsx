import * as React from 'react';
import { PageSection, TextContent, Title, Text } from '@patternfly/react-core';

const AccessibleCat02: React.FunctionComponent<{}> = () => (
  <PageSection>
    <TextContent>
      <Title headingLevel="h1">O'Reilly the accessible cat</Title>
      <Text>With this cat svg, the first thing to notice is that we replace aria-labelledby/title elements with explicit aria-label(s). We still get the accessible name for the svg, but it doesn't show up on hover. We leave the desc elements in tact as they serve a further purpose of providing <em>context</em> around other datapoints within the graph.</Text>
      <Text>Next thing to notice is that we carefully hide from SRUs whatever parts of the svg we don't intend on relayin to the user with <code>role="presentation"</code>, so that users only traverse things which have some semantic/contextual value. This helps streamline the navigation experience.</Text>
      <Text>Notice that while the wisker paths are accessible to both screen reader users and sighted keyboard users, the other svg parts like the Ears, Mouth, and Nose don't carry tabindex and so are really only consumable by SRU. This descrepency between sighted and unsighted experience is something to think more about, probably some level of difference is acceptable, but where to draw this line?</Text>
    </TextContent>
    <svg
      role="group"
      aria-label="O'Reilly"
      aria-describedby="image-desc"
      width={140}
      height={170}
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <desc id="image-desc">A stick figure cat</desc>

      {/* The circle for the head */}
      <circle role="presentation" cx="70" cy="95" r="50" style={{ stroke: 'black', fill: 'none' }} />

      {/* Left eye */}
      <circle role="presentation" cx="55" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right eye */}
      <circle role="presentation" cx="85" cy="80" r="5" style={{ stroke: 'black', fill: '339933' }} />

      {/* Right wiskers */}
      <g aria-label="Right wiskers" aria-describedby="right-wiskers-desc">
        <desc id="right-wiskers-desc">Wiskers on the right side of the cat face.</desc>
        <line tabIndex={0} aria-label="Top wisker" aria-describedby="right-wiskers-desc" x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line tabIndex={0} aria-label="Bottom wisker" aria-describedby="right-wiskers-desc" x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Left wiskers */}
      <g aria-label="Left wiskers" aria-describedby="left-wiskers-desc" transform="scale(-1 1) translate(-140 0)">
        <desc id="left-wiskers-desc">Wiskers on the left side of the cat face.</desc>
        <line tabIndex={0} aria-label="Top wisker" aria-describedby="left-wiskers-desc" x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line tabIndex={0} aria-label="Bottom wisker" aria-describedby="left-wiskers-desc" x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Ears */}
      <polyline
        aria-label="Ears"
        aria-describedby="image-desc"
        tabIndex={0}
        points="108 62, 90 10, 70 45, 50, 10, 32, 62"
        style={{ stroke: 'black', fill: 'none' }} />

      {/* Mouth */}
      <polyline
        aria-label="Mouth"
        aria-describedby="image-desc"
        tabIndex={0}
        points="35 110, 45 120, 95 120, 105, 110"
        style={{ stroke: 'black', fill: 'none' }} />

      {/* Nose */}
      <path
        aria-label="Nose"
        aria-describedby="image-desc"
        tabIndex={0}
        d="M 75 90 L 65 90 A 5 10 0 0 0 75 90"
        style={{ stroke: 'black', fill: '#ffcccc' }} />
    </svg>
  </PageSection>
)

export { AccessibleCat02 };
