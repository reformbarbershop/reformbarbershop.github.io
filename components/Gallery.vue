<template>
  <section class="gallery">
    <div class="container">
      <div class="row">
        <div class="item">
          <div :style="{backgroundImage: 'url(' + require('~/assets/images/gallery-image2.jpg') + ')'}" class="image" data-aos="fade-right" data-aos-delay="100" />
          <div :style="{backgroundImage: 'url(' + require('~/assets/images/gallery-image1.jpg') + ')'}" class="image" data-aos="fade-left" data-aos-delay="200" />
        </div>
        <div class="item">
          <div :style="{backgroundImage: 'url(' + require('~/assets/images/gallery-image5.jpg') + ')'}" class="image" data-aos="fade-right" data-aos-delay="300" />
          <div :style="{backgroundImage: 'url(' + require('~/assets/images/gallery-image3.jpg') + ')'}" class="image" data-aos="fade-left" data-aos-delay="400" />
        </div>
      </div>
    </div>
  </section>
</template>
