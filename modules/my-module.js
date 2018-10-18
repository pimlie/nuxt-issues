const { resolve } = require('path')

module.exports = function myModule() {
  this.addPlugin({
    src: resolve(__dirname, '..', 'plugins', 'my-component.js')
  })
}
