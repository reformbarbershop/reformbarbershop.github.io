import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  EmbedMap: () => import('../../components/EmbedMap.vue' /* webpackChunkName: "components/embed-map" */).then(c => wrapFunctional(c.default || c)),
  Gallery: () => import('../../components/Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  Social: () => import('../../components/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c)),
  Tiles: () => import('../../components/Tiles.vue' /* webpackChunkName: "components/tiles" */).then(c => wrapFunctional(c.default || c)),
  ElementsCustomCursor: () => import('../../components/Elements/CustomCursor.vue' /* webpackChunkName: "components/elements-custom-cursor" */).then(c => wrapFunctional(c.default || c)),
  PageFooter: () => import('../../components/Page/PageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => import('../../components/Page/PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c)),
  PageWrapper: () => import('../../components/Page/PageWrapper.vue' /* webpackChunkName: "components/page-wrapper" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
