var choo = require('choo')
var html = require('choo/html')
require('insert-css')(require('./design'))

var app = choo()

app.use(function (state, emitter) {
  emitter.on('*', function (messageName, data) {
    console.log('event', messageName, data)
  })
})

app.route('/', function (state, emit) {
  return html`
    <body class="fs1-6">
      <h1>Hello</h1>
    </body>
  `
})

app.mount('body')
