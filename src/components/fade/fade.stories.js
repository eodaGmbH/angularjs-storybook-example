import { forModule } from 'storybook-addon-angularjs';

export default {
  title: 'Fade',
};

export const Default = forModule('hotReloadDemo.components').createElement(compile => {
  return compile`<fade></fade>`;
});
