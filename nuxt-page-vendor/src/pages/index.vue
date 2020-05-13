<template>
<b-container>
  <b-link to="/pageA">Page A</b-link>
  <b-link to="/pageB">Page B</b-link>
  <b-link to="/pageC">Page C</b-link>
  <b-link to="/pageD">Page D</b-link>
</b-container>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink
  }
}
</script>