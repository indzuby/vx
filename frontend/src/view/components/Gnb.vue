 <template>
    <div class="gnb-container">
        <header class="gnb">
            <a href="/"><div id="main-title">
                <div>ONE SAMSUNG UX</div>
                <div>DESIGN LIBRARY</div>
            </div></a>
            <div class="nav">
                <ul class="nav-tab">
                    <li class="tab">ABOUT SAMSUNG UX</li>
                    <li class="tab">ICONS
                        <ul class="tab-sub icons-sub">
                            <li>Common</li>
                            <span></span>
                            <li>IM</li>
                            <span></span>
                            <li>DA</li>
                            <span></span>
                            <li>VD</li>
                        </ul>
                    </li>
                    <li class="tab">FONTS
                        <ul class="tab-sub fonts-sub">
                            <li>Latin Related </li>
                            <span></span>
                            <li>Middle East Asian</li>
                            <span></span>
                            <li>North East Asian</li>
                            <span></span>
                            <li>South East Asian</li>
                            <span></span>
                            <li>South West Asia</li>
                            <span></span>
                            <li>African</li>
                        </ul>
                    </li>
                    <li class="tab">GUI
                        <ul class="tab-sub gui-sub">
                            <li>Light Theme</li>
                            <span></span>
                            <li>Dark Theme</li>
                            <span></span>
                            <li>Component Grid System</li>
                            <span></span>
                            <li>Controller</li>
                        </ul>
                    </li>
                    <li class="tab">MOTION
                        <ul class="tab-sub motion-sub">
                            <li>About Flow</li>
                            <span></span>
                            <li>Motion Principles</li>
                            <span></span>
                            <li>Motion Elements</li>
                        </ul>
                    </li>
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
        height: 88px;
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
    ul.icons-sub, ul.gui-sub, ul.fonts-sub{
        top : 38px;
    }
    ul.motion-sub, ul.gui-sub, ul.fonts-sub{
        position: absolute;
        right: 24px;
    }
    
 </style>
 