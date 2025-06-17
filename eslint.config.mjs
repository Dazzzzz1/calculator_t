import globals from 'globals';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist/**', '**/*.bundle.js', 'node_modules/**'],
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettier.rules,
      'prettier/prettier': 'error',
    },
  },
];
