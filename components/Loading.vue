<template>
  <div :class="{hidden: !loading}" class="loader">
    <div id="logo-path" class="svg-image" />
  </div>
</template>

<script>
import Vivus from 'vivus'

export default {
  data: () => ({
    loading: false
  }),
  mounted() {
    new Vivus('logo-path', { duration: 150, file: require('~/assets/images/animated-logo.svg') })
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
