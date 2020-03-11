module.exports = {
  stories: ['../stories/**/*.stories.js'],
  async webpackFinal(config) {
    const BabelRule = config.module.rules.find(rule => {
      if (rule.test.toString() === '/\\.(mjs|jsx?)$/') {
        return true;
      }
    });

    BabelRule.test = /\.(mjs|jsx?|tsx?)$/;

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
