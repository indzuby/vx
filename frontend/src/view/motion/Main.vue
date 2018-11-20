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
                            <li @click="moveSubCategory('values_and_6_principles')" class="sub-category" id="values_and_6_principles">3 Values and 6 Principles</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('motion_direction')" class="category" id="motion_direction">MOTION DIRECTION
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('duration')" class="sub-category" id="duration">Duration</li>
                            <li @click="moveSubCategory('easing')" class="sub-category" id="easing">Easing</li>
                            <li @click="moveSubCategory('movement')" class="sub-category" id="movement">Movement</li>
                            <li @click="moveSubCategory('components')" class="sub-category" id="components">Components</li>
                            <li @click="moveSubCategory('transitions')" class="sub-category" id="transition">Transitions</li>
                            <!-- <li @click="moveSubCategory('interactions')" class="sub-category" id="interactions">Interactions</li> -->
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
                <div class="main-content" id="about_flow">
                    <div class="content" id="what_is_flow">
                        <div class="content-title">
                            What is Flow
                        </div>
                        <div class="content-description" style="font-size:18px;">
                            Good experience isn’t created in a vacuum. When using an app or a device, delightful experience is felt when there is seamless flow and allows the user to immerse into the task at hand. Motion plays a crucial role in this context and we are trying to connect space with space and create relationship between information with our motion theme called “Flow into Experience” <br>
                        </div>
                        
                        <video controls preload="metadata" class="video one" id="flow_1010" autoplay>
                            <source src="/static/assets/motion/FLOW_1010.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="content" id="values_and_6_principles">
                        <div class="content-title">
                            3 Values &amp; 6 Principles
                        </div>
                        <div class="content-sub-title">
                            Flexible Space
                        </div>
                        <div class="content-description">
                            There are spatial limits in the screens we use. “Flexible Space” creates flow between spaces and expands the space allowing design elements to expand without limit.  
                        </div>
                        <div class="half-container">
                            <div class="half-content">
                                <div class="video-title">Borderless Expand</div>
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/B_Borderless Expand.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="half-content right">
                                <div class="video-title">Natural Sequence</div>
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/B_Natural Sequence.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                        <div class="content-sub-title">
                            Seamless Connect
                        </div>
                        <div class="content-description">
                            It’s important creating flow of visual information. Motion helps clarify interaction (Forecast & Feedback) and organic relationship between design elements
                        </div>
                        <div class="half-container">
                            <div class="half-content">
                                <div class="video-title">Forecast & Feedback</div>
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/B_Forecast_Feedback.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="half-content right">
                                <div class="video-title">Create Relationship</div>
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/B_Create Relationship.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                        <div class="content-sub-title">
                            Delightful Attention
                        </div>
                        <div class="content-description">
                            We define emotional experience as “Delightful Attention”. Through motion, we are trying to help the users understand the information more easily and make the good experience long lasting. 
                        </div>
                        <div class="half-container">
                            <div class="half-content">
                                <div class="video-title">Enhancing Comprehension</div>
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/B_Enhancing Comprehension.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="half-content right">
                                <div class="video-title">Memorable Impression</div>
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/B_Memorable Impression.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main-content" id="motion_direction">
                    <div class="content" id="duration">
                        <div class="content-title">
                            Duration
                        </div>
                        <div class="content-sub-title">
                            Transition Duration - Entry and Exit
                        </div>
                        <div class="content-description">
                            The duration of transition time when scrolling through pages,<br>
                            entering and exiting a page should have motion expressed in opposite manner
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_1_Duration_Exits and closing_01.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Back button reaction&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float : right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_1_Duration_Exits and closing_02.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Back button reaction&gt;</p>
                            </div>
                        </div>
                        <div class="content-sub-title">
                            Transition Duration - Screen size
                        </div>
                        <div class="content-description">
                            The same motion duration time can be felt differently depending on the size of the screen.<br>
                            The bigger the screen size, the motion should be slightly slower to maintain similar feeling of motion duration.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:145px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_2_Duration_Area_Watch.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Small&gt;</p>
                            </div>
                            <div class="linear-video" style="width:147px; margin-left : 40px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_2_Duration_Area_Mobile.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Medium&gt;</p>
                            </div>
                            <div class="linear-video" style="width:478px; margin-left : 40px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_2_Duration_Area_TV.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Large&gt;</p>
                            </div>
                        </div>
                    </div>

                    <div class="content" id="easing">
                        <div class="content-title">
                            Basic Easing Value
                        </div>
                        <div class="content-sub-title">
                            easeOut
                        </div>
                        <div class="content-description">
                            EaseOut means to start fast and gradually stop.<br>
                            This is used to express big or dynamic movement.
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_easeout" autoplay style="margin-top:50px;">
                                <source src="/static/assets/motion/4_Easing_EaseOut.mp4" type="video/mp4">
                            </video>
                            <p class="left">&lt;Music – Transition to lyrics page&gt;</p>
                        </div>
                        <div class="content-sub-title">
                            easInOut
                        </div>
                        <div class="content-description">
                            easeInOut means gradual acceleration and stop.<br>
                            This is used to express smooth movement. 
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_easeInout" autoplay style="margin-top:50px;">
                                <source src="/static/assets/motion/4_Easing_easeInOut.mp4" type="video/mp4">
                            </video>
                            <p class="left">&lt;Music – Entering easing&gt;</p>
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_easeInout2" autoplay style="margin-top:78px;">
                                <source src="/static/assets/motion/4_Easing_easeInOut2.mp4" type="video/mp4">
                            </video>
                            <p class="left">&lt;Music – Entering easing&gt;</p>
                        </div>
                        <div class="content-sub-title">
                            No Ease
                        </div>
                        <div class="content-description">
                            No Ease means movement with no tension.<br>
                            This is used for simple graphics or text transition
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_linear_noease" autoplay style="margin-top:78px;">
                                <source src="/static/assets/motion/4_Easing_Linear_noEase.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Easing graph comparison&gt;</p>
                        </div>
                        <div class="half-container" style="margin-top:58px;">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video" height="360px">
                                    <source src="/static/assets/motion/4_Easing_Linear_요소단순이동.mp4" type="video/mp4">
                                </video>
                                <p>&lt;No easing - position change&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float : right;">
                                <video controls preload="metadata" class="video" height="360px">
                                    <source src="/static/assets/motion/Easing_simpleText_music.mp4" type="video/mp4">
                                </video>
                                <p>&lt;No easing - Text Transition&gt;</p>
                            </div>
                        </div>
                    </div>

                    <div class="content" id="movement">
                        <div class="content-title">
                            Movement
                        </div>
                        <div class="content-sub-title">
                            Stretch
                        </div>
                        <div class="content-description">
                            When scrolling contents horizontally or vertically, convey stretching motion to objects when moving and make it come back to its original state when stopping.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/Movement_stretch_music.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Tab indicator transition&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/5_1_Movement_Stretch_2.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Page indicator navigation&gt;</p>
                            </div>
                        </div>
                        
                        <div class="content-sub-title">
                            Squash
                        </div>
                        <div class="content-description">
                            Clearly express the touch interaction feedback with squash motion.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/8_2_Interactions_LongPress.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Gallery– Edit mode - Long press&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/8_1_Interactions_Tap.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Gallery– Selecting images - Tap&gt;</p>
                            </div>
                        </div>

                        <div class="content-sub-title">
                            Arc motion
                        </div>
                        <div class="content-description">
                            Make the design element move in an arc path to make it more interesting
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/5_2_Movement_Arc.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Music – Transition to player&gt;</p>
                        </div>

                        <div class="content-sub-title">
                            Scale
                        </div>
                        <div class="content-description">
                            This motion shows change in size. For example when enlarging something small or expressing a hidden feature.
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/Movement_scale_music.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Gallery– Selecting picture&gt;</p>
                        </div>

                        <div class="content-sub-title">
                            Parallax
                        </div>
                        <div class="content-description">
                            When scrolling contents horizontally, express parallax effect by giving time difference between foreground and background image
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/Movement_Parallax_music.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Music– Parallax effect on album cover image&gt;</p>
                        </div>
                    </div>

                    <div class="content" id="components">
                        <div class="content-title">
                            Components
                        </div>
                        <div class="content-sub-title">
                            Splash
                        </div>
                        <div class="content-description">
                            This motion is to express the start of an app. Line motion is used to convey the icon and name of the service. 
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/6_component_splash_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Splash screen&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/6_component_splash_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Gallery – Splash screen&gt;</p>
                            </div>
                        </div>
                        
                        <div class="content-sub-title">
                            OnBoarding
                        </div>
                        <div class="content-description">
                            Add relevant motion to illustrations to entice the user and help the flow of the introduction story.
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/6_component_onboarding.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Music– Onboarding illustration&gt;</p>
                        </div>

                        
                        <div class="content-sub-title">
                            Page Control
                        </div>
                        <div class="content-description">
                            This motion occurs when navigating from page to page.<br>
                            Dots or lines convey the direction you are navigating to. 
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/6_component_Page Control.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Music – Horizontal page navigation&gt;</p>
                        </div>
                    </div>
                    <div class="content" id="transitions">
                        <div class="content-title">
                            Transitions
                        </div>
                        
                        <div class="content-sub-title">
                            Entering Scene
                        </div>
                        <div class="content-description">
                            This motion occurs when entering a service after the splash screen or onboarding is over.<br>
                            Design objects and texts fall into place with “out to in “manner conveying immersion effect.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_EnteringScene_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Entering transition&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_EnteringScene_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Gallery– Entering transition&gt;</p>
                            </div>
                        </div>
                        
                        <div class="content-sub-title">
                            Color Effect
                        </div>
                        <div class="content-description">
                            Use enticing motions that express the core characteristics of the service while using the dominant color of the image as the main color palette.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_ColorEffect_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – Background color effect&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_ColorEffect_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Gallery– After deleting images&gt;</p>
                            </div>
                        </div>

                        <div class="content-sub-title">
                            Cascade Effect
                        </div>
                        <div class="content-description">
                            This motion expresses the rearranging of objects in a cascading manner when navigating from page to page.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/Movement_Cascade_music.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Music – List cascading&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_CascadeEffect_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;Gallery–Tile cascading&gt;</p>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="content" id="interactions">
                        <div class="content-title">
                            Interactions
                        </div>
                        <div class="content-sub-title">
                            Tap
                        </div>
                        <div class="content-description">
                            화면을 한 번 터치하는 제스쳐입니다. 터치한 요소가 무엇인지에 따라서 다양한 움직임이 반응합니다.
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/8_1_Interactions_Tap.mp4" type="video/mp4">
                            </video>
                            <p>&lt;갤러리서비스 - 편집모드에서 선택된 요소를 알려주는 모션&gt;</p>
                        </div>
                        
                        <div class="content-sub-title">
                            Long Press
                        </div>
                        <div class="content-description">
                            특정 시간 동안 길게 Tap 하고 있는 제스쳐이며, 요소가 손가락에 눌린 듯한 움직임을 보입니다. <br>눌러진 요소에 대한 편집 모드로 전환되거나 요소를 이동시킬 때 사용됩니다. 
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/8_2_Interactions_LongPress.mp4" type="video/mp4">
                            </video>
                            <p>&lt;뮤직서비스 - 음악이 플레이 될 때의 일렁이는 모션&gt;</p>
                        </div>
                        
                        <div class="content-sub-title">
                            Swipe
                        </div>
                        <div class="content-description">
                            횡축으로 정보들이 많이 나열되어 있을 때 손가락을 좌우 이동 시 나타나는 모션이며 요소 간 간격과 시차를 두어 카드가 밀리며 <br>이에 탄성 있는 움직임을 제공합니다.
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/8_3_Interactions_Swipe.mp4" type="video/mp4">
                            </video>
                            <p>&lt;뮤직서비스 - 컨텐츠의 정보를 확인할 때 모션&gt;</p>
                        </div>
                        
                        <div class="content-sub-title">
                            Scrolling
                        </div>
                        <div class="content-description">
                            수직으로 정보의 양이 많은 목록이나 격자화면에서 손가락을 상하 이동 시 나타나는 모션이며 첫 줄과 그다음 줄의 정보간 간격과 시차를 두고 움직이게 합니다.
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/8_4_Interactions_Scrolling.mp4" type="video/mp4">
                            </video>
                            <p>&lt;갤러리서비스 - 썸네일의 정보를 제공받는 모션&gt;</p>
                        </div>
                        
                        <div class="content-sub-title">
                            Pinch
                        </div>
                        <div class="content-description">
                            정보를 확장하여 보거나 축소하여 보기 위한 두 손가락을 넓혔다 모았다 하는 제스쳐입니다. 손가락을 모으면 정보의 양이 많아지거나 혹은 미디어 컨텐츠의 크기가 작아집니다. 반대로 손가락을 넓히면 정보의 양이 적어지거나 혹은 미디어 컨텐츠의 크기가 커지게 합니다. 
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/8_5_Interactions_Pinch.mp4" type="video/mp4">
                            </video>
                            <p>&lt;갤러리서비스 - 확대, 축소를 통해 정보를 확인하는 모션&gt;</p>
                        </div>
                    </div> -->
                </div>
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
        $(window).scroll(function(){
            if(window.scrollY+50 >= $(".main-content#about_flow").position().top) {
                self.navChange('about_flow');
            }
            if(window.scrollY+50 >= $(".main-content#motion_direction").position().top) {
                // location.hash="light_theme";
                self.navChange("motion_direction");
            }
            $($(".content").get().reverse()).each(function(element){
                if(window.scrollY+50 >= $(this).position().top){
                    self.subNavChange($(this).attr("id"));
                    return false;
                }
            })
        })
    }
    ,mounted:function(){
        this.pageChange();
    }
    ,methods :{
        pageChange(){
            var h = $(".main-content#about_flow").position().top;
            if(location.hash.includes("about_flow"))
                this.navChange('about_flow');
            else if(location.hash.includes("motion_direction")){
                this.navChange('motion_direction');
                h = $(".main-content#motion_direction").position().top;
            }
            $('html, body').animate({scrollTop: h+150}, 'fast');
        }
        ,moveCategory(category){
            if($(event.target).hasClass("category")){
                $(".sub-nav .sub-category.active").removeClass("active");
            }
            if(location.hash === category){
                var h = $(".main-content#"+category).position().top;
                $('html, body').animate({scrollTop: h+150}, 'fast');
            }
            location.hash = category;
        }
        ,moveSubCategory(sub){
            this.subNavChange(sub);
            var h = $(".content#"+sub).position().top;
            $('html, body').animate({scrollTop: h+200}, 'fast');

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
.content-container{
    margin-top:160px;
}
.content:not(#what_is_flow){
     margin-top:105px;
}
</style>

