<template>
    <div>
        <Gnb />
        <div class="main-container" style="margin-top: 105px;">
            <div class="main-title">
                <p>Welcome to One Samung UX</p>
                <p>Design Library</p>
            </div>
            <div class="main-description">
                <p>Here, you can learn about latest direction of Samsung’s UX platform.</p>
                <p>You can view and download the latest version of Samsung icon sets,</p>
                <p>OneFunction Fonts, GUI templates and Samsung Motion guidlines.</p>
            </div>
            <img class="landing-img" src="/static/images/landing_maing.jpg">
        </div>
    </div>
    
</template>

<script>
import Gnb from '@/view/components/Gnb'
import '@/assets/common.css'
export default {
    components :{
        Gnb
    }
}
</script>

<style scoped>
</style>

