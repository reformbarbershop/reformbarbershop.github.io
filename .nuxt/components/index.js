import { wrapFunctional } from './utils'

export { default as EmbedMap } from '../../components/EmbedMap.vue'
export { default as Gallery } from '../../components/Gallery.vue'
export { default as Loading } from '../../components/Loading.vue'
export { default as Social } from '../../components/Social.vue'
export { default as Tiles } from '../../components/Tiles.vue'
export { default as ElementsCustomCursor } from '../../components/Elements/CustomCursor.vue'
export { default as PageFooter } from '../../components/Page/PageFooter.vue'
export { default as PageHeader } from '../../components/Page/PageHeader.vue'
export { default as PageWrapper } from '../../components/Page/PageWrapper.vue'

export const LazyEmbedMap = import('../../components/EmbedMap.vue' /* webpackChunkName: "components/embed-map" */).then(c => wrapFunctional(c.default || c))
export const LazyGallery = import('../../components/Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazySocial = import('../../components/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const LazyTiles = import('../../components/Tiles.vue' /* webpackChunkName: "components/tiles" */).then(c => wrapFunctional(c.default || c))
export const LazyElementsCustomCursor = import('../../components/Elements/CustomCursor.vue' /* webpackChunkName: "components/elements-custom-cursor" */).then(c => wrapFunctional(c.default || c))
export const LazyPageFooter = import('../../components/Page/PageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyPageHeader = import('../../components/Page/PageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const LazyPageWrapper = import('../../components/Page/PageWrapper.vue' /* webpackChunkName: "components/page-wrapper" */).then(c => wrapFunctional(c.default || c))
