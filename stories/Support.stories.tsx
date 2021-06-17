import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Detail } from '@app/Support/Detail';

const stories = storiesOf('Components', module);
stories.addDecorator(withInfo);
stories.add(
  'Detail',
  () => <Detail />,
  { info: { inline: true } }
);
