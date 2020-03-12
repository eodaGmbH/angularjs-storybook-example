import { forModule } from 'storybook-addon-angularjs';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Date',
  decorators: [withKnobs],
};

export const Default = forModule('hotReloadDemo.components').createElement(compile => {
  const label = text('Label', 'Date:');
  return compile`<element-date label="{{${label}}}"></element-date>`;
});
