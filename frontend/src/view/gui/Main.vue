<template>
    <div>
        <Gnb />
        <div class="main-container">
            <div class="content-container">
                <p class="side-title">GUI</p>
                <div class="side-divider"></div>
                <div class="btn-white download">
                    <p class="text">DOWNLOADS ▾</p>
                </div>
                <div class="about-gui">
                    <img class="gui-img" src="/static/images/gui_main.png">
                    <div class="gui-des">
                        <div class="gui-title">
                            GUI<br>
                            Components<br>
                            Design Kit
                        </div>
                        <span class="version">
                            Ver. 01
                        </span>
                        <div class="desc">
                            A set of design templates to help you to create<br>
                            your projects. This kit includes Light & Dark<br>
                            Keyscreens, GUI Components and Controllers.
                        </div>
                    </div>
                </div>
                <div class="gui-content" id="light_theme">
                    <span class="gui-content-title">LIGHT THEME</span>
                    <img src="/static/images/light theme.png">
                </div>
                <div class="gui-content" id="dark_theme">
                    <span class="gui-content-title">DARK THEME</span>
                    <img src="/static/images/dark theme.png">
                </div>
                <div class="gui-content" id="component_grid_system">
                    <span class="gui-content-title">COMPONENT GRID SYSTEM</span>
                    <img src="/static/images/component grid system.png">
                </div>
                <div class="gui-content" id="controller">
                    <span class="gui-content-title">CONTROLLER</span>
                    <img src="/static/images/controller.png">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Gnb from '@/view/components/Gnb'
import '@/assets/common.css'
export default {
    components :{
        Gnb
    }
    ,created:function(){
        let self = this;
        $(window).on('hashchange', function() {
            self.pageChange();
        });
        $(window).scroll(function(){
             if(window.scrollY < $(".gui-content#light_theme").position().top) {
                 self.navChange('t');
             }
            if(window.scrollY >= $(".gui-content#light_theme").position().top) {
                // location.hash="light_theme";
                self.navChange("light_theme");
            }
            if(window.scrollY >= $(".gui-content#dark_theme").position().top) {
                // location.hash="dark_theme";
                self.navChange("dark_theme");
            }
            if(window.scrollY >= $(".gui-content#component_grid_system").position().top) {
                // location.hash="component_grid_system";
                self.navChange("component_grid_system");
            }
            if(window.scrollY >= $(".gui-content#controller").position().top) {
                // location.hash="controller";
                self.navChange("controller");
            }
        })
    }
    ,methods:{
        pageChange(){
             if(location.hash.includes("light_theme"))
                this.scrollChange('light_theme');
            else if(location.hash.includes("dark_theme"))
                this.scrollChange('dark_theme');
            else if(location.hash.includes("component_grid_system"))
                this.scrollChange('component_grid_system');
            else if(location.hash.includes("controller"))
                this.scrollChange('controller');
            else 
                window.scrollTo(0,100);
        }
        ,scrollChange(category){
            var h = $(".gui-content#"+category).position().top;
            window.scrollTo(0,h+100);
        }
        ,navChange(category){
            $("ul.gui-sub li.active").removeClass("active");
            $("ul.gui-sub li#"+category).addClass("active");
        }
    }
}
</script>

<style scoped>
    .content-container{
        width: 100%;
        margin-left: 0px;
    }
    .gui-img{
        margin-left: 44px;
    }
    .gui-des{
        display: inline-block;
        font-weight: 200;
        margin-left: 78px;  
        vertical-align: top;
    }
    .gui-title{
        font-size: 67px;
        line-height: 1.2;
    }
    .version {
        margin-top: 22px;
        margin-bottom: 22px;
        display: inline-block;
        font-size: 16px;
        color : #696969;
    }
    .desc{
        color : black;
        font-size: 20px;
    }
    .gui-content{
        margin-top:100px;
    }
    .gui-content-title{
        font-size: 16px;
        font-weight: 500;  
        margin-bottom: 50px;
        display: block;
    }
</style>

