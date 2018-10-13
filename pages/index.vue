<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  asyncData() {
    const stdenv = require('std-env')
    console.log(stdenv)
    return {
    }
  }
}
</script>
