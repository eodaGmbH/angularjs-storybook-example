module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-knobs/register'],
  async webpackFinal(config) {
    // Find the babel rule and extend it so that it can also transpile
    // typescript files
    const BabelRule = config.module.rules.find(rule => {
      return rule.test.toString() === '/\\.(mjs|jsx?)$/';
    });
    BabelRule.test = /\.(mjs|jsx?|tsx?)$/;
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
