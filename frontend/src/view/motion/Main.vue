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
                            <!-- <li @click="moveSubCategory('transition')" class="sub-category" id="transition">Transition</li> -->
                            <li @click="moveSubCategory('interactions')" class="sub-category" id="interactions">Interactions</li>
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
                        <div class="content-description" style="font-size:16px;">
                            좋은 경험은 단순히 단편적이거나 순간적인 것에서 만들어지지 않습니다. 앱 혹은 제품을 끊김없는 흐름을 가지고 사용할 때<br>
                            몰입되는 Delight한 경험을 할 수 있습니다.   Motion은 이런 경험을 제공하는 중요한 디자인 요소이며, <span class="quotation">“Flow into Experience”</span><br>
                            라는 모션 테마를 통해서 공간과 공간을 연결하고, 정보간의 관계를 만들어 주며 감성적인 경험을 주려고 합니다.<br>
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
                            우리가 사용하는 제품 스크린은 공간의 제약이 있습니다.  <span class="quotation">Flexible Space</span>은 움직임을 통해서 공간과 공간의  <span class="quotation">Flow</span>를 만들고<br>
                            확장해주어야 하며 스크린 안에서 디자인 요소들이 영역의 제약을 없이 끊임 확장 할 수 있어야 합니다.   
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
                            시각 정보의 Flow 만드는 것이 중요합니다.  움직임을 통해서 Interaction(Forecast & Feedback)을 보다 명확하게 해주며,<br>
                            디자인 요소간에 서로 관계를 가지고 유기적인 움직임을 만듭니다.
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
                            감정적인 경험을 풍부하게 Delightful Attention라고 정의하였으며,<br>
                            움직임을 통해서 오래 기억에 남겨야하고 이해기 쉽도록 표현하려고 합니다.
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
                            상황에 따른 지속시간 - Entry and Exit
                        </div>
                        <div class="content-description">
                            화면의 트랜지션 상황에서의  페이지 진입할 때 혹은 나갈 때 움직임의 지속 시간을 나타내며, <br>
                            화면에서 나갈 때는 해당 화면에 진입했을 때의 움직임과 속도를 역행합니다.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_1_Duration_Exits and closing_01.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 이전 단계로 나오는 모션&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float : right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/2_1_Duration_Exits and closing_02.mp4" type="video/mp4">
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
                            Easing
                        </div>
                        <div class="content-sub-title">
                            easeOut
                        </div>
                        <div class="content-description">
                            EaseOut은 빠르게 가속하고 부드럽게 정지하는 모션을 말하며, 큰 변화의 움직이나  다이나믹한  움직임을 만들 때 사용합니다.
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_easeout" autoplay style="margin-top:50px;">
                                <source src="/static/assets/motion/4_Easing_EaseOut.mp4" type="video/mp4">
                            </video>
                            <p class="left">&lt;뮤직서비스 –  가사정보를 보여주는 화면으로 전환&gt;</p>
                        </div>
                        <div class="content-sub-title">
                            easInOut
                        </div>
                        <div class="content-description">
                            easeInOut은 서서히 가속하고 부드럽게 정지하는 모션을 말하며, 부드운 움직임을 만들 때 사용합니다.  
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_easeInout" autoplay style="margin-top:50px;">
                                <source src="/static/assets/motion/4_Easing_easeInOut.mp4" type="video/mp4">
                            </video>
                            <p class="left">&lt;뮤직서비스 –  화면 전환 시 이징 값&gt;</p>
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_easeInout2" autoplay style="margin-top:78px;">
                                <source src="/static/assets/motion/4_Easing_easeInOut2.mp4" type="video/mp4">
                            </video>
                            <p class="left">&lt;뮤직서비스 –  화면 진입 시 이징 값&gt;</p>
                        </div>
                        <div class="content-sub-title">
                            Linear - No Ease
                        </div>
                        <div class="content-description">
                            속도의 변화가 없이 일정한 속도로 이동하는 움직임을 말하며, 그래픽 요소가 단순 이동 또는 Text 변환에서 사용합니다.  
                        </div>
                        <div class="linear-video">
                            <video controls preload="metadata" class="video one" id="easing_linear_noease" autoplay style="margin-top:78px;">
                                <source src="/static/assets/motion/4_Easing_Linear_noEase.mp4" type="video/mp4">
                            </video>
                            <p>&lt;Easing 그래프 비교&gt;</p>
                        </div>
                        <div class="half-container" style="margin-top:58px;">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video" height="360px">
                                    <source src="/static/assets/motion/4_Easing_Linear_요소단순이동.mp4" type="video/mp4">
                                </video>
                                <p>&lt;그래프 요소 단순 이동&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float : right;">
                                <video controls preload="metadata" class="video" height="360px">
                                    <source src="/static/assets/motion/4_Easing_Linear_요소단순이동2.mp4" type="video/mp4">
                                </video>
                                <p>&lt;단순 TExt 변화&gt;</p>
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
                            Stretch는 물성을 나타내는 움직임이며,  요소의 특성에  맞게 경로, 방향, 거리를 표현할 때 사용합니다. 
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/5_1_Movement_Stretch_1.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 탭 전환될 때의 텐션감 있는 모션&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/5_1_Movement_Stretch_2.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 페이지 네비게이션 모션&gt;</p>
                            </div>
                        </div>
                        
                        <div class="content-sub-title">
                            Arc motion
                        </div>
                        <div class="content-description">
                            요소가 호를 그리며 이동하는 움직임이며, 사용자의 시선을 유도하기 위해 사용합니다. 
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/5_2_Movement_Arc.mp4" type="video/mp4">
                            </video>
                            <p>&lt;뮤직서비스 - 탭 전환될 때의 텐션감 있는 모션&gt;</p>
                        </div>

                        
                        <div class="content-sub-title">
                            Scale
                        </div>
                        <div class="content-description">
                            크기 전환에 필요한 움직임이며 작은 요소를 크게 보여주거나 작은 요소에 숨겨져 있던 정보를 보여줄 때 사용합니다. 
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/5_3_Movement_Scale.mp4" type="video/mp4">
                            </video>
                            <p>&lt;갤러리서비스 - 사진을 Tap 했을 때의 모션&gt;</p>
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
                            앱의 첫 시작을 알리는 화면이며 라인 요소를 통해 아이콘과 서비스의  로고나 타이틀을 표현합니다. 같은 서비스나 아이콘은 다른 디바이스에서도 동일한 모션으로 표현합니다. 
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/6_component_splash_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 스플래시 모션&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/6_component_splash_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;갤러리서비스 - 스플래시 모션&gt;</p>
                            </div>
                        </div>
                        
                        <div class="content-sub-title">
                            OnBoarding
                        </div>
                        <div class="content-description">
                            서비스를 소개하는 페이지이며, 일러스트레이션에 모션을 적용하여 더 매력적이며 사용자가 서비스를 쉽게 이해하고 흥미롭게 사용할 수 있습니다. 
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/6_component_onboarding.mp4" type="video/mp4">
                            </video>
                            <p>&lt;뮤직서비스 - 온보딩 일러스트 모션&gt;</p>
                        </div>

                        
                        <div class="content-sub-title">
                            Page Control
                        </div>
                        <div class="content-description">
                            페이지 네비게이션 시 나타나는 모션입니다. 일점이나 선의 이동이 이동방향을 알려주며, 선과 면의 요소가 연결되고 일관성 있게 합니다.<br>위치 및 영역에 따라 선의 길이와 속도가 비례하여 표현합니다.
                        </div>
                        <div class="center-video" style="margin-top:58px;">
                            <video controls preload="metadata" class="video">
                                <source src="/static/assets/motion/6_component_Page Control.mp4" type="video/mp4">
                            </video>
                            <p>&lt;뮤직서비스 - 페이지 네비게이션 모션&gt;</p>
                        </div>
                        
                        
                        <div class="content-sub-title">
                            Entering Scene
                        </div>
                        <div class="content-description">
                            스플래시 또는 온보딩 이후 서비스의 첫 화면이 등장할 때 효과이며 밖에서 안으로 몰입하는 모션으로 모든 오브젝트와 텍스트 요소가 디졸브 되면서 나타납니다. 
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_EnteringScene_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 첫 진입을 알리는 모션&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_EnteringScene_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;갤러리서비스 - 첫 진입을 알리는 모션&gt;</p>
                            </div>
                        </div>
                        
                        <div class="content-sub-title">
                            Color Effect
                        </div>
                        <div class="content-description">
                            이미지를 차지하고 있는 우세한 색상을 사용하고 서비스의 특성을 고려하여 분위기를 만들어 사용자에게 즐거움과 흥미를 제공할 때 사용합니다. 
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_ColorEffect_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 음악이 플레이 될 때의 일렁이는 모션&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_ColorEffect_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;갤러리서비스 - 이미지가 로딩 될 때의 나타내는 색상 모션&gt;</p>
                            </div>
                        </div>

                        <div class="content-sub-title">
                            Cascade Effect
                        </div>
                        <div class="content-description">
                            페이지 네비게이션 시 요소들을 재배열할 때 나타나는 모션입니다. 목록의 경우 위에서 아래로 재배열되며 격자화면에서 재배열 될 때에는 각 요소들이 순차적으로 재배열 되도록 사용합니다.
                        </div>
                        <div class="half-container">
                            <div class="linear-video" style="width:360px;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_CascadeEffect_m.mp4" type="video/mp4">
                                </video>
                                <p>&lt;뮤직서비스 - 음원 목록이나 앨범이 재배열 할 때 나타나는 모션&gt;</p>
                            </div>
                            <div class="linear-video" style="width:360px; float:right;">
                                <video controls preload="metadata" class="video">
                                    <source src="/static/assets/motion/7_Transition_CascadeEffect_g.mp4" type="video/mp4">
                                </video>
                                <p>&lt;갤러리서비스 - Pinch시 이미지를 재배열 할 때 나타나는 모션&gt;</p>
                            </div>
                        </div>
                    </div>

                    <div class="content" id="interactions">
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

