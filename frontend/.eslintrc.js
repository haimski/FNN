module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Completely disable unused variables warnings
    'no-unused-vars': 'off',
    // Disable unused imports warnings
    'react/jsx-no-undef': 'error',
    // Allow any unused variables
    '@typescript-eslint/no-unused-vars': 'off'
  }
}; 