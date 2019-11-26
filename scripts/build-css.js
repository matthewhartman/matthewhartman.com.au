const fs = require('fs')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postCssUrl = require('postcss-url')
const clean = require('postcss-clean')

fs.readFile('./src/index.css', (err, css) => {
  postcss([autoprefixer, postCssUrl({ url: 'inline' }), clean()])
  .process(css, { from: './src/index.css', to: './index.css' })
  .then(result => {
    fs.writeFile('./index.css', result.css, () => true)
    if (result.map) {
      fs.writeFile('./index.css.map', result.map, () => true)
    }
  })
})