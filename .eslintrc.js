/* eslint-disable no-undef */
module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'plugin:import/typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-underscore-dangle': 0,
    'implicit-arrow-linebreak': ["error", "beside"],
    'no-unused-vars': 'off',
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 0,
    'import/no-unresolved': 'error',
    'import/extensions': 0,
    'consistent-return': 0,
    'no-noninteractive-element-to-interactive-role': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 'off',
    'eqeqeq': 'off',
    'no-use-before-define': 'off',
    'camelcase': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 220,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
  },
};