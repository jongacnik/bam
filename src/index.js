var choo = require('choo')
var html = require('choo/html')
require('insert-css')(require('browserify-exec')('node src/design.js'))

var app = choo()

app.use(function (state, emitter) {
  emitter.on('*', function (messageName, data) {
    console.log('event', messageName, data)
  })
})

app.route('/', function (state, emit) {
  return html`
    <body class="ff-sans fs1-6">
      <h1>BAM</h1>
    </body>
  `
})

app.mount('body')
