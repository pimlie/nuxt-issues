
export default {
  
  buildModules: [
    'bootstrap-vue/nuxt',
  ],

  css: ['@/assets/sass/main.sass'],
  
  bootstrapVue: {
    bootstrapCSS: false, // or `css`
    bootstrapVueCSS: false, // or `bvCSS`
    componentPlugins: [
      'ButtonPlugin',
      'ImagePlugin',
      'LayoutPlugin',
      'NavbarPlugin',
    ],
    components: [],
    directives: ['VBVisible'],
  },   
}