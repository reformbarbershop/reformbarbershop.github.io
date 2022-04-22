<template>
  <page-wrapper :header-state="fixedHeader">
    <tiles />
    <embed-map />
    <social />
    <gallery />
    <gallery-2 />
  </page-wrapper>
</template>

<script>
import PageWrapper from '@/components/Page/PageWrapper'
import Tiles from '@/components/Tiles'
import EmbedMap from '@/components/EmbedMap'
import Social from '@/components/Social'
import Gallery from '@/components/Gallery'
import Gallery2 from '@/components/Gallery2'

export default {
  layout: 'default',
  components: {
    PageWrapper,
    Tiles,
    EmbedMap,
    Social,
    Gallery,
    Gallery2
  },
  data() {
    return {
      fixedHeader: true
    }
  },
  head() {
    return {
      title: this.title
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
