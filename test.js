#!/usr/bin/env node

const { resolve } = require('path')
const { Nuxt, Builder, Generator } = require('nuxt')

const options = {
  rootDir: resolve('.'),
}

const nuxt = new Nuxt(options)
const builder = new Builder(nuxt)
const generator = new Generator(nuxt, builder)

generator.initiate({ build: true, init: true }).then(() => {
  console.log('done') // prints but script doesnt exit
})
