<template>
    <div>
        <div class="main-container">
            <div class="side-container">
                <p class="side-title">FONTS</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li v-for="category in categories" v-if="category.fonts.length>0" :key="category._id" @click="moveCategory(category._id)" class="category" :id="category._id" :class="{active : hash =='#'+category._id}">{{category.name.toUpperCase()}}<img class="edit-category" src="/static/images/edit.png" v-b-modal="'add-category-modal'" @click="categoryModal(true,category)" v-if="isAdmin">
                        <ul class="sub-nav">
                            <li v-for="font in category.fonts" :key="font._id" @click="moveSubCategory(font._id)" class="sub-category" id="font._id">{{font.name}}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
                <div class="serach-container">
                    <input type="text" class="serach" id="search-input" placeholder="SEARCH" v-model="keyword" v-on:keyup="searchByKeyword">
                    </div>
                    <b-dropdown class="download" no-caret variant="white" ref="labels_drop">
                        <template slot="button-content">
                            <span class="text" >DOWNLOADS ▾</span>
                        </template>
                        <a :href="devicePackage" download="FULL_PACKAGE_DEVICE.zip">
                            <div class="btn-white">
                                <p class="title">All Languages</p>
                                <p class="content">FULL PACKAGE_DEVICE.ZIP</p>
                            </div>
                        </a>
                        <a :href="marcommPackage" download="FULL_PACKAGE_MARCOMM.zip">
                            <div class="btn-white">
                                <p class="title">All Languages</p>
                                <p class="content">FULL PACKAGE_MARCOMM.ZIP</p>
                            </div>
                        </a>
                        <div v-if="isAdmin" v-b-modal="'add-package-modal'" @>
                            <div class="btn-gray" @click="uploadPackage('DEVICE')">
                                <p class="title">All Languages</p>
                                <p class="content">UPLOAD DEVICE PACKAGE</p>
                            </div>
                            <div class="btn-gray" @click="uploadPackage('MARCOMM')" v-b-modal="'add-package-modal'">
                                <p class="title">All Languages</p>
                                <p class="content">UPLOAD MARCOMM PACKAGE</p>
                            </div>
                        </div>
                    </b-dropdown>
                <div class="font-container" style="margin-top: 115px;">
                    <div class="main-title" style="text-align:left;">Samsung One Font</div>
                    <div class="main-description" style="text-align:left; margin-top: 24px;">
                        SamsungOne is a family of scripts covering 26 writing systems, more 400 languages, <br>
                        and over 25,000 glyphs, creating a truly global typeface. <br>
                        Choose between Device & Marcomm (Print, Web, Video) fonts when downloading
                    </div>
                    <div v-for="category in categories" :key="category._id" class="category-item" :id="category._id">
                        <p v-if="category.fonts.length>0">{{category.name}}</p>
                        <div class="items">
                            <Item v-for="font in category.fonts" :key="font._id" :font="font" @editFont="editFont"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="add-btn" v-b-modal="'add-font-modal'" v-if="isAdmin" @click="editFont(false)">
                <img src="/static/images/add.png">
            </div>
        </div>
        <b-modal id="add-font-modal" :title="fontEdit" hide-footer ref="addFontModal">
            <div>
                <b-alert show variant="danger">형식에 맞는 파일을 입력해주세요.</b-alert>
            <b-form @reset="onReset" id="font-form" method="POST" enctype="multipart/form-data">
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Category"
                label-for="category">
                    <b-form-select v-model="addFont.category" size="sm" id="category">
                        <option :value="null" selected>Please select an category</option>
                        <option v-for="category in categories" :key="category._id" :value="category.name">{{category.name}}</option>
                        <option :value="'new'">새로운 카테고리를 추가합니다.</option>
                    </b-form-select>
                  </b-form-group>
                   <b-form-group horizontal
                   v-if="addFont.category == 'new'"
                :label-cols="3"
                label-size="sm"
                label="Category name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addFont.newCategory" type="text" placeholder="Enter New Category name" size="sm"></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Font name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addFont.name" type="text" placeholder="Enter font name" size="sm" name="name"></b-form-input>
                  </b-form-group>
                      <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Order"
                v-show="addFont.isEdit"
                label-for="font_order">
                    <b-form-input id="font_order" v-model="addFont.order" type="text" placeholder="Enter order number" size="sm" name="order"></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Thumbnail file"
                label-for="thumbnail">
                    <b-form-file id="thumbnail" v-model="addFont.thumbnail" size="sm" plain accept="image/*" name="thumbnail"></b-form-file>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Device file"
                label-for="downloadDevice">
                    <b-form-file id="downloadDevice" v-model="addFont.downloadDevice" size="sm" plain accept=".zip" name="downloadDevice"></b-form-file>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Marcomm file"
                label-for="downloadMarcomm">
                    <b-form-file id="downloadMarcomm" v-model="addFont.downloadMarcomm" size="sm" plain accept=".zip" name="downloadMarcomm"></b-form-file>
                  </b-form-group>
                <input v-model="addFont.font_id" type="hidden"  name="font_id">

                <b-button type="button" @click="addFontsubmit" variant="primary">Save</b-button>
                <b-button type="reset" variant="info">Cacnel</b-button>
                <b-button type="reset" variant="danger" class="pull-right" v-if="addFont.isEdit" @click="deleteFont">Remove</b-button>
            </b-form>
            </div>
        </b-modal>

        <b-modal id="add-category-modal" :title="categoryEdit" hide-footer ref="addCategoryModal">
            <div>
            <b-form @submit="addCategorySubmit" @reset="onReset">
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Category name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addCategory.name" type="text" placeholder="Enter Category name" size="sm"></b-form-input>
                  </b-form-group>
                      <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Order"
                v-if="addCategory.isEdit"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addCategory.order" type="text" placeholder="Enter order number" size="sm"></b-form-input>
                  </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
                <b-button type="reset" variant="info">Cacnel</b-button>
                <b-button type="reset" variant="danger" class="pull-right" v-if="addCategory.isEdit" @click="deleteCategory">Remove</b-button>
            </b-form>
            </div>
        </b-modal>

        
        <b-modal id="add-package-modal" :title="packageTitle" hide-footer ref="addPackageModal">
            <div>
            <b-form @reset="onReset" method="POST" enctype="multipart/form-data" id="font-package-form"> 
                <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Package file"
                label-for="downloadDevice">
                    <b-form-file id="downloadDevice" v-model="addFont.downloadDevice" size="sm" plain accept=".zip" :name="packageName"></b-form-file>
                  </b-form-group>
                <b-button type="button" variant="primary" @click="uploadPackageSubmit">Save</b-button>
                <b-button type="reset" variant="info">Cacnel</b-button>
            </b-form>
            </div>
        </b-modal>
        <div class="right-floating">
            <img src="/static/images/anchor_small up.png" @click="floatingEvent('up')">
            <img src="/static/images/anchor_big.png" @click="floatingEvent('top')">
            <img src="/static/images/anchor_small down.png" @click="floatingEvent('down')">
        </div>
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
                ,thumbnail:null
                ,downloadDevice : null
                ,downloadMarcomm : null
                ,name : null
                ,isEdit : false
            }
            ,addCategory : {
                name : null
                ,isEdit : false
                ,order : null
            }
            ,devicePackage:null
            ,marcommPackage :null
            ,uploadPackageType : "DEVICE"
        }
    }
    ,created:function(){
        let self = this;
        $(window).on('hashchange', function() {
            self.pageChange();
        });
        this.getCategory();
        this.getPackage();
    }
    ,computed:{
        hash(){
            return location.hash;
        }
        ,isAdmin(){
            return this.$session.get("admin");
        }
        ,categoryEdit(){
            if(this.addCategory.isEdit)
                return "카테고리를 수정합니다.";
            else
                return "새로운 카테고리를 추가합니다.";
        }
        ,fontEdit(){
            if(this.addFont.isEdit)
                return "폰트를 수정합니다.";
            else
                return "새로운 폰트를 추가합니다.";
        }
        ,packageTitle(){
            if(this.uploadPackageType=="DEVICE")
                return "DEVICE PACKAGE를 업로드합니다.";
            else
                return "MARCOMM PACKAGE를 업로드합니다.";
        }
        ,packageName(){
            if(this.uploadPackageType=="DEVICE")
                return "packageDevice";
            else
                return "packageMarcomm";
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
            if($(".category-item"+category).position()!==undefined && $(".category-item"+category).position()!==null){
                $('html, body').animate({scrollTop: $(".category-item"+category).position().top+50}, 'fast');
            }
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");

        }
        ,getCategory(){
            httpCall("/fonts","get",null,(res)=>{
                this.categories = res.data;
            })
        }
        , onReset () {
            /* Reset our form values */
            this.addFont = {
                category : null
                ,thumbnail:null
                ,downloadDevice : null
                ,downloadMarcomm : null
                ,name : null
                ,isEdit : false
            };
            this.addCategory = {
                name : null
                ,isEdit : false
                ,order : null
            }
            this.$refs.addFontModal.hide();
            this.$refs.addCategoryModal.hide();
            this.$refs.addPackageModal.hide();
        }
        ,categoryModal(isEdit,category){
            this.addCategory.isEdit = isEdit;
            if(isEdit){
                this.addCategory.name = category.name;
                this.addCategory.category_id = category.category_id;
                this.addCategory.order = category.order;
            }else 
                this.onReset();
        }
        ,addCategorySubmit(){
            httpCall("/category/fonts","PATCH",this.addCategory,(data)=>{
                alert(data.msg);
                location.reload();
            });
        },deleteCategory(){
            httpCall("/category","DELETE",{"id":this.addCategory.category_id},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,editFont(isEdit,font){
            this.addFont.isEdit = isEdit;
            if(isEdit){
                this.addFont.category = font.category;
                this.addFont.name = font.name;
                this.addFont.font_id = font._id;
                this.addFont.order = font.order;
            }else 
                this.onReset();
        },addFontsubmit(){
            var self = this;
            if(this.addFont.category === 'new'){
                httpCall("/category/fonts","POST",{"name":this.addFont.newCategory},(data)=>{
                    self.addFont.category = self.addFont.newCategory;
                    self.addFontCall();
                });
            }else 
                this.addFontCall();
        }
        ,addFontCall(){
            console.log(1);
            httpFormData("/fonts","#font-form",{'category':this.addFont.category},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,deleteFont(){
            httpCall("/fonts","DELETE",{"id":this.addFont.font_id},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,uploadPackage(type){
            this.uploadPackageType = type;
        }
        ,uploadPackageSubmit(){
                
            httpFormData("/fonts/package","#font-package-form",{},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,getPackage(){
            httpCall('/fonts/package',"GET",null,(res)=>{
                this.devicePackage = res.data.device.url;
                this.marcommPackage = res.data.marcomm.url;
            });
        }
        ,searchByKeyword(){
            httpCall("/fonts","get",{"keyword":this.keyword},(res)=>{
                this.categories = res.data;
            })
        }
        ,floatingEvent(type){
            if(type === 'up'){

                $('html, body').animate({scrollTop: $(document).scrollTop()-450}, 'fast');
            }else if(type=='top') {
                $('html, body').animate({scrollTop: 0}, 'fast');
            }else if(type=='down'){
                $('html, body').animate({scrollTop: $(document).scrollTop()+450}, 'fast');
            }
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
.add-category{
    margin-top : 20px;
    width : 24px;
    cursor: pointer;
}
.edit-category{
    width : 16px;
    position: absolute;
    right : 48px;
}
.side-container{
    z-index: 990;
    position: absolute;
}
</style>

