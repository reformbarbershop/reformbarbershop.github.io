<template>
  <section class="gallery">
    <div class="container">
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
        require('~/assets/images/gallery-image5.jpeg'),
        require('~/assets/images/gallery-image6.jpeg'),
        require('~/assets/images/gallery-image7.jpeg'),
        require('~/assets/images/gallery-image8.jpeg')
      ],
      index: null
    }
  }
}
</script>
