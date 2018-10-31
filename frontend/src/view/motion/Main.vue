<template>
    <div>
        <Gnb />

        <div class="main-container">
            <div class="side-container">
                <p class="side-title">MOTION</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li @click="moveCategory('about_flow')" class="active category" id="about_flow">ABOUT FLOW
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('what_is_flow')" class="sub-category" id="what_is_flow">What is Flow</li>
                            <li @click="moveSubCategory('3_values_and_6_principles')" class="sub-category" id="3_values_and_6_principles">3 Values and 6 Principles</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('motion_basics')" class="category" id="motion_basics">MOTION BASICS
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('duration')" class="sub-category" id="duration">Duration</li>
                            <li @click="moveSubCategory('easing')" class="sub-category" id="easing">Easing</li>
                            <li @click="moveSubCategory('movement')" class="sub-category" id="movement">Movement</li>
                            <li @click="moveSubCategory('components')" class="sub-category" id="components">Components</li>
                            <li @click="moveSubCategory('transition')" class="sub-category" id="transition">Transition</li>
                            <li @click="moveSubCategory('interaction')" class="sub-category" id="interaction">Interaction</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
            </div>
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
    ,created:function(){
        let self = this;
        $(window).on('hashchange', function() {
            self.pageChange();
        });
    }
    ,mounted:function(){
        this.pageChange();
    }
    ,methods :{
        pageChange(){
            if(location.hash.includes("about_flow"))
                this.navChange('about_flow');
            else if(location.hash.includes("motion_basics"))
                this.navChange('motion_basics');
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
            $(".side-nav .category#"+category).addClass("active");
            $("ul.motion-sub li.active").removeClass("active");
            $("ul.motion-sub li#"+category).addClass("active");
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");

        }
    }
}
</script>

<style scoped>
</style>

