import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import FeaturedArticle from './components/FeaturedArticle.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(FeaturedArticle)
    })
  }
}
