<template>
    <div>

        <div class="main-container">
            <div class="side-container">
                <p class="side-title">ICONS</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li v-for="category in categories" :key="category._id" @click="moveCategory(category._id)" class="category" :id="category._id" :class="{active : hash =='#'+category._id}">{{category.name}}<img class="edit-category" src="/static/images/edit.png" v-b-modal="'add-category-modal'" @click="categoryModal(true,category)" v-if="isAdmin">
                        <ul class="sub-nav">
                            <li v-for="sub in category.categories" :key="sub._id" @click="moveSubCategory(sub._id)" class="sub-category" :id="sub._id">{{sub.name}}<img class="edit-category" src="/static/images/edit.png" v-b-modal="'add-subcategory-modal'" @click="subCategoryModal(true,sub,category.name)" v-if="isAdmin"></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
                <div class="serach-container">
                    <input type="text" class="serach" id="search-input" placeholder="SEARCH" v-model="keyword"  v-on:keyup="searchByKeyword">
                </div>
                    <a :href="iconPackage" download="ICONS.zip">
                        <div class="btn-white download">
                            <p class="text">DOWNLOADS ▾</p>
                        </div>
                    </a>
                    <div v-if="isAdmin" class="btn-gray uploadIcons" v-b-modal="'add-package-modal'">
                        <p class="text">UPLOAD ICON PACKAGE</p>
                    </div>
                <a href="/MultiUpload"><div class="add-btn" v-b-modal="'add-icon-modal'" v-if="isAdmin">
                    <img src="/static/images/add.png">
                </div></a>
                <div class="icon-container" style="margin-top: 163px;">
                    <div v-for="category in categories" :key="category._id" class="category-item" :id="category._id">
                        <div v-for="sub in category.categories" :key="sub._id" class="sub-category-item" :id="sub._id">
                            <p v-if="sub.icons.length>0">{{sub.name.toUpperCase()}}</p>
                            <div class="items">
                                <Item v-for="(icon,i) in sub.icons" :key="icon._id" :icon="icon" @editIcon="editIcon" :index="i"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal id="add-icon-modal" :title="iconEdit" hide-footer ref="addIconModal">
            <div>
                <b-alert show variant="danger">형식에 맞는 파일을 입력해주세요.</b-alert>
            <b-form @reset="onReset" id="icon-form" method="POST" enctype="multipart/form-data">
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Category"
                label-for="category">
                    <b-form-select v-model="addIcon.upperCategory" size="sm" id="category">
                        <option :value="null" selected>Please select an category</option>
                        <option v-for="category in categories" :key="category._id" :value="category.name">{{category.name}}</option>
                        <option :value="'new'">새로운 카테고리를 추가합니다.</option>
                    </b-form-select>
                  </b-form-group>
                   <b-form-group horizontal
                   v-if="addIcon.upperCategory == 'new'"
                :label-cols="3"
                label-size="sm"
                label="Category name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addIcon.newUpperCategory" type="text" placeholder="Enter New Category name" size="sm"></b-form-input>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Sub Category"
                label-for="category">
                    <b-form-select v-model="addIcon.category" size="sm" id="category">
                        <option :value="null" selected>Please select an category</option>
                        <option v-for="category in subCategories" :key="category._id" :value="category.name">{{category.name}}</option>
                        <option :value="'new'">새로운 서브 카테고리를 추가합니다.</option>
                    </b-form-select>
                  </b-form-group>
                   <b-form-group horizontal
                   v-if="addIcon.category == 'new'"
                :label-cols="3"
                label-size="sm"
                label="Category name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addIcon.newCategory" type="text" placeholder="Enter New Category name" size="sm"></b-form-input>
                  </b-form-group>
                  <hr>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Icon name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addIcon.name" type="text" placeholder="Enter Icon name" size="sm" name="name"></b-form-input>
                  </b-form-group>
                      <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Order"
                label-for="font_order">
                    <b-form-input id="font_order" v-model="addIcon.order" type="text" placeholder="Enter order number" size="sm" name="order"></b-form-input>
                  </b-form-group>
                 
                 
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="PNG file"
                label-for="downloadPng">
                    <b-form-file id="downloadPng" v-model="addIcon.downloadPng" size="sm" plain accept=".png" name="downloadPng"></b-form-file>
                  </b-form-group>
                  <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="SVG file"
                label-for="downloadSvg">
                    <b-form-file id="downloadSvg" v-model="addIcon.downloadSvg" size="sm" plain accept=".svg" name="downloadSvg"></b-form-file>
                  </b-form-group>
                <input v-model="addIcon.icon_id" type="hidden"  name="icon_id">

                

                <b-button type="button" @click="addIconSubmit" variant="primary">Save</b-button>
                <b-button type="reset" variant="info">Cacnel</b-button>
                <b-button type="reset" variant="danger" class="pull-right" @click="deleteIcon">Remove</b-button>
            </b-form>
            </div>
        </b-modal>
        
        
        <b-modal id="add-package-modal" :title="'ICON PACKAGE UPLOAD'" hide-footer ref="addPackageModal">
            <div>
            <b-form @reset="onReset" method="POST" enctype="multipart/form-data" id="icon-package-form"> 
                <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Package file"
                label-for="downloadPacakge">
                    <b-form-file id="downloadPacakge" size="sm" plain accept=".zip" name="packageIcon"></b-form-file>
                  </b-form-group>
                <b-button type="button" variant="primary" @click="uploadPackageSubmit">Save</b-button>
                <b-button type="reset" variant="info">Cacnel</b-button>
            </b-form>
            </div>
        </b-modal>

        
        <b-modal id="add-category-modal" :title="'카테고리를 수정합니다.'" hide-footer ref="addCategoryModal">
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
                <b-button type="reset" variant="danger" class="pull-right" @click="deleteCategory">Remove</b-button>
            </b-form>
            </div>
        </b-modal>


        <b-modal id="add-subcategory-modal" :title="'서브 카테고리를 수정합니다.'" hide-footer ref="addCategoryModal">
            <div>
            <b-form @submit="addCategorySubmit" @reset="onReset">

            <b-form-group horizontal
                :label-cols="3"
                label-size="sm"
                label="Category"
                label-for="category">
                    <b-form-select v-model="addCategory.category" size="sm" id="category">
                        <option :value="null" selected>Please select an category</option>
                        <option v-for="category in categories" :key="category._id" :value="category.name">{{category.name}}</option>
                        <option :value="'new'">새로운 카테고리를 추가합니다.</option>
                    </b-form-select>
                  </b-form-group>
                   <b-form-group horizontal
                   v-if="addCategory.category == 'new'"
                :label-cols="3"
                label-size="sm"
                label="Category name"
                label-for="font_name">
                    <b-form-input id="font_name" v-model="addCategory.newCategory" type="text" placeholder="Enter New Category name" size="sm"></b-form-input>
                  </b-form-group>
                  <hr>

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
            ,subCategories : []
            ,list :[]
            ,keyword : ''
            ,addIcon: {
                category : null
                ,newCategory : null
                ,upperCategory : null
                ,newUpperCategory : null
                ,downloadPng: null
                ,downloadSvg: null
                ,name : null
                ,isEdit : false
            }
            ,addCategory : {
                name : null
                ,newCategory : null
                ,category : null
                ,isEdit : false
                ,order : null
            }
            ,iconPackage : null
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
    ,watch: {
        'addIcon.upperCategory' : function(){
            this.subCategories =[];
            for(var i in this.categories){
                var category = this.categories[i];
                if(category.name == this.addIcon.upperCategory){
                    this.subCategories = category.categories;
                    return;
                }
            }
        }
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
        ,iconEdit(){
            return "아이콘를 수정합니다.";
        }
    }
    ,mounted:function(){
        this.pageChange();
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
            console.log(category);
            $(".side-nav .category.active").removeClass("active");
            $(".side-nav .category"+category).addClass("active");
            $("ul.icons-sub li.active").removeClass("active");
            $("ul.icons-sub li"+category).addClass("active");
            if($(".category-item"+category).position()!==undefined && $(".category-item"+category).position()!==null){
                $('html, body').animate({scrollTop: $(".category-item"+category).position().top}, 'fast');
            }
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");
            if($(".sub-category-item#"+sub).position()!==undefined && $(".sub-category-item#"+sub).position()!==null){
                $('html, body').animate({scrollTop: $(".sub-category-item#"+sub).position().top}, 'fast');
            }
        }
        ,getCategory(){
            httpCall("/icons","get",null,(res)=>{
                this.categories = res.data;
            })
        }
        , onReset () {
            /* Reset our form values */
            this.addIcon = {
                category : null
                ,newCategory : null
                ,upperCategory : null
                ,newUpperCategory : null
                ,downloadPng: null
                ,downloadSvg: null
                ,name : null
            };
            this.addCategory = {
                name : null
                ,newCategory : null
                ,category : null
                ,isEdit : false
                ,order : null
            }
            this.$refs.addIconModal.hide();
            // this.$refs.addCategoryModal.hide();
            this.$refs.addPackageModal.hide();
        }
        ,editIcon(icon){
            console.log(icon);
            this.addIcon.upperCategory = null;
            for(var i in this.categories) {
                var category = this.categories[i];
                for(var j in category.categories){
                    var sub = category.categories[j];
                    if(sub.name == icon.category) {
                        this.addIcon.upperCategory = category.name;
                        break ;
                    }
                    if(this.addIcon.upperCategory!=null)
                        break;
                }
            }
            this.addIcon.category = icon.category;
            this.addIcon.name = icon.name;
            this.addIcon.icon_id = icon._id;
            this.addIcon.order = icon.order;
        

        }
        ,addIconSubmit(){
            var self = this;
            if(self.addIcon.upperCategory === 'new'){
                self.addCategoryCall(self.addIcon.newUpperCategory,null,"icons",function(){
                    self.addIcon.upperCategory = self.addIcon.newUpperCategory;
                    self.checkSubcategoryCall();                  
                })
            }else {
                self.checkSubcategoryCall();
            }
        }
        ,checkSubcategoryCall(){
            var self = this;
            if(self.addIcon.category === 'new'){
                self.addCategoryCall(self.addIcon.newCategory,self.addIcon.category,"sub_icons",function(){
                    self.addIcon.category = self.addIcon.newCategory;
                    self.addIconCall();
                });
            }else 
                self.addIconCall();
        }
        ,addCategoryCall(name,category,type,cb){
            httpCall("/category/"+type,"POST",{"name":name,"category":category},(data)=>{
                cb();
            });
        }
        ,addIconCall(){
            console.log(1);
            httpFormData("/icons/edit","#icon-form",{'category':this.addIcon.category},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,subCategoryModal(isEdit,category,upperCategory){
            this.addCategory.isEdit = isEdit;
            if(isEdit){
                this.addCategory.name = category.name;
                this.addCategory.category = upperCategory;
                this.addCategory.newCategory = null;
                this.addCategory.category_id = category.category_id;
                this.addCategory.order = category.order;
            }else 
                this.onReset();
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
            var self = this;
            if(this.addCategory.category == 'new'){
                httpCall("/category/icons","POST",{"name":this.addCategory.newCategory},(data)=>{
                    self.addCategory.category = self.addCategory.newCategory;
                    self.addCategoryCall();
                });
            }else {
                this.addCategoryCall();
            }
        }
        ,addCategoryCall(){
            httpCall("/category/icons","PATCH",this.addCategory,(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,deleteCategory(){

        }
        ,uploadPackageSubmit(){
                
            httpFormData("/icons/package","#icon-package-form",{},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,deleteIcon(){
            httpCall("/icons","DELETE",{"id":this.addIcon.icon_id},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,getPackage(){
            httpCall('/icons/package',"GET",null,(res)=>{
                this.iconPackage = res.data.icon.url;
            });
        }
        ,searchByKeyword(){
            httpCall("/icons","get",{"keyword":this.keyword},(res)=>{
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
    margin-top: 24px;
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
</style>

