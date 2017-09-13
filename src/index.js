var choo = require('choo')
var log = require('choo-log')
var html = require('choo/html')
require('insert-css')(require('browserify-exec')('node src/style.js'))

var app = choo()
app.use(log())
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body class="ff-sans fs1-6">
      <h1>BAM</h1>
    </body>
  `
}
