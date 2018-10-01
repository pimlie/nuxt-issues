<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  asyncData() {
    return {
      fn: () => {
        return true
      }
    }
  }
}
</script>
