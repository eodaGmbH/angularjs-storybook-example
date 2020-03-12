import { forModule } from 'storybook-addon-angularjs';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Emoji',
  decorators: [withKnobs],
};

export const Default = forModule('hotReloadDemo.components').createElement(compile => {
  const emoji = text('Emoji', '🤗');
  return compile`<emoji emoji="{{${emoji}}}"></emoji>`;
});
