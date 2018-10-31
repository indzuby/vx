 <template>
    <div class="gnb-container">
        <header class="gnb">
            <a href="/"><div id="main-title">
                <div>ONE SAMSUNG UX</div>
                <div>DESIGN LIBRARY</div>
            </div></a>
            <div class="nav">
                <ul class="nav-tab">
                    <a href="/osux"><li class="tab" id="osux">ABOUT SAMSUNG UX</li></a>
                    <a href="/icons#common"><li class="tab" id="icons">ICONS
                        <ul class="sub-nav icons-sub">
                            <a class="sub-tab" href="/icons#common"><li class="sub-tab" id="common">Common</li></a>
                            <span></span>
                            <a class="sub-tab" href="/icons#im"><li class="sub-tab" id="im">IM</li></a>
                            <span></span>
                            <a class="sub-tab" href="/icons#da"><li class="sub-tab" id="da">DA</li></a>
                            <span></span>
                            <a class="sub-tab" href="/icons#vd"><li class="sub-tab" id="vd">VD</li></a>
                        </ul>
                    </li></a>
                    <a href="/fonts#latin_related"><li class="tab" id="fonts">FONTS
                        <ul class="sub-nav fonts-sub">
                            <a class="sub-tab" href="/fonts#latin_related"><li class="sub-tab" id="latin_related">Latin Related </li></a>
                            <span></span>
                            <a class="sub-tab" href="/fonts#middle_east_asian"><li class="sub-tab" id="middle_east_asian">Middle East Asian</li></a>
                            <span></span>
                            <a class="sub-tab" href="/fonts#north_east_asian"><li class="sub-tab" id="north_east_asian">North East Asian</li></a>
                            <span></span>
                            <a class="sub-tab" href="/fonts#south_east_asian"><li class="sub-tab" id="south_east_asian">South East Asian</li></a>
                            <span></span>
                            <a class="sub-tab" href="/fonts#south_west_asian"><li class="sub-tab" id="south_west_asian">South West Asian</li></a>
                            <span></span>
                            <a class="sub-tab" href="/fonts#african"><li class="sub-tab" id="african">African</li></a>
                        </ul>
                    </li></a>
                    <a href="/gui"><li class="tab" id="gui">GUI
                        <ul class="sub-nav gui-sub">
                            <a class="sub-tab" href="/gui#light_theme"><li class="sub-tab">Light Theme</li></a>
                            <span></span>
                            <a class="sub-tab" href="/gui#dark_theme"><li class="sub-tab">Dark Theme</li></a>
                            <span></span>
                            <a class="sub-tab" href="/gui#component_grid_system"><li class="sub-tab">Component Grid System</li></a>
                            <span></span>
                            <a class="sub-tab" href="/gui#controller"><li class="sub-tab">Controller</li></a>
                        </ul>
                    </li></a>
                    <a href="/motion"><li class="tab" id="motion">MOTION
                        <ul class="sub-nav motion-sub">
                            <a class="sub-tab" href="/motion#about_flow"><li class="sub-tab">About Flow</li></a>
                            <span></span>
                            <a class="sub-tab" href="/motion#motion_principles"><li class="sub-tab">Motion Principles</li></a>
                            <span></span>
                            <a class="sub-tab" href="/motion#motion_elements"><li class="sub-tab">Motion Elements</li></a>
                        </ul>
                    </li></a>
                </ul>
            </div>
            <div class="profile">
                <img src="/static/images/profile.png" height="48px" width="auto">
            </div>
            
        </header> <!-- Header -->
    </div>
 </template>
 
 <script>
 export default {
     data(){
        return {
            active : "about"
            ,hover : ""
        }
     }
     ,created:function(){
     }
     ,mounted: function(){
        let self = this;
        self.activeTab();
        $(".nav-tab li.tab").mouseover(function(event){
            if($(event.target).hasClass("tab") || $(event.target).hasClass("sub-tab") || $(event.target).hasClass("sub-nav")){
                $(".nav-tab li.tab.active").removeClass("active"); 
            }
        });
        $(".nav-tab li.tab").mouseout(function(event){
            self.activeTab();
        });
     }
     ,methods:{
         activeTab(){
            switch(this.$route.name){
                case "OSUX":
                    $("#osux").addClass("active");
                    break;
                case "Icons":
                    $("#icons").addClass("active");
                    break;
                case "Fonts":
                    $("#fonts").addClass("active");
                    break;
                case "GUI":
                    $("#gui").addClass("active");
                    break;
                case "Motion":
                    $("#motion").addClass("active");
                    break;
            }
         }
     }
 }
 </script>
 
 <style  scoped>
    .gnb-container{
        width: 100%;
        position: fixed;
        top: 0px;
        left : 0px;
        background: #f7f7f7;
        z-index: 999;
    }
    .gnb {
        padding-top : 38px;
        height: 130px;
        width: 1110px;
        margin: auto;
        position: relative;
    }
    #main-title{
        position: absolute;
        color :#212529;
        left: 0px;
        cursor: pointer;
    }
    .profile{
        position: absolute;
        right: 0px;
        cursor: pointer;
    }
    .nav {
        position: absolute;
        right: 60px;
        cursor: pointer;
    }
    ul.nav-tab{
        margin: 0px;
        margin-top : 10px;
    }
    ul.nav-tab li{
        display: inline;
        list-style: none;
        font-weight: 600;
        color : #949494;
    }
    ul.nav-tab li.tab{
        font-size: 24px;
        padding-right: 34px;
    }
    ul.sub-nav{
        display: none;
        position: absolute;
        top : 38px;
    }
    ul.sub-nav li{
        font-size: 12px; 
    }
    ul.nav-tab li:hover, ul.nav-tab li.active{
        color : #101010;
    }
    ul.nav-tab li:hover ul.sub-nav, ul.nav-tab li.active ul.sub-nav{
        display: inline;
    }
    ul.sub-nav li {
        padding-top : 2px;
        padding-bottom: 2px;
        padding-right: 11px;
        padding-left: 11px;
    }
    ul.sub-nav span{
        display: inline-block;
        border-right : 1px #949494 solid;
        width: 1px;
        height: 8px;
    }
    ul.icons-sub{
        position: absolute;
        left : 27%;
    }
    ul.motion-sub, ul.gui-sub, ul.fonts-sub{
        position: absolute;
        right: 24px;
    }
    
 </style>
 