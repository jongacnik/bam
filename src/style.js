var fs = require('fs')
var gr8 = require('gr8')

// include css libs
var ress = fs.readFileSync('node_modules/ress/ress.css', 'utf8')

// gr8 opts
var opts = {

}

// vars
var fonts = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
}

var colors = {
  black: '#000',
  white: '#fff'
}

var borderWeights = [1]
var borders = {}
borderWeights.forEach(border => {
  Object.keys(colors).forEach(key => {
    borders[border + '-' + key] = `${border}px solid ${colors[key]}`
  })
})

// add custom utils
opts.utils = []

opts.utils.push({
  prop: 'font-family',
  join: '-',
  vals: fonts
})

opts.utils.push({
  prop: { fc: 'color' },
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: { bgc: 'background-color' },
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ],
  vals: borders
})

// custom css
var custom = `
  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, h7 {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
  }

  button, input {
    outline: none;
  }

  ul, ol, li { 
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img, video {
    width: 100%;
    height: auto;
  }
`

var gr8css = gr8(opts)

module.exports = ress + gr8css + custom
