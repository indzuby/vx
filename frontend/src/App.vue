<template>
  <div id="app">
    <router-view/>
      <div id="copyright" class="col-12 pl-0">
        Copyright© 2018 Samsung All rights reserved. | For questions, please <a href="#">click here</a>
      </div>
  </div>
</template>

<script>
import '@/assets/app.scss'

export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
