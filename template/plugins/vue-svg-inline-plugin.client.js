import Vue from 'vue'

// plugin svgrender
// import Vue plugin
import VueSvgInlinePlugin from 'vue-svg-inline-plugin'

// import polyfills for IE if you want to support it
import 'vue-svg-inline-plugin/src/polyfills'
// // use Vue plugin without options
Vue.use(VueSvgInlinePlugin)

// use Vue plugin with options
// VueSvgInlinePlugin.install(Vue, {
//   attributes: {
//     data: ['src'],
//     remove: ['alt'],
//   },
// })
