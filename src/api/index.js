var api = process.env.NODE_ENV === 'development'
  ? ''
  : ''

function ajax (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.onload = function() {
    callback(xhr.responseText)
  }
  xhr.open('GET', url)
  xhr.send()
}

exports.getData = function (cb) {
  ajax(api, function (data) {
    cb(data)
  })
}
