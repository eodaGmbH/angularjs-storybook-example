import { forModule } from 'storybook-addon-angularjs';

export default {
  title: 'Counter',
};

export const Default = forModule('hotReloadDemo.components').createElement(compile => {
  return compile`<counter></counter>`;
});
