<template>
    <div>
        <Gnb />

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
                <b-dropdown class="download" no-caret variant="white" ref="labels_drop">
                    <template slot="button-content">
                        <span class="text" >DOWNLOADS</span>
                    </template>
                    <div class="btn-white">
                        <p class="title">All Languages</p>
                        <p class="content">FULL PACKAGE_DEVICE.ZIP</p>
                    </div>
                    <div class="btn-white">
                        <p class="title">All Languages</p>
                        <p class="content">FULL PACKAGE_MARCOMM.ZIP</p>
                    </div>
                </b-dropdown>
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
    ,mounted:function(){
        this.navChange('common');
    }
    ,methods :{
        moveCategory(category){
            this.navChange(category);
        }
        ,moveSubCategory(sub){
            this.subNavChange(sub);
        }
        ,navChange(category){
            $(".side-nav .category.active").removeClass("active");
            $(".side-nav .category#"+category).addClass("active");
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");

        }
    }
}
</script>

<style scoped>
    .side-container{
        display: inline-block;
        vertical-align: top;
    }
    .content-container{
        display: inline-block;
        width: calc(100% - 250px);
        height: 800px;;
        position: relative;
    }
    .serach-container {
        width : calc(100% - 250px);
    }
</style>

