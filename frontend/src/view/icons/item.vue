<template>
    <div class="icon-item">
        <img :src="icon.thumbnail" :id="icon._id">
        <b-popover :target="icon._id"  triggers="click" :show.sync="show">
            <a :href="icon.downloadDevice" :download="icon.name+'_device'"><span>Downlod</span></a> |
            <span v-if="isAdmin" @click="editIcon" v-b-modal="'add-icon-modal'">| <span>Edit</span></span>
        </b-popover>
    </div>
    
</template>

<script>
export default {
    props:['icon']
    ,data() {
        return {
            show: false
        }
    }
    ,methods:{
        editIcon(){
            this.$emit("editicon",true,this.icon);
            this.show = false;
        }
    }
    ,computed:{
        hash(){
            return location.hash;
        }
        ,isAdmin(){
            return this.$session.get("admin");
        }
    }
}
</script>

<style scoped>
    .icon-item{
        display: inline-block;
        width : 19%;
        cursor: pointer;
    }
    .icon-item img{
        width: 58%;
    }
</style>


