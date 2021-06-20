<template>
  <page-wrapper :header-state="fixedHeader">
    <tiles />
    <embed-map />
    <social />
    <gallery />
  </page-wrapper>
</template>

<script>
import PageWrapper from '@/components/Page/PageWrapper'
import Tiles from '@/components/Tiles'
import EmbedMap from '@/components/EmbedMap'
import Social from '@/components/Social'
import Gallery from '@/components/Gallery'

export default {
  layout: 'default',
  components: {
    PageWrapper,
    Tiles,
    EmbedMap,
    Social,
    Gallery
  },
  data() {
    return {
      fixedHeader: true
    }
  },
  head() {
    return {
      title: 'REFORM'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3500)
    })
  }
}
</script>
