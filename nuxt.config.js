import fs from 'fs'
import path from 'path'
import webpack from 'webpack'

function sleep(ms) {
  const date = new Date()
  let curDate = null

  do {
    curDate = new Date()
  } while ((curDate - date) < ms)
}

export default {
  /*plugins: [
    '@plugins/wait',
  ],*/
  hooks: {
    build: {
      before() {
        /*console.log('waiting 60s')
        return new Promise(resolve => setTimeout(() => {
          console.log('finished waiting')
          resolve()
        }, 60000))*/
      }
    }
  },
  build: {
    plugins: [
      /*new webpack.BannerPlugin({
        banner() {
          console.log('banner sleep ->')
          sleep(35000)
          console.log('<- banner sleep')
          return 'banner'
        }
      })*/
    ]
  }
}
