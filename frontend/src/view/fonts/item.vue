<template>
    <div class="font-item">
        <img :src="font.thumbnail" :id="font._id">
        <b-popover :target="font._id"  triggers="click" :show.sync="show">
            <a :href="font.downloadDevice" :download="font.name+'_device'"><span>Device</span></a> | 
            <a :href="font.downloadDevice" :download="font.name+'_marcomm'"><span>Marcomm</span></a> 
            <span v-if="isAdmin" @click="editFont" v-b-modal="'add-font-modal'">| <span>Edit</span></span>
        </b-popover>
    </div>
    
</template>

<script>
export default {
    props:['font']
    ,data() {
        return {
            show: false
        }
    }
    ,methods:{
        editFont(){
            this.$emit("editFont",true,this.font);
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
    .font-item{
        display: inline-block;
        width : 19%;
        cursor: pointer;
    }
</style>


