<template>
    <div class="font-item">
        <img :src="font.thumbnail" :id="font._id">
        <b-popover :target="font._id"  triggers="click">
            <a :href="font.downloadDevice" :download="font.name+'_device'"><span>Device</span></a> | <a :href="font.downloadDevice" :download="font.name+'_marcomm'"><span>Marcomm</span></a>
        </b-popover>
    </div>
    
</template>

<script>
export default {
    props:['font']
    ,methods:{

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


