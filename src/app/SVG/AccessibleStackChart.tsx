import * as React from 'react';
import { PageSection, Title, TextContent, Text } from '@patternfly/react-core';

const AccessibleStackChart: React.FunctionComponent<{}> = () => (
  <PageSection>
    <TextContent>
      <Title headingLevel="h1">This stacked chart is modified to allow for traversal and consumption of the logical sections</Title>
      <Text>This stacked chart applies the main techniques as mentioned in v1 & v2 of the cat svg examples, taking it from not very accessible to fairly accessible.</Text>
    </TextContent>

    <svg
      tabIndex={0}
      width="600"
      height="250"
      role="group"
      aria-label="Stack chart example"
      aria-describedby="chart-description"
      viewBox="0 0 600 250"
      style={{ pointerEvents: 'all', width: '100%', height: 'auto' }}>
      <desc id="chart-description">Average number of pets</desc>
      {/* x-axis stuff */}
      <g role="presentation">
        <line role="presentation" vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="400" y1="200" y2="200" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', strokeWidth: '1', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
        <g id="label-2015" aria-labelledby="datapoint-2015" aria-describedby="desc-2015" role="presentation">
          <desc id="desc-2015">The average number of pets for this year was 10</desc>
          {/* @ts-ignore */}
          <line role="presentation" vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="79.3731652564324" x2="79.3731652564324" y1="200" y2="205" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text role="presentation" direction="inherit" dx="0" dy="11.969999999999999" x="79.3731652564324" y="215" id="chart-axis-0-tickLabels-0">
            <tspan aria-describedby="label-2015" id="datapoint-2015" x="79.3731652564324" dx="0" textAnchor="middle" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>2015</tspan>
          </text>
        </g>
        <g id="label-2016" aria-labelledby="datapoint-2016" aria-describedby="desc-2016" role="presentation">
          <desc id="desc-2016">The average number of pets for this year was 10</desc>
          {/* @ts-ignore */}
          <line role="presentation" vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="178.08956426639037" x2="178.08956426639037" y1="200" y2="205" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text role="presentation" direction="inherit" dx="0" dy="11.969999999999999" x="178.08956426639037" y="215" id="chart-axis-0-tickLabels-1">
            <tspan id="datapoint-2016" x="178.08956426639037" dx="0" textAnchor="middle" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>2016</tspan>
          </text>
        </g>
        <g id="label-2017" aria-labelledby="datapoint-2017" aria-describedby="desc-2017" role="presentation">
          <desc id="desc-2017">The average number of pets for this year was 29</desc>
          {/* @ts-ignore */}
          <line role="presentation" vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="276.8059632763484" x2="276.8059632763484" y1="200" y2="205" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text role="presentation" direction="inherit" dx="0" dy="11.969999999999999" x="276.8059632763484" y="215" id="chart-axis-0-tickLabels-2">
            <tspan id="datapoint-2017" x="276.8059632763484" dx="0" textAnchor="middle" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>2017</tspan>
          </text>
        </g>
        <g id="label-2018" aria-labelledby="datapoint-2018" aria-describedby="desc-2018" role="presentation">
          <desc id="desc-2018">The average number of pets for this year was 19</desc>
          {/* @ts-ignore */}
          <line role="presentation" vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="375.52236228630636" x2="375.52236228630636" y1="200" y2="205" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text role="presentation" direction="inherit" dx="0" dy="11.969999999999999" x="375.52236228630636" y="215" id="chart-axis-0-tickLabels-3">
            <tspan id="datapoint-2018" x="375.52236228630636" dx="0" textAnchor="middle" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>2018</tspan>
          </text>
        </g>
      </g>
      {/* y-axis stuff */}
      <g aria-hidden="true">
        <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="50" y1="50" y2="200" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', strokeWidth: '1', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
        <g>
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="400" y1="174.13793103448276" y2="174.13793103448276" style={{ stroke: 'rgb(210, 210, 210)', fill: 'none', pointerEvents: 'painted', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
          {/* @ts-ignore */}
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="45" y1="174.13793103448276" y2="174.13793103448276" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text direction="inherit" dx="0" dy="4.97" x="35" y="174.13793103448276" id="chart-axis-1-tickLabels-0">
            <tspan x="35" dx="0" textAnchor="end" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>5</tspan>
          </text>
        </g>
        <g>
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="400" y1="148.27586206896552" y2="148.27586206896552" style={{ stroke: 'rgb(210, 210, 210)', fill: 'none', pointerEvents: 'painted', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
          {/* @ts-ignore */}
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="45" y1="148.27586206896552" y2="148.27586206896552" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text direction="inherit" dx="0" dy="4.97" x="35" y="148.27586206896552" id="chart-axis-1-tickLabels-1">
            <tspan x="35" dx="0" textAnchor="end" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>10</tspan>
          </text>
        </g>
        <g>
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="400" y1="122.41379310344827" y2="122.41379310344827" style={{ stroke: 'rgb(210, 210, 210)', fill: 'none', pointerEvents: 'painted', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
          {/* @ts-ignore */}
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="45" y1="122.41379310344827" y2="122.41379310344827" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text direction="inherit" dx="0" dy="4.97" x="35" y="122.41379310344827" id="chart-axis-1-tickLabels-2">
            <tspan x="35" dx="0" textAnchor="end" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>15</tspan>
          </text>
        </g>
        <g>
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="400" y1="96.55172413793102" y2="96.55172413793102" style={{ stroke: 'rgb(210, 210, 210)', fill: 'none', pointerEvents: 'painted', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
          {/* @ts-ignore */}
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="45" y1="96.55172413793102" y2="96.55172413793102" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text direction="inherit" dx="0" dy="4.97" x="35" y="96.55172413793102" id="chart-axis-1-tickLabels-3">
            <tspan x="35" dx="0" textAnchor="end" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>20</tspan>
          </text>
        </g>
        <g>
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="400" y1="70.68965517241381" y2="70.68965517241381" style={{ stroke: 'rgb(210, 210, 210)', fill: 'none', pointerEvents: 'painted', strokeLinecap: 'round', strokeLinejoin: 'round' }}></line>
          {/* @ts-ignore */}
          <line vectorEffect="non-scaling-stroke" shapeRendering="auto" x1="50" x2="45" y1="70.68965517241381" y2="70.68965517241381" style={{ stroke: 'rgb(210, 210, 210)', fill: 'transparent', size: '5px', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1' }}></line>
          <text direction="inherit" dx="0" dy="4.97" x="35" y="70.68965517241381" id="chart-axis-1-tickLabels-4">
            <tspan x="35" dx="0" textAnchor="end" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(79, 82, 85)' }}>25</tspan>
          </text>
        </g>
      </g>
      {/* the actual chart data */}
      <g id="chart-data">
        <g
          id="mice-group"
          aria-label="Mice"
          >
          <path aria-label="3" aria-describedby="mice-group datapoint-2015" role="presentation" tabIndex={0} d="M 74.3731652564324, 163.79310344827584 A 0 0 0 0 1, 74.3731652564324, 163.79310344827584 L 74.3731652564324, 148.27586206896552 A 0 0 0 0 1, 74.3731652564324, 148.27586206896552 L 84.3731652564324, 148.27586206896552 A 0 0 0 0 1, 84.3731652564324, 148.27586206896552 L 84.3731652564324, 163.79310344827584 A 0 0 0 0 1, 84.3731652564324, 163.79310344827584 z" shapeRendering="auto" style={{ fill: 'rgb(81, 157, 233)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="3" aria-describedby="mice-group datapoint-2016" role="presentation" tabIndex={0} d="M 173.08956426639037, 163.79310344827584 A 0 0 0 0 1, 173.08956426639037, 163.79310344827584 L 173.08956426639037, 148.27586206896552 A 0 0 0 0 1, 173.08956426639037, 148.27586206896552 L 183.08956426639037, 148.27586206896552 A 0 0 0 0 1, 183.08956426639037, 148.27586206896552 L 183.08956426639037, 163.79310344827584 A 0 0 0 0 1, 183.08956426639037, 163.79310344827584 z" shapeRendering="auto" style={{ fill: 'rgb(81, 157, 233)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="8" aria-describedby="mice-group datapoint-2017" role="presentation" tabIndex={0} d="M 271.8059632763484, 91.37931034482759 A 0 0 0 0 1, 271.8059632763484, 91.37931034482759 L 271.8059632763484, 50 A 0 0 0 0 1, 271.8059632763484, 50 L 281.8059632763484, 50 A 0 0 0 0 1, 281.8059632763484, 50 L 281.8059632763484, 91.37931034482759 A 0 0 0 0 1, 281.8059632763484, 91.37931034482759 z" shapeRendering="auto" style={{ fill: 'rgb(81, 157, 233)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="5" aria-describedby="mice-group datapoint-2018" role="presentation" tabIndex={0} d="M 370.52236228630636, 127.58620689655172 A 0 0 0 0 1, 370.52236228630636, 127.58620689655172 L 370.52236228630636, 101.72413793103449 A 0 0 0 0 1, 370.52236228630636, 101.72413793103449 L 380.52236228630636, 101.72413793103449 A 0 0 0 0 1, 380.52236228630636, 101.72413793103449 L 380.52236228630636, 127.58620689655172 A 0 0 0 0 1, 380.52236228630636, 127.58620689655172 z" shapeRendering="auto" style={{ fill: 'rgb(81, 157, 233)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
        </g>
        <g
          id="birds-group"
          aria-label="Birds">
          <path aria-label="4" aria-describedby="birds-group datapoint-2015" role="presentation" tabIndex={0} d="M 74.3731652564324, 184.48275862068968 A 0 0 0 0 1, 74.3731652564324, 184.48275862068968 L 74.3731652564324, 163.79310344827584 A 0 0 0 0 1, 74.3731652564324, 163.79310344827584 L 84.3731652564324, 163.79310344827584 A 0 0 0 0 1, 84.3731652564324, 163.79310344827584 L 84.3731652564324, 184.48275862068968 A 0 0 0 0 1, 84.3731652564324, 184.48275862068968 z" shapeRendering="auto" style={{ fill: 'rgb(0, 47, 93)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="4" aria-describedby="birds-group datapoint-2016" role="presentation" tabIndex={0} d="M 173.08956426639037, 184.48275862068968 A 0 0 0 0 1, 173.08956426639037, 184.48275862068968 L 173.08956426639037, 163.79310344827584 A 0 0 0 0 1, 173.08956426639037, 163.79310344827584 L 183.08956426639037, 163.79310344827584 A 0 0 0 0 1, 183.08956426639037, 163.79310344827584 L 183.08956426639037, 184.48275862068968 A 0 0 0 0 1, 183.08956426639037, 184.48275862068968 z" shapeRendering="auto" style={{ fill: 'rgb(0, 47, 93)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="9" aria-describedby="birds-group datapoint-2017" role="presentation" tabIndex={0} d="M 271.8059632763484, 137.93103448275863 A 0 0 0 0 1, 271.8059632763484, 137.93103448275863 L 271.8059632763484, 91.37931034482759 A 0 0 0 0 1, 271.8059632763484, 91.37931034482759 L 281.8059632763484, 91.37931034482759 A 0 0 0 0 1, 281.8059632763484, 91.37931034482759 L 281.8059632763484, 137.93103448275863 A 0 0 0 0 1, 281.8059632763484, 137.93103448275863 z" shapeRendering="auto" style={{ fill: 'rgb(0, 47, 93)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="7" aria-describedby="birds-group datapoint-2018" role="presentation" tabIndex={0} d="M 370.52236228630636, 163.79310344827584 A 0 0 0 0 1, 370.52236228630636, 163.79310344827584 L 370.52236228630636, 127.58620689655172 A 0 0 0 0 1, 370.52236228630636, 127.58620689655172 L 380.52236228630636, 127.58620689655172 A 0 0 0 0 1, 380.52236228630636, 127.58620689655172 L 380.52236228630636, 163.79310344827584 A 0 0 0 0 1, 380.52236228630636, 163.79310344827584 z" shapeRendering="auto" style={{ fill: 'rgb(0, 47, 93)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
        </g>
        <g
          id="dogs-group"
          aria-label="Dogs">
          <path aria-label="2" aria-describedby="dogs-group datapoint-2015" role="presentation" tabIndex={0} d="M 74.3731652564324, 194.82758620689654 A 0 0 0 0 1, 74.3731652564324, 194.82758620689654 L 74.3731652564324, 184.48275862068968 A 0 0 0 0 1, 74.3731652564324, 184.48275862068968 L 84.3731652564324, 184.48275862068968 A 0 0 0 0 1, 84.3731652564324, 184.48275862068968 L 84.3731652564324, 194.82758620689654 A 0 0 0 0 1, 84.3731652564324, 194.82758620689654 z" shapeRendering="auto" style={{ fill: 'rgb(139, 193, 247)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="1" aria-describedby="dogs-group datapoint-2016" role="presentation" tabIndex={0} d="M 173.08956426639037, 189.65517241379308 A 0 0 0 0 1, 173.08956426639037, 189.65517241379308 L 173.08956426639037, 184.48275862068968 A 0 0 0 0 1, 173.08956426639037, 184.48275862068968 L 183.08956426639037, 184.48275862068968 A 0 0 0 0 1, 183.08956426639037, 184.48275862068968 L 183.08956426639037, 189.65517241379308 A 0 0 0 0 1, 183.08956426639037, 189.65517241379308 z" shapeRendering="auto" style={{ fill: 'rgb(139, 193, 247)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="7" aria-describedby="dogs-group datapoint-2017" role="presentation" tabIndex={0} d="M 271.8059632763484, 174.13793103448276 A 0 0 0 0 1, 271.8059632763484, 174.13793103448276 L 271.8059632763484, 137.93103448275863 A 0 0 0 0 1, 271.8059632763484, 137.93103448275863 L 281.8059632763484, 137.93103448275863 A 0 0 0 0 1, 281.8059632763484, 137.93103448275863 L 281.8059632763484, 174.13793103448276 A 0 0 0 0 1, 281.8059632763484, 174.13793103448276 z" shapeRendering="auto" style={{ fill: 'rgb(139, 193, 247)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="4" aria-describedby="dogs-group datapoint-2018" role="presentation" tabIndex={0} d="M 370.52236228630636, 184.48275862068968 A 0 0 0 0 1, 370.52236228630636, 184.48275862068968 L 370.52236228630636, 163.79310344827584 A 0 0 0 0 1, 370.52236228630636, 163.79310344827584 L 380.52236228630636, 163.79310344827584 A 0 0 0 0 1, 380.52236228630636, 163.79310344827584 L 380.52236228630636, 184.48275862068968 A 0 0 0 0 1, 380.52236228630636, 184.48275862068968 z" shapeRendering="auto" style={{ fill: 'rgb(139, 193, 247)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
        </g>
        <g
          id="cats-group"
          aria-label="Cats">
          <path aria-label="1" aria-describedby="cats-group datapoint-2015" role="presentation" tabIndex={0} d="M 74.3731652564324, 200 A 0 0 0 0 1, 74.3731652564324, 200 L 74.3731652564324, 194.82758620689654 A 0 0 0 0 1, 74.3731652564324, 194.82758620689654 L 84.3731652564324, 194.82758620689654 A 0 0 0 0 1, 84.3731652564324, 194.82758620689654 L 84.3731652564324, 200 A 0 0 0 0 1, 84.3731652564324, 200 z" shapeRendering="auto" style={{ fill: 'rgb(0, 102, 204)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="2" aria-describedby="cats-group datapoint-2016" role="presentation" tabIndex={0} d="M 173.08956426639037, 200 A 0 0 0 0 1, 173.08956426639037, 200 L 173.08956426639037, 189.65517241379308 A 0 0 0 0 1, 173.08956426639037, 189.65517241379308 L 183.08956426639037, 189.65517241379308 A 0 0 0 0 1, 183.08956426639037, 189.65517241379308 L 183.08956426639037, 200 A 0 0 0 0 1, 183.08956426639037, 200 z" shapeRendering="auto" style={{ fill: 'rgb(0, 102, 204)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="5" aria-describedby="cats-group datapoint-2017" role="presentation" tabIndex={0} d="M 271.8059632763484, 200 A 0 0 0 0 1, 271.8059632763484, 200 L 271.8059632763484, 174.13793103448276 A 0 0 0 0 1, 271.8059632763484, 174.13793103448276 L 281.8059632763484, 174.13793103448276 A 0 0 0 0 1, 281.8059632763484, 174.13793103448276 L 281.8059632763484, 200 A 0 0 0 0 1, 281.8059632763484, 200 z" shapeRendering="auto" style={{ fill: 'rgb(0, 102, 204)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
          <path aria-label="3" aria-describedby="cats-group datapoint-2018" role="presentation" tabIndex={0} d="M 370.52236228630636, 200 A 0 0 0 0 1, 370.52236228630636, 200 L 370.52236228630636, 184.48275862068968 A 0 0 0 0 1, 370.52236228630636, 184.48275862068968 L 380.52236228630636, 184.48275862068968 A 0 0 0 0 1, 380.52236228630636, 184.48275862068968 L 380.52236228630636, 200 A 0 0 0 0 1, 380.52236228630636, 200 z" shapeRendering="auto" style={{ fill: 'rgb(0, 102, 204)', stroke: 'none', strokeWidth: '1', padding: '8px' }}></path>
        </g>
      </g>
      {/* the chart legend */}
      <g id="chart-legend">
        <rect vectorEffect="non-scaling-stroke" shapeRendering="auto" x="416" y="65.19" width="79.96908881199539" height="123.61999999999999" style={{ fill: 'none' }}></rect>
        <path d="M 425.128, 84.062 h9.744000000000028 v-9.744000000000028 h-9.744000000000028 z" shapeRendering="auto" style={{ fill: 'rgb(0, 102, 204)' }}></path>
        <path d="M 425.128, 114.967 h9.744000000000028 v-9.744000000000028 h-9.744000000000028 z" shapeRendering="auto" style={{ fill: 'rgb(139, 193, 247)' }}></path>
        <path d="M 425.128, 145.872 h9.744000000000028 v-9.744000000000028 h-9.744000000000028 z" shapeRendering="auto" style={{ fill: 'rgb(0, 47, 93)' }}></path>
        <path d="M 425.128, 176.777 h9.744000000000028 v-9.744000000000028 h-9.744000000000028 z" shapeRendering="auto" style={{ fill: 'rgb(81, 157, 233)' }}></path>
        <text direction="inherit" dx="0" dy="4.97" x="446.8" y="79.19" id="chart-legend-3-labels-0">
          <tspan x="446.8" dx="0" textAnchor="start" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(37, 37, 37)' }}>Cats</tspan>
        </text>
        <text direction="inherit" dx="0" dy="4.97" x="446.8" y="110.095" id="chart-legend-3-labels-1">
          <tspan x="446.8" dx="0" textAnchor="start" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(37, 37, 37)' }}>Dogs</tspan>
        </text>
        <text direction="inherit" dx="0" dy="4.97" x="446.8" y="141" id="chart-legend-3-labels-2">
          <tspan x="446.8" dx="0" textAnchor="start" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(37, 37, 37)' }}>Birds</tspan>
        </text>
        <text direction="inherit" dx="0" dy="4.97" x="446.8" y="171.90499999999997" id="chart-legend-3-labels-3">
          <tspan x="446.8" dx="0" textAnchor="start" style={{ fontFamily: 'var(--pf-chart-global--FontFamily)', fontSize: '14px', letterSpacing: 'var(--pf-chart-global--letter-spacing)', padding: '10px', stroke: 'transparent', fill: 'rgb(37, 37, 37)' }}>Mice</tspan>
        </text>
      </g>
    </svg>
  </PageSection>
)

export { AccessibleStackChart };


