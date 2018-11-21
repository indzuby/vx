<template>
  <div id="app">
        <Gnb v-if="gnb"/>
    <router-view/>
      <div id="copyright">
        Copyright© 2018 Samsung All rights reserved. | For questions, please <a href="mailto:seohee17.kim@samsung.com">click here</a>
      </div>
  </div>
</template>

<script>
import Gnb from '@/view/components/Gnb'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/app.scss'

export default {
  name: 'App'
  
    ,components :{
        Gnb
    }
    ,data(){
      return {
        gnb : false
      }
    }
    ,created:function(){
      this.loginCheck();
      switch(this.$route.name){
            case "Login":
            case "Signup":
                this.gnb = false;
                break;
            default:
                this.gnb = true;
                break;
        }
    },mounted:function(){
      this.loginCheck();
    },updated:function(){ 
      this.loginCheck();
    }
    ,methods:{
        loginCheck(){
          if (this.$route.name !=="Login" && this.$route.name !=="Signup" && !this.$session.exists()) {
              location.href="/login";
          }
        }
    }
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
