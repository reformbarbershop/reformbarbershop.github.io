<template>
  <section class="gallery">
    <div class="container">
      <a href="tel:+380983937923" class="cta_btn">Записатись</a>
      <CoolLightBox
        :items="items"
        :index="index"
        @close="index = null"
      />
      <div class="row">
        <div
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex"
          :data-aos-delay="(imageIndex + 1) + '00'"
          class="item"
          data-aos="fade-right"
        >
          <div :style="{backgroundImage: 'url(' + image + ')'}" class="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      items: [
        require('~/assets/images/gallery-image1.jpeg'),
        require('~/assets/images/gallery-image4.jpeg'),
        require('~/assets/images/gallery-image3.jpeg'),
        require('~/assets/images/gallery-image2.jpeg')
      ],
      index: null
    }
  }
}
</script>
