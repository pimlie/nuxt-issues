export default {
  hooks: {
    build: {
      before() {
        console.log('waiting 35s')
        return new Promise(resolve => setTimeout(() => {
          console.log('finished waiting')
          resolve()
        }, 35000))
      }
    }
  }
}