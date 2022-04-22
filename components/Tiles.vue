<template>
  <section id="contacts" class="tiles">
    <div class="container">
      <h2 data-aos="fade-up" data-aos-delay="200">
        Виберіть зручний спосіб для запису:
      </h2>
      <div class="row">
        <div class="col item" data-aos="zoom-in-up" data-aos-delay="200">
          <a @click.prevent="dialogVisible = true" href="#" title="Онлайн-запис">
            <div class="item__inner">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/uppercut-pomade1.png') + ')'}" class="image" />
              <i class="icon-booking" />
              <span>Онлайн</span>
            </div>
          </a>
        </div>
        <div class="col item" data-aos="zoom-in-up" data-aos-delay="300">
          <a href="tel:+380983937923" title="Зателефонувати">
            <div class="item__inner">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/uppercut-pomade2.png') + ')'}" class="image" />
              <i class="icon-phone" />
              <span>Телефон</span>
            </div>
          </a>
        </div>
        <div class="col item" data-aos="zoom-in-up" data-aos-delay="400">
          <a href="https://t.me/Reformbarbershop" target="_blank" rel="noopener" title="Записатись у Telegram">
            <div class="item__inner">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/uppercut-pomade3.png') + ')'}" class="image" />
              <i class="icon-telegram" />
              <span>Telegram</span>
            </div>
          </a>
        </div>
        <div class="col item" data-aos="zoom-in-up" data-aos-delay="500">
          <a href="viber://chat?number=%2B380983937923" target="_blank" rel="noopener" title="Записатись у Viber">
            <div class="item__inner">
              <div :style="{backgroundImage: 'url(' + require('~/assets/images/uppercut-pomade4.png') + ')'}" class="image" />
              <i class="icon-viber" />
              <span>Viber</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="35%"
      append-to-body
      top="5vh"
    >
      <section class="embed-yclients">
        <iframe src="https://n525057.yclients.com/company:496644" width="100%" height="600" />
      </section>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>
