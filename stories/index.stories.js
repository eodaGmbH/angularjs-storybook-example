import { forModule } from 'storybook-addon-angularjs';

export default {
  title: 'Demo',
};

export const Demo = forModule('hotReloadDemo.components').createElement(compile => {
  // const name = text('Name', 'Jane');
  // const someString = text('Some String', 'It works too!');

  // const foo = {
  //   bar: number('Value', 20, { range: true, min: 0, max: 30, step: 1 }),
  // };

  // const things = array('Things', ['a', 'b', 'c'], ',');

  // const onEvt = action('clicked');

  return compile`<element-button label="Click me"></element-button>`;
});
