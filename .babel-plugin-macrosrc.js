module.exports = {
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
  },
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
};
