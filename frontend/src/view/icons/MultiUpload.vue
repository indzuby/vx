<template>
    <div class="window-container">
        <b-alert show variant="danger">형식에 맞는 파일을 입력해주세요.</b-alert>
        <b-form @reset="onReset" id="icon-form" method="POST" enctype="multipart/form-data">
                <b-form-group horizontal
            :label-cols="3"
            label-size="sm"
            label="Category"
            label-for="category">
                <b-form-select v-model="upperCategory" size="sm" id="category">
                    <option :value="null" selected>Please select an category</option>
                    <option v-for="category in categories" :key="category._id" :value="category.name">{{category.name}}</option>
                    <option :value="'new'">새로운 카테고리를 추가합니다.</option>
                </b-form-select>
                </b-form-group>
                <b-form-group horizontal
                v-if="upperCategory == 'new'"
            :label-cols="3"
            label-size="sm"
            label="Category name"
            label-for="font_name">
                <b-form-input id="font_name" v-model="newUpperCategory" type="text" placeholder="Enter New Category name" size="sm"></b-form-input>
                </b-form-group>
                <b-form-group horizontal
            :label-cols="3"
            label-size="sm"
            label="Sub Category"
            label-for="category">
                <b-form-select v-model="category" size="sm" id="category">
                    <option :value="null" selected>Please select an category</option>
                    <option v-for="category in subCategories" :key="category._id" :value="category.name">{{category.name}}</option>
                    <option :value="'new'">새로운 서브 카테고리를 추가합니다.</option>
                </b-form-select>
                </b-form-group>
                <b-form-group horizontal
                v-if="category == 'new'"
            :label-cols="3"
            label-size="sm"
            label="Category name"
            label-for="font_name">
                <b-form-input id="font_name" v-model="newCategory" type="text" placeholder="Enter New Category name" size="sm"></b-form-input>
                </b-form-group>
                <hr>
            <div class="drag-area" id="png-area">
                <img src="/static/images/add_img.png">
                <p>Drop here<b>(only png file)</b></p>
            </div>
            <div class="drag-area" id="svg-area">
                <img src="/static/images/add_img.png">
                <p>Drop here<b>(only svg file)</b></p>
            </div>
            <input type="file" multiple name="downloadPng" accept=".png" class="input-file" @change="uploadPng">
            <input type="file" multiple name="downloadSvg" accept=".svg" class="input-file" @change="uploadSvg">

            <div class="show-area" id="file-show">
                <span style="cursor:pointer; margin-bottom:10px;" @click="restFiles"><u>Upload file Reset</u></span>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Png Preview</th>
                            <th>Svg Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            
            <b-button type="button" @click="addIconSubmit" variant="primary">Save</b-button>
            <b-button type="reset" variant="info">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories :[]
            ,subCategories : []
            ,upperCategory : null
            ,newUpperCategory : null
            ,category : null
            ,newCategory : null
            ,pngFiles:null
            ,svgFiles:null
        }
    }
    ,created:function(){
        this.getCategory();
    }
    ,mounted:function(){
        var self = this;
        $("#png-area").on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
        })
        .on('dragover dragenter', function() {
            $(this).addClass('is-dragover');
        })
        .on('dragleave dragend drop', function() {
            $(this).removeClass('is-dragover');
        })
        .on('drop', function(e) {
            self.pngFiles = e.originalEvent.dataTransfer.files;
            $("input[name=downloadPng]")[0].files = self.pngFiles
            self.showPngFiles();
            
        }).click(function(e){
            $("input[name=downloadPng]").trigger('click');
        });
        $("#svg-area").on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
        })
        .on('dragover dragenter', function() {
            $(this).addClass('is-dragover');
        })
        .on('dragleave dragend drop', function() {
            $(this).removeClass('is-dragover');
        })
        .on('drop', function(e) {
            self.svgFiles = e.originalEvent.dataTransfer.files;
            $("input[name=downloadSvg]")[0].files = self.svgFiles
            self.showSvgFiles();
            
        }).click(function(e){
            $("input[name=downloadSvg]").trigger('click');
        });

    }
    ,watch: {
        'upperCategory' : function(){
            this.subCategories =[];
            for(var i in this.categories){
                var category = this.categories[i];
                if(category.name == this.upperCategory){
                    this.subCategories = category.categories;
                    return;
                }
            }
        }
    }
    ,methods :{
        onReset () {
            /* Reset our form values */
            
            this.upperCategory = null;
            this.newUpperCategory = null;
            this.category = null;
            this.newCategory = null;
        }
        ,addIconSubmit(){
            var self = this;
            if(self.upperCategory === 'new'){
                self.addCategoryCall(self.newUpperCategory,null,"icons",function(){
                    self.upperCategory = self.newUpperCategory;
                    self.checkSubcategoryCall();                  
                })
            }else {
                self.checkSubcategoryCall();
            }
        }
        ,checkSubcategoryCall(){
            var self = this;
            if(self.category === 'new'){
                self.addCategoryCall(self.newCategory,self.category,"sub_icons",function(){
                    self.category = self.newCategory;
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
            httpFormData("/icons","#icon-form",{'category':this.category},(data)=>{
                alert(data.msg);
                location.reload();
            });
        }
        ,getCategory(){
            httpCall("/icons","get",null,(res)=>{
                this.categories = res.data;
            })
        }
        ,uploadPng(){
            this.pngFiles = event.target.files;
            $("input[name=downloadPng]")
            this.showPngFiles();
        }
        ,uploadSvg(){
            this.svgFiles = event.target.files;
            this.showSvgFiles();
        }
        ,showPngFiles(){
            $("#png-area").hide();
            $.each(this.pngFiles,function(i,file){
                var reader = new FileReader();
                reader.onload = function(event) {
                    var name = file.name.replace(".png","");
                    var hashId = hash(name);
                    if($("#"+hashId).length>0) {
                        $("#"+hashId+" .png").html("<img src='"+event.target.result+"'>");
                    }else {
                        var tr = "<tr id='"+hashId+"'>";
                        tr+="<td>"+name+"</td>";
                        tr+="<td class='png'><img src='"+event.target.result+"'></td>";
                        tr+="<td class='svg'></td>";
                        tr+="</tr>";
                        $("#file-show table tbody").append(tr);
                    }
                };
                reader.readAsDataURL(file);
            })
        }
        ,showSvgFiles(){
            $("#svg-area").hide();
            $.each(this.svgFiles,function(i,file){
                var reader = new FileReader();
                reader.onload = function(event) {
                    var name = file.name.replace(".svg","");
                    var hashId = hash(name);
                    if($("#"+hashId).length>0) {
                        $("#"+hashId+" .svg").html("<img src='"+event.target.result+"'>");
                    }else {
                        var tr = "<tr id='"+hashId+"'>";
                        tr+="<td>"+name+"</td>";
                        tr+="<td class='png'></td>";
                        tr+="<td class='svg'><img src='"+event.target.result+"'></td>";
                        tr+="</tr>";
                        $("#file-show table tbody").append(tr);
                    }
                };
                reader.readAsDataURL(file);
            })
        },restFiles(){
            this.pngFiles = [];
            this.svgFiles = [];
            $("#file-show table tbody").empty();
            $("#png-area").show();
            $("#svg-area").show();
        }
    }

}
</script>


<style>
    .window-container{
        height: 100%;
        padding-top : 200px;
        padding-bottom : 100px;
    }
    .drag-area{
        margin:auto;
        width: 100%;
        height: 200px;
        border: 1px black dashed;
        text-align: center;
        margin-bottom: 30px;
        cursor: pointer;
    }
    .drag-area img{
        width : 50px;
        margin-bottom: 10px;
        margin-top:60px;
    }
    .drag-area.is-dragover {
        background-color: grey;
    }
    input[type=file]{
        display: none;
    }
    .show-area{
        margin-bottom: 30px;
        margin-top:30px;
    }
    .show-area img{
        width: 30px;
    }
</style>
