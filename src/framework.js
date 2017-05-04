var byo = require('byo')
var preact = require('preact')
var hyperx = require('hyperx')

exports.framework = function () {
  return byo({
    mount: function (tree, root) {
      return preact.render(tree, root)
    },
    render: function (tree, newTree, root) {
      return preact.render(newTree, root, tree)
    }
  })
}

exports.h = preact.h

exports.html = hyperx(preact.h)

function Component () {}
Component.prototype = Object.create(preact.Component.prototype)
exports.component = Component
