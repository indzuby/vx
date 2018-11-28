<template>
    <div>

        <div class="main-container">
            <div class="side-container">
                <p class="side-title">ICONS</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li @click="moveCategory('common')" class="active category" id="common">COMMON
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('convergence')" class="sub-category" id="convergence">Convergence</li>
                            <li @click="moveSubCategory('system')" class="sub-category" id="system">System</li>
                            <li @click="moveSubCategory('weather')" class="sub-category" id="weather">Weather</li>
                            <li @click="moveSubCategory('weather_color')" class="sub-category" id="weather_color">Weather Color</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('im')" class="category" id="im">IM
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('im_specific')" class="sub-category" id="im_specific">IM Specific</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('da')" class="category"  id="da">DA
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('da_specific')" class="sub-category" id="da_specific">DA Specific</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('vd')" class="category"  id="vd">VD
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('vd_specific')" class="sub-category" id="vd_specific">VD Specific</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
                <div class="serach-container">
                    <input type="text" class="serach" id="search-input" placeholder="SEARCH">
                </div>
                    <div class="btn-white download">
                        <p class="text">DOWNLOADS ▾</p>
                    </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import '@/assets/common.css'
export default {
    components :{
    }
    ,created:function(){
        let self = this;
        $(window).on('hashchange', function() {
            self.pageChange();
        });
    }
    ,mounted:function(){
        this.pageChange();
    }
    ,methods :{
        pageChange(){
            if(location.hash.includes("im"))
                this.navChange('im');
            else if(location.hash.includes("da"))
                this.navChange('da');
            else if(location.hash.includes("vd"))
                this.navChange('vd');
            else if(location.hash.includes("common"))
                this.navChange('common');
        }
        ,moveCategory(category){
            if($(event.target).hasClass("category")){
                $(".sub-nav .sub-category.active").removeClass("active");
            }
            location.hash = category;
        }
        ,moveSubCategory(sub){
            this.subNavChange(sub);
        }
        ,navChange(category){
            $(".side-nav .category.active").removeClass("active");
            $(".side-nav .category#"+category).addClass("active");
            $("ul.icons-sub li.active").removeClass("active");
            $("ul.icons-sub li#"+category).addClass("active");
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");
        }
    }
}
</script>

<style scoped>
</style>

