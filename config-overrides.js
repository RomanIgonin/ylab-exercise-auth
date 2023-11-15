const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': 'src/',
    '@img': 'src/assets/img/',
  })(config);

  return config;
};
