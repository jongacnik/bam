var { framework, html } = require('./framework')
require('insert-css')(require('./design'))

var app = framework()

app.use(function (state, emitter) {
  emitter.on('*', function (messageName, data) {
    console.log('event', messageName, data)
  })
})

app.route('/', function (state, emit) {
  return html`
    <main class="ff-sans fs1-6">
      <h1>BAM</h1>
    </main>
  `
})

app.mount('body')
