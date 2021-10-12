//I was having an ish setting up tailwindcss>I had named it craco.js rather than craco.config.js 
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
