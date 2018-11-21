<template>
    <div class="font-item">
        <img :src="font.thumbnail">
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
    }
</style>


