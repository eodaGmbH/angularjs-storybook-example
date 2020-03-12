import { forModule } from 'storybook-addon-angularjs';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const Default = forModule('hotReloadDemo.components').createElement(compile => {
  const label = text('Label', 'Click Me!');
  return compile`<element-button label="{{${label}}}"></element-button>`;
});
