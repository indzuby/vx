<template>
    <div>
        <div class="main-container">
            <div class="side-container">
                <p class="side-title">FONTS</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li v-for="category in categories" :key="category._id" @click="moveCategory(category._id)" class="category" :id="category._id" :class="{active : hash =='#'+category._id}">{{category.name}}
                        <ul class="sub-nav">
                            <li v-for="font in category.fonts" :key="font._id" @click="moveSubCategory(font._id)" class="sub-category" id="font._id">{{font.name}}</li>
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
                        <a href="/static/assets/fonts.zip" download="fonts.zip">
                            <div class="btn-white">
                                <p class="title">All Languages</p>
                                <p class="content">FULL PACKAGE_DEVICE.ZIP</p>
                            </div>
                        </a>
                        <a href="/static/assets/fonts.zip" download="fonts.zip">
                            <div class="btn-white">
                                <p class="title">All Languages</p>
                                <p class="content">FULL PACKAGE_MARCOMM.ZIP</p>
                            </div>
                        </a>
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
            <div class="add-btn" v-b-modal="'add-modal'">
                <img src="/static/images/add.png">
            </div>
        </div>
        <b-modal id="add-modal" title="새로운 폰트를 추가합니다." hide-footer ref="addMoal">
            <div>
            <b-form @submit="addFontsubmit" @reset="onReset">
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Category"
                label-for="category">
                    <b-form-select v-model="addFont.category" size="sm" id="category">
                        <option :value="null" selected>Please select an category</option>
                        <option v-for="category in categories" :key="category._id" :value="category.name">{{category.name}}</option>
                    </b-form-select>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Font name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addFont.name" type="text" placeholder="Enter font name" size="sm"></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Device file"
                label-for="device_file">
                    <b-form-file id="device_file" v-model="addFont.device_file" size="sm" plain accept=".zip"></b-form-file>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Marcomm file"
                label-for="device_file">
                    <b-form-file id="device_file" v-model="addFont.marcomm_file" size="sm" plain accept=".zip"></b-form-file>
                  </b-form-group>
                <b-button type="submit" variant="primary">Add</b-button>
                <b-button type="reset" variant="danger">Cacnel</b-button>
            </b-form>
            </div>
        </b-modal>
    </div>
    
</template>

<script>
import '@/assets/common.css'
import Item from './item'
export default {
    components :{
        Item
    }
    ,data(){
        return {
            categories :[]
            ,list :[]
            ,keyword : ''
            ,addFont: {
                category : null
                ,device_file : null
                ,marcomm_file : null
                ,name : null
            }
        }
    }
    ,created:function(){
        let self = this;
        $(window).on('hashchange', function() {
            self.pageChange();
        });
        this.getCategory();
    }
    ,computed:{
        hash(){
            return location.hash;
        }
    }
    ,methods :{
        pageChange(){
            this.navChange(location.hash);
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
            $(".side-nav .category"+category).addClass("active");
            $("ul.fonts-sub li.active").removeClass("active");
            $("ul.fonts-sub li"+category).addClass("active");
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");

        }
        ,getCategory(){
            httpCall("/fonts","get",null,(res)=>{
                // console.log(res);
                this.categories = res.data;
                this.list = res.data;
            })
        },addFontsubmit(evt){
            alert(JSON.stringify(this.addFont));
        }
        , onReset (evt) {
            evt.preventDefault();
            /* Reset our form values */
            this.addFont = {
                category : null
                ,device_file : null
                ,marcomm_file : null
                ,name : null
            };
            this.$refs.addMoal.hide();
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

