module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
    },
    'extends': [
      'plugin:react/recommended',
      'google',
    ],
    'settings': {
      react: {
        version: 'detect',
      },
    },
    'env': {
      browser: true,
      node: true,
      es6: true,
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true,
      },
      'ecmaVersion': 12,
      'sourceType': 'module',
    },
    'plugins': [
      'react',
      '@typescript-eslint',
    ],
    'parserOptions': {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
    },
    'rules': {
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
      '@typescript-eslint/explicit-function-return-type': 'off',
      'max-len': [2, 120, 4, {'ignoreUrls': true}],
      'require-jsdoc': 0,
    },
    'overrides': [
      // Override some TypeScript rules just for .js files
      {
        files: ['*.js'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
      },
    ],
  };
  