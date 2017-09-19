var choo = require('choo')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')

css('./style.js')

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
