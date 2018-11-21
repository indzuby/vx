<template>
    <div>
        <Gnb />

        <div class="main-container">
            <div class="side-container">
                <p class="side-title">FONTS</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li v-for="category in categories" :key="category._id" @click="moveCategory(category._id)" class="category" :id="category._id">{{category.name}}
                        <ul class="sub-nav">
                            <li  v-for="font in category.fonts" :key="font._id" @click="moveSubCategory(font._id)" class="sub-category" id="font._id">{{font.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
                <div class="serach-container">
                    <input type="text" class="serach" id="search-input" placeholder="SEARCH" v-model="keyword">
                    </div>
                    <b-dropdown class="download" no-caret variant="white" ref="labels_drop">
                        <template slot="button-content">
                            <span class="text" >DOWNLOADS ▾</span>
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
                <div class="font-container" style="margin-top: 115px;">
                    <div class="main-title" style="text-align:left;">Samsung One Font</div>
                    <div class="main-description" style="text-align:left; margin-top: 24px;">
                        SamsungOne is a family of scripts covering 26 writing systems, more 400 languages, <br>
                        and over 25,000 glyphs, creating a truly global typeface. <br>
                        Choose between Device & Marcomm (Print, Web, Video) fonts when downloading
                    </div>
                    <div v-for="category in list" :key="category._id" class="category-item" :id="category._id">
                        <p>{{category.name}}</p>
                        <div class="items">
                            <Item v-for="font in category.fonts" :key="font._id" :font="font"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Gnb from '@/view/components/Gnb'
import '@/assets/common.css'
import Item from './item'
export default {
    components :{
        Gnb
        ,Item
    }
    ,data(){
        return {
            categories :[]
            ,list :[]
            ,keyword : ''
        }
    }
    ,created:function(){
        let self = this;
        $(window).on('hashchange', function() {
            self.pageChange();
        });
        this.getCategory();
    }
    ,mounted:function(){
        this.pageChange();
    }
    ,methods :{
        pageChange(){
            if(location.hash.includes("latin_related"))
                this.navChange('latin_related');
            else if(location.hash.includes("middle_east_asian"))
                this.navChange('middle_east_asian');
            else if(location.hash.includes("north_east_asian"))
                this.navChange('north_east_asian');
            else if(location.hash.includes("south_east_asian"))
                this.navChange('south_east_asian');
            else if(location.hash.includes("south_west_asian"))
                this.navChange('south_west_asian');
            else if(location.hash.includes("african"))
                this.navChange('african');
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
            $("ul.fonts-sub li.active").removeClass("active");
            $("ul.fonts-sub li#"+category).addClass("active");
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");

        }
        ,getCategory(){
            httpCall("/fonts","get",null,(res)=>{
                this.categories = res.data;
                this.list = res.data;
            })
        }
    }
}
</script>

<style scoped>
.category-item{
    margin-top:48px;
}
.category-item p{
    font-size: 14px;
    color :rgba(0,0,0,0.8);
    font-weight: 600;
}
.category-item .items{
    margin-top: 18px;
}
.category-item .items img{
    cursor: pointer;
}
.category-item .items img:not(:first-child){
    margin-left: 68px;
}
</style>

