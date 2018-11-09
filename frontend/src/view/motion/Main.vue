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
                    <li @click="moveCategory('motion_direction')" class="category" id="motion_direction">MOTION DIRECTION
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
                <div class="main-content" id="about_flow">
                    <div class="content" id="what_is_flow">
                        <div class="content-title">
                            What is Flow
                        </div>
                        <div class="content-description">
                            좋은 경험은 단순히 단편적이거나 순간적인 것에서 만들어지지 않습니다. 앱 혹은 제품을 끊김없는 흐름을 가지고 사용할 때<br>
                            몰입되는 Delight한 경험을 할 수 있습니다.   Motion은 이런 경험을 제공하는 중요한 디자인 요소이며, <span class="quotation">“Flow into Experience”</span><br>
                            라는 모션 테마를 통해서 공간과 공간을 연결하고, 정보간의 관계를 만들어 주며 감성적인 경험을 주려고 합니다.<br>
                        </div>
                        
                        <video controls preload="metadata" class="video" id="flow_1010" autoplay>
                            <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                            <!-- <flow1010 /> -->
                            <source src="/static/assets/motion/FLOW_1010.mp4" type="video/mp4">
                            <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                        </video>
                    </div>
                    <div class="content" id="3_values_and_6_principles">
                        <div class="content-title">
                            3 Values &amp; 6 Principles
                        </div>
                        <div class="content-sub-title">
                            Flexible Space
                        </div>
                        <div class="content-description">
                            우리가 사용하는 제품 스크린은 공간의 제약이 있습니다.  <span class="quotation">Flexible Space</span>은 움직임을 통해서 공간과 공간의  <span class="quotation">Flow</span>를 만들고<br>
                            확장해주어야 하며 스크린 안에서 디자인 요소들이 영역의 제약을 없이 끊임 확장 할 수 있어야 합니다.   
                        </div>
                        <div class="half-container">
                            <div class="half-content">
                                <div class="video-title">Borderless Expand</div>
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/B_Borderless Expand.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                            </div>
                            <div class="half-content right">
                                <div class="video-title">Natural Sequence</div>
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/B_Natural Sequence.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                            </div>
                        </div>
                        <div class="content-sub-title">
                            Seamless Connect
                        </div>
                        <div class="content-description">
                            시각 정보의 Flow 만드는 것이 중요합니다.  움직임을 통해서 Interaction(Forecast & Feedback)을 보다 명확하게 해주며,<br>
                            디자인 요소간에 서로 관계를 가지고 유기적인 움직임을 만듭니다.
                        </div>
                        <div class="half-container">
                            <div class="half-content">
                                <div class="video-title">Forecast & Feedback</div>
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/B_Forecast_Feedback.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                            </div>
                            <div class="half-content right">
                                <div class="video-title">Create Relationship</div>
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/B_Create Relationship.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                            </div>
                        </div>
                        <div class="content-sub-title">
                            Delightful Attention
                        </div>
                        <div class="content-description">
                            감정적인 경험을 풍부하게 Delightful Attention라고 정의하였으며,<br>
                            움직임을 통해서 오래 기억에 남겨야하고 이해기 쉽도록 표현하려고 합니다.
                        </div>
                        <div class="half-container">
                            <div class="half-content">
                                <div class="video-title">Enhancing Comprehension</div>
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/B_Enhancing Comprehension.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                            </div>
                            <div class="half-content right">
                                <div class="video-title">Memorable Impression</div>
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/B_Memorable Impression.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
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
                            상황에 따른 지속시간 - Entry and Exit
                        </div>
                        <div class="content-description">
                            화면의 트랜지션 상황에서의  페이지 진입할 때 혹은 나갈 때 움직임의 지속 시간을 나타내며, <br>
                            화면에서 나갈 때는 해당 화면에 진입했을 때의 움직임과 속도를 역행합니다.
                        </div>
                        <div class="half-container">
                            <div class="liner-video" style="width:330px;">
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/2_1_Duration_Exits and closing_01.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                                <p>&lt;뮤직서비스 - 이전 단계로 나오는 모션&gt;</p>
                            </div>
                            <div class="liner-video" style="width:330px; margin-left : 100px;">
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/2_1_Duration_Exits and closing_02.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                                <p>&lt;뮤직서비스 - 오브젝트를 통해 나오는 모션&gt;</p>
                            </div>
                        </div>
                        <div class="content-sub-title">
                            화면 크기에 따른 지속시간 - Area
                        </div>
                        <div class="content-description">
                            동일한 화면 전환이라도 디바이스의 사이즈에 따라서 속도가 다르게 느껴질 수 있습니다. <br>
                            화면이 큰 기기일수록 물리적인 거리가 길어지기 때문에 전환되는 지속시간을 길게 합니다.
                        </div>
                        <div class="half-container">
                            <div class="liner-video" style="width:113px;">
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/2_2_Duration_Area_Watch.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                                <p>&lt;Small&gt;</p>
                            </div>
                            <div class="liner-video" style="width:112px; margin-left : 40px;">
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/2_2_Duration_Area_Mobile.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                                <p>&lt;Medium&gt;</p>
                            </div>
                            <div class="liner-video" style="width:448px; margin-left : 40px;">
                                <video controls preload="metadata" class="video">
                                    <!-- <source src="./FLOW_1010.wmv" type="video/wmv"> -->
                                    <!-- <flow1010 /> -->
                                    <source src="/static/assets/motion/2_2_Duration_Area_TV.mp4" type="video/mp4">
                                    <!-- <source src="/static/assets/KakaoTalk_Video_20180612_1423_09_497.mp4" type="video/mp4"> -->
                                </video>
                                <p>&lt;Large&gt;</p>
                            </div>
                        </div>
                    </div>
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
            $(".content").each(function(element){
                if(window.scrollY+50 >= $(this).position().top){
                    self.subNavChange($(this).attr("id"));
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
            window.scrollTo(0,h);
        }
        ,moveCategory(category){
            if($(event.target).hasClass("category")){
                $(".sub-nav .sub-category.active").removeClass("active");
            }
            location.hash = category;
            var h = $(".main-content#"+category).position().top;
            window.scrollTo(0,h);
        }
        ,moveSubCategory(sub){
            this.subNavChange(sub);
            var h = $(".content#"+sub).position().top;
            window.scrollTo(0,h);

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
#flow_1010{
    margin-top: 32px;
}
.content-container{
    margin-top:160px;
}
</style>

