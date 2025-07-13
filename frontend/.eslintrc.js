module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Treat unused variables as warnings, not errors
    'no-unused-vars': ['warn', { 
      'vars': 'all', 
      'args': 'after-used', 
      'ignoreRestSiblings': true,
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_'
    }]
  }
}; 