<template>
  <section class="social">
    <div class="container">
      <div class="social__team" data-aos="fade-up" data-aos-delay="100">
        <h1>Наші барбери</h1>
        <div class="list">
          <div class="item" data-aos="fade-up" data-aos-delay="200">
            <div class="item__photo">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/team-photo1.jpeg') + ')'}" class="image" />
            </div>
            <div class="item__meta">
              <h4>Дмитро Стрільчук</h4>
              <a href="tel:+380983937923" class="cta_btn">Записатись</a>
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="300">
            <div class="item__photo">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/team-photo2.jpg') + ')'}" class="image" />
            </div>
            <div class="item__meta">
              <h4>Максим Левадній</h4>
              <a href="tel:+380983937923" class="cta_btn">Записатись</a>
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="400">
            <div class="item__photo">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/team-photo3.jpg') + ')'}" class="image" />
            </div>
            <div class="item__meta">
              <h4>Дмитро Билина</h4>
              <a href="tel:+380983937923" class="cta_btn">Записатись</a>
            </div>
          </div>
          <div class="item" data-aos="fade-up" data-aos-delay="400">
            <div class="item__photo">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/team-photo4.jpeg') + ')'}" class="image" />
            </div>
            <div class="item__meta">
              <h4>Дмитро Камінський</h4>
              <a href="tel:+380983937923" class="cta_btn">Записатись</a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <h2><a href="https://www.instagram.com/reform_barbershop/" target="_blank" rel="noopener">@reform_barbershop</a></h2>
      </div>
    </div>
  </section>
</template>
