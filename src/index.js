var app = require('choo')()

// plugins
app.use(require('./plugins/logger'))

// views
app.route('/', require('./views/home'))

// mount
app.mount('body')
