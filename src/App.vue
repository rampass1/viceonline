<template>
  <div id="app">
    <Header-c/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import HeaderC from './components/HeaderC.vue'
import Footer from './components/FooterC.vue'
export default {
  name: 'App',
  components: {
    HeaderC,
    Footer
  }
}
</script>


