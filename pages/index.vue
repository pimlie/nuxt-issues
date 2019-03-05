<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => setTimeout(resolve, 20000))
  }
}
</script>
