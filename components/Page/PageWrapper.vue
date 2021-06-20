<template>
  <div class="page-wrapper">
    <page-header :fixedHeader="headerState" :headerType="headerType" />

    <main>
      <slot />
    </main>

    <page-footer />
    <!--<custom-cursor />-->
  </div>
</template>

<script>
import AOS from 'aos'
import PageHeader from '@/components/Page/PageHeader'
import PageFooter from '@/components/Page/PageFooter'
// import CustomCursor from '@/components/Elements/CustomCursor'

export default {
  components: {
    PageHeader,
    PageFooter
    // CustomCursor
  },
  props: {
    headerState: {
      type: Boolean,
      default: false
    },
    headerType: {
      type: String,
      default: ''
    }
  },
  created () {
    setTimeout(function () {
      AOS.init({
        duration: 800
      })
    }, 3500)
  }
}
</script>
