module.exports = function (state, emitter) {
  emitter.on('*', function (messageName, data) {
    console.log('event', messageName, data)
  })
}
