<template>
  <header :class="{ fixed: scrollPosition > 100, embed: headerType }" class="header">
    <div :style="{backgroundImage: 'url(' + require('~/assets/images/hero_background.jpeg') + ')'}" data-aos="fade-up" data-aos-delay="200" class="image" />
    <div class="container">
      <div class="header__logo" data-aos="fade-down" data-aos-delay="300">
        <nuxt-link to="/">
          <img :src="require('~/assets/images/logo.svg')" alt="">
        </nuxt-link>
      </div>
      <a href="javascript:;" class="scroll_down">
        <i class="icon-arrow" />
      </a>
    </div>
    <a href="tel:+380983937923" class="cta">
      <i class="icon-phone" />
      <span>Записатись</span>
    </a>
  </header>
</template>

<script>
export default {
  props: {
    headerType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      scrollPosition: false,
      menu_opened: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>
