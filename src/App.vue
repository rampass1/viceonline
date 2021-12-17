<template>
  <div id="app">
    <Header-c/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderC from './components/HeaderC.vue'
export default {
  name: 'App',
  components: {
    HeaderC
  }
}
</script>


