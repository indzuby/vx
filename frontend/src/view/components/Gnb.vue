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
                    <a href="/icons"><li class="tab" id="icons">ICONS
                        <ul class="tab-sub icons-sub">
                            <a href="/icons#common"><li id="common">Common</li></a>
                            <span></span>
                            <a href="/icons#im"><li id="im">IM</li></a>
                            <span></span>
                            <a href="/icons#da"><li id="da">DA</li></a>
                            <span></span>
                            <a href="/icons#vd"><li id="vd">VD</li></a>
                        </ul>
                    </li></a>
                    <a href="/fonts"><li class="tab" id="fonts">FONTS
                        <ul class="tab-sub fonts-sub">
                            <a href="/fonts#latin_related"><li id="latin_related">Latin Related </li></a>
                            <span></span>
                            <a href="/fonts#middle_east_asian"><li id="middle_east_asian">Middle East Asian</li></a>
                            <span></span>
                            <a href="/fonts#north_east_asian"><li id="north_east_asian">North East Asian</li></a>
                            <span></span>
                            <a href="/fonts#south_east_asian"><li id="south_east_asian">South East Asian</li></a>
                            <span></span>
                            <a href="/fonts#south_west_asian"><li id="south_west_asian">South West Asian</li></a>
                            <span></span>
                            <a href="/fonts#african"><li id="african">African</li></a>
                        </ul>
                    </li></a>
                    <a href="/gui"><li class="tab" id="gui">GUI
                        <ul class="tab-sub gui-sub">
                            <li>Light Theme</li>
                            <span></span>
                            <li>Dark Theme</li>
                            <span></span>
                            <li>Component Grid System</li>
                            <span></span>
                            <li>Controller</li>
                        </ul>
                    </li></a>
                    <a href="/motion"><li class="tab" id="motion">MOTION
                        <ul class="tab-sub motion-sub">
                            <li>About Flow</li>
                            <span></span>
                            <li>Motion Principles</li>
                            <span></span>
                            <li>Motion Elements</li>
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
     ,mounted: function(){
         console.log(this.$route);
        $("#icons").addClass("active");
         $(".active").removeClass("active");
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
     ,methods:{
         hoverEvent : function(tab){
             this.hover = tab;
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
    ul.tab-sub{
        display: none;
        position: absolute;
        top : 38px;
    }
    ul.tab-sub li{
        font-size: 12px; 
    }
    ul.nav-tab li:hover, ul.nav-tab li.active{
        color : #101010;
    }
    ul.nav-tab li:hover ul.tab-sub, ul.nav-tab li.active ul.tab-sub{
        display: inline;
    }
    ul.tab-sub li {
        padding-top : 2px;
        padding-bottom: 2px;
        padding-right: 11px;
        padding-left: 11px;
    }
    ul.tab-sub span{
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
 