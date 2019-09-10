module.exports = {
  'extends': 'airbnb-base',
  'rules': {
    'linebreak-style': 0,
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',  
    'no-restricted-globals': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
  }
}