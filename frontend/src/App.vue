<template>
  <div id="app">
    <router-view/>
      <div id="copyright" class="col-12 pl-0">
        Copyright© 2018 Samsung All rights reserved. | For questions, please <a href="#">click here</a>
      </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/app.scss'

export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 1110px;
  margin: auto;
  min-height: 100%;
  position: relative;
}
</style>
