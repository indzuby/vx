<template>
    <div class="icon-item" :class="padding">
        <img :src="preview" :id="icon._id">
        <p>{{icon.name}}</p>
        <b-popover :target="icon._id"  triggers="click" :show.sync="show">
            <a v-if="icon.downloadPng!=null" :href="icon.downloadPng" :download="icon.name"><span>Png</span></a>|
            <a v-if="icon.downloadSvg!=null" :href="icon.downloadSvg" :download="icon.name"><span>Svg</span></a> 
            <span v-if="isAdmin" @click="editIcon" v-b-modal="'add-icon-modal'">|<span> Edit</span></span>
        </b-popover>
    </div>
    
</template>

<script>
export default {
    props:['icon','index']
    ,data() {
        return {
            show: false
        }
    }
    ,methods:{
        editIcon(){
            this.$emit("editIcon",this.icon);
            this.show = false;
        }
    }
    ,computed:{
        hash(){
            return location.hash;
        }
        ,isAdmin(){
            return this.$session.get("admin");
        },padding(){
            if(this.index%8 == 7) {
                return "right-0";
            }
            return "right";
        },preview(){
            if(this.icon.downloadPng==null)
                return this.icon.downloadSvg;
            return this.icon.downloadPng;
        }
    }
}
</script>

<style scoped>
    .icon-item{
        display: inline-block;
        width : calc(12.5% - 40px);
        vertical-align: top;
        height: 105px;
        margin-right: 40px;
        cursor: pointer;
        text-align: center
    }
    .icon-item.right-0{
        margin-right : 0px;
    }
    .icon-item p{
        margin-top : 8px;
        font-size: 8px;
    }
    .icon-item img{
        width: 36px;
    }
</style>


