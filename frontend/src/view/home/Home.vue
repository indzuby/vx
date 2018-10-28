<template>
    <div>
        <Gnb />
        <div class="main-container">
            <div class="main-title">
                <p>Welcome to One Samung UX</p>
                <p>Design Library</p>
            </div>
            <div class="main-description">
                <p>Here, you can learn about latest direction of Samsung’s UX platform.</p>
                <p>You can view and download the latest version of Samsung icon sets,</p>
                <p>OneFunction Fonts, GUI templates and Samsung Motion guidlines.</p>
            </div>
            <img class="landing-img" src="/static/images/landing.png">
        </div>
    </div>
    
</template>

<script>
import Gnb from '@/view/components/Gnb'
export default {
    components :{
        Gnb
    }
}
</script>

<style scoped>
    .main-container{
        width: 100%;
        
        margin-top : 184px;
    }
    .main-title{
        margin-top: 105px;
        color : rgba(0,0,0,0.8);
        font-size: 65.8px;
        font-weight: 200;
        line-height: 1.23;
        text-align: center;
    }
    p{
        margin : 0px;
    }
    .main-description{
        margin-top : 72px;
        line-height: 2.04;
        text-align: center;
        font-weight: 200;
        font-size: 20px;
        color : rgba(0,0,0,0.8);
    }
    .landing-img{
        display: block;
        margin: auto;
        margin-top : 32px;
        padding-right : 94px;
    }
</style>

