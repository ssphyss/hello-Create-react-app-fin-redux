const rewireSass = require('react-app-rewire-scss');
const { injectBabelPlugin } = require('react-app-rewired');

/* scss */
module.exports = function override(config, env) {
    config = rewireSass(config, env);

    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );
    return config;
}
