import * as React from 'react';
import { PageSection, Title, TextContent, Text, Tooltip } from '@patternfly/react-core';

const AccessibleCat01: React.FunctionComponent<{}> = () => (
  <PageSection>
    <TextContent>
      <Title headingLevel="h1">Barely accessible cat</Title>
      <Text>Notice that with this cat, we're using a role of group for the svg root instead of "img" and also add some tab stops to certain elements within the svg, this allows us to drill down into and traverse the svg parts and not be limited to a single label/description for the entire svg (which is more a strategy for making svg <em>icons</em> accessible - a very different story than making an svg canvas application accessible, like we have with PF charts).</Text>
      <Text>This also means that when using VO cursor navigation, users will have to comb over every single path of the svg which is a lot to wade through. For path parts that don't relay any meaningful value, we should just hide them from SRU with role="presentation" or aria-hidden="true"</Text>
      <Text></Text>
      <Text>Notice that by assigning label/descriptions to the &lt;<Tooltip content="Each group may also have its own title and desc to identify it for text-based XML apps or assistive technology"><b>g</b></Tooltip>&gt; elements (and even individual path elements!) we can effectively describe logical sections of the svg. In this example, we've given label/description to the wisker groups and the individual wisker paths. A problem exists though, how does the SRU distinguish between the top/bottom wiskers of the left vs the right? While similar in value, the context is what makes them different. We'll explore how to improve this in the next example.</Text>
      <Text>A final problem to call out is that of the annoying hover tooltip that's produced from using the title element. While helping assistive technology, this can sometimes cause a degraded experience for sighted users by the tooltip overlaying other svg content. We'll improve this also in the next example.</Text>
    </TextContent>

    <svg
      role="group"
      aria-labelledby="title desc"
      aria-hidden="false"
      width={140}
      height={170}
      tabIndex={0}
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

      {/* Wiskers */}
      <g aria-labelledby="right-wiskers-title" aria-describedby="right-wiskers-desc">
        <title id="right-wiskers-title">Right wiskers</title>
        <desc id="right-wiskers-desc">Wiskers on the right side of the cat face.</desc>
        <line aria-label="Top wisker" tabIndex={0} x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line aria-label="Bottom wisker" tabIndex={0} x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Left wiskers */}
      <g aria-labelledby="left-wiskers-title" aria-describedby="left-wiskers-desc" transform="scale(-1 1) translate(-140 0)">
        <title id="left-wiskers-title">Left wiskers</title>
        <desc id="left-wiskers-desc">Wiskers on the left side of the cat face.</desc>
        <line aria-label="Top wisker" tabIndex={0} x1="75" y1="95" x2="135" y2="85" style={{ stroke: 'black' }} />
        <line aria-label="Bottom wisker" tabIndex={0} x1="75" y1="95" x2="135" y2="105" style={{ stroke: 'black' }} />
      </g>

      {/* Ears */}
      <polyline points="108 62, 90 10, 70 45, 50, 10, 32, 62" style={{ stroke: 'black', fill: 'none' }} />

      {/* Mouth */}
      <polyline points="35 110, 45 120, 95 120, 105, 110" style={{ stroke: 'black', fill: 'none' }} />

      {/* Nose */}
      <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" style={{ stroke: 'black', fill: '#ffcccc' }} />

      <text x="10" y="165">Accessible cat 01</text>
    </svg>
  </PageSection>
)

export { AccessibleCat01 };
