import Vue from 'vue'

Vue.component('my-component', {
  template: `<div><h2>Hello My Component</h2></div>`
  /*render: function(h) {
    return h('div', null, [
      h('h2', null, 'Hello My Component')
    ])
  }*/
})
