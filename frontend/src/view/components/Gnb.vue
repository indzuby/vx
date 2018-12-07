 <template>
    <div class="gnb-container">
        <p v-if="isAdmin" class="admin-tab">관리자 모드로 실행중입니다.</p>
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
                            <a class="sub-tab" href="/icons#common"><li class="sub-tab" id="common">Common</li><span></span></a>
                            <a class="sub-tab" href="/icons#im"><li class="sub-tab" id="im">IM</li><span></span></a>
                            <a class="sub-tab" href="/icons#da"><li class="sub-tab" id="da">DA</li><span></span></a>
                            <a class="sub-tab" href="/icons#vd"><li class="sub-tab" id="vd">VD</li><span></span></a>
                        </ul>
                    </li></a>
                    <a href="/fonts#latin_related"><li class="tab" id="fonts">FONTS
                        <ul class="sub-nav fonts-sub">
                            <a class="sub-tab" href="/fonts#latin_related"><li class="sub-tab" id="latin_related">Latin Related</li><span></span></a>
                            <a class="sub-tab" href="/fonts#middle_east_asian"><li class="sub-tab" id="middle_east_asian">Middle East Asian</li><span></span></a>
                            <a class="sub-tab" href="/fonts#north_east_asian"><li class="sub-tab" id="north_east_asian">North East Asian</li><span></span></a>
                            <a class="sub-tab" href="/fonts#south_east_asian"><li class="sub-tab" id="south_east_asian">South East Asian</li><span></span></a>
                            <a class="sub-tab" href="/fonts#south_west_asian"><li class="sub-tab" id="south_west_asian">South West Asian</li><span></span></a>
                            <a class="sub-tab" href="/fonts#african"><li class="sub-tab" id="african">African</li><span></span></a>
                        </ul>
                    </li></a>
                    <a href="/gui#about"><li class="tab" id="gui">GUI
                        <ul class="sub-nav gui-sub">
                            <a class="sub-tab" href="/gui#light_theme"><li class="sub-tab" id="light_theme">Light Theme</li><span></span></a>
                            <a class="sub-tab" href="/gui#dark_theme"><li class="sub-tab" id="dark_theme">Dark Theme</li><span></span></a>
                            <a class="sub-tab" href="/gui#component_grid_system"><li class="sub-tab" id="component_grid_system">Component Grid System</li><span></span></a>
                            <a class="sub-tab" href="/gui#controller"><li class="sub-tab" id="controller">Controller</li><span></span></a>
                        </ul>
                    </li></a>
                    <a href="/motion#about_flow"><li class="tab" id="motion">MOTION
                        <ul class="sub-nav motion-sub">
                            <a class="sub-tab" href="/motion#about_flow"><li class="sub-tab" id="about_flow">About Flow</li><span></span></a>
                            <a class="sub-tab" href="/motion#motion_direction"><li class="sub-tab" id="motion_direction">Motion Direction</li><span></span></a>
                        </ul>
                    </li></a>
                </ul>
            </div>
            <b-dropdown class="profile" no-caret variant="link" right>
                <template slot="button-content">
                    <img src="/static/images/profile.png" height="48px" width="auto">
                </template>
                <div class="profile-drop">
                    <a href="/changePassword"><p>Change Password</p></a>
                    <a href="/changePermission"><p v-if="isAdmin">관리자 권한 부여</p></a>
                    <p @click="logout">Logout</p>
                </div>
            </b-dropdown>
            
        </header> <!-- Header -->
    </div>
 </template>
 
 <script>
 export default {
     data(){
        return {
        }
     }
     ,computed:{
         isAdmin(){
             return this.$session.get("admin");
         }
     }
     ,created: function(){
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
                case "MultiUpload":
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
         },logout(){
             this.$session.destroy();
             alert("Logout successful");
             location.href="/Login";
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
        width: calc(100% - 300px);
    }
    ul.nav-tab{
        margin: 0px;
        margin-top : 18px;
        width: 100%;
        text-align: right;
    }
    ul.nav-tab li{
        display: inline;
        list-style: none;
        font-weight: 600;
        color : #949494;
    }
    ul.nav-tab li.tab{
        font-size: 18px;
        padding-right: 34px;
    }
    ul.sub-nav{
        display: none;
        position: absolute;
        top : 38px;
        padding-top: 10px;
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
    ul.sub-nav a:not(:last-child) span{
        display: inline-block;
        border-right : 1px #949494 solid;
        width: 1px;
        height: 8px;
    }
    ul.icons-sub{
        position: absolute;
        right : 29%;
    }
    ul.motion-sub, ul.gui-sub, ul.fonts-sub{
        position: absolute;
        right: 24px;
    }
    .admin-tab{
        width: 100%;
        height: 32px;
        text-align: center;
        font-weight: 500;
        background: rgba(0,0,0,0.7);
        color : white;
        line-height: 32px;
    }
    .profile-drop{
        border-radius: 4px;
        border: 1px solid #ccc;
        line-height: 48px;
        background: white;
    }
    .profile-drop p:not(:last-child){
        border-bottom: 1px solid #ccc;
    }
    a{
        color : black;
    }
 </style>
 