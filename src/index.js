var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')

css('./style.js')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body class="ff-sans fs1-6">
      <h1>BAM</h1>
    </body>
  `
}
