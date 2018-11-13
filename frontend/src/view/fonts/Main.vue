<template>
    <div>
        <Gnb />

        <div class="main-container">
            <div class="side-container">
                <p class="side-title">FONTS</p>
                <div class="side-divider"></div>
                <ul class="side-nav">
                    <li @click="moveCategory('latin_related')" class="active category" id="latin_related">LATIN RELATED
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('latin')" class="sub-category" id="latin">Latin</li>
                            <li @click="moveSubCategory('cryllic')" class="sub-category" id="cryllic">Cryllic</li>
                            <li @click="moveSubCategory('greek')" class="sub-category" id="greek">Greek</li>
                            <li @click="moveSubCategory('armenian')" class="sub-category" id="armenian">Armenian</li>
                            <li @click="moveSubCategory('georgian')" class="sub-category" id="georgian">Georgian</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('middle_east_asian')" class="category" id="middle_east_asian">MIDDLE EAST ASIAN
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('arabic')" class="sub-category" id="arabic">Arabic (Urdu, Farsi)</li>
                            <li @click="moveSubCategory('hebrew')" class="sub-category" id="hebrew">Hebrew</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('north_east_asian')" class="category" id="north_east_asian">NORTH EAST ASIAN
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('korean')" class="sub-category" id="korean">Korean</li>
                            <li @click="moveSubCategory('simplified_chinese')" class="sub-category" id="simplified_chinese">Simplified Chinese<br>(China)</li>
                            <li @click="moveSubCategory('traditional_chinese')" class="sub-category" id="traditional_chinese">Traditional Chinese<br>(H.K. / Taiwan)</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('south_east_asian')" class="category" id="south_east_asian">SOUTH EAST ASIAN
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('thai')" class="sub-category" id="thai">Thai</li>
                            <li @click="moveSubCategory('lao')" class="sub-category" id="lao">Lao</li>
                            <li @click="moveSubCategory('myanmar')" class="sub-category" id="myanmar">Myanmar</li>
                            <li @click="moveSubCategory('khmer')" class="sub-category" id="khmer">Khmer</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('south_west_asian')" class="category" id="south_west_asian">SOUTH WEST ASIAN
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('devanagari')" class="sub-category" id="devanagari">Devanagari<br>(Hindi, Nepali, Marathi)</li>
                            <li @click="moveSubCategory('bangla')" class="sub-category" id="bangla">Bangla<br>(Bengali, Assamese)</li>
                            <li @click="moveSubCategory('gujarati')" class="sub-category" id="gujarati">Gujarati</li>
                            <li @click="moveSubCategory('tamil')" class="sub-category" id="tamil">Tamil</li>
                            <li @click="moveSubCategory('malaylam')" class="sub-category" id="malaylam">Malaylam</li>
                            <li @click="moveSubCategory('telugu')" class="sub-category" id="telugu">Telugu</li>
                            <li @click="moveSubCategory('kannada')" class="sub-category" id="kannada">Kannada</li>
                            <li @click="moveSubCategory('gurmukhi')" class="sub-category" id="gurmukhi">Gurmukhi (Punjabi)</li>
                            <li @click="moveSubCategory('odia')" class="sub-category" id="odia">Odia (Oriya)</li>
                            <li @click="moveSubCategory('olchiki')" class="sub-category" id="olchiki">OlChiki</li>
                            <li @click="moveSubCategory('sinhala')" class="sub-category" id="sinhala">Sinhala</li>
                        </ul>
                    </li>
                    <li @click="moveCategory('african')" class="category" id="african">AFRICAN
                        <ul class="sub-nav">
                            <li @click="moveSubCategory('ethipoic')" class="sub-category" id="ethipoic">Ethiopic</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-container">
                <div class="serach-container">
                    <input type="text" class="serach" id="search-input" placeholder="SEARCH">
                </div>
                <b-dropdown class="download" no-caret variant="white" ref="labels_drop">
                    <template slot="button-content">
                        <span class="text" >DOWNLOADS ▾</span>
                    </template>
                    <div class="btn-white">
                        <p class="title">All Languages</p>
                        <p class="content">FULL PACKAGE_DEVICE.ZIP</p>
                    </div>
                    <div class="btn-white">
                        <p class="title">All Languages</p>
                        <p class="content">FULL PACKAGE_MARCOMM.ZIP</p>
                    </div>
                </b-dropdown>
                <div class="font-container" style="margin-top: 115px;">
                    <div class="main-title" style="text-align:left;">Samsung One Font</div>
                    <div class="main-description" style="text-align:left; margin-top: 24px;">
                        SamsungOne is a family of scripts covering 26 writing systems, more 400 languages, <br>
                        and over 25,000 glyphs, creating a truly global typeface. <br>
                        Choose between Device & Marcomm (Print, Web, Video) fonts when downloading
                    </div>
                    <div class="category-item" id="latin_related">
                        <p>Latin Related</p>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_lat_01.jpg">
                            <img src="/static/images/fonts/font_main_lat_02.jpg">
                            <img src="/static/images/fonts/font_main_lat_03.jpg">
                            <img src="/static/images/fonts/font_main_lat_04.jpg">
                            <img src="/static/images/fonts/font_main_lat_05.jpg">
                        </div>
                    </div>
                    <div class="category-item" id="latin_related">
                        <p>MIDDLE EAST ASIAN</p>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_mideast_01.jpg">
                            <img src="/static/images/fonts/font_main_mideast_02.jpg">
                        </div>
                    </div>
                    <div class="category-item" id="latin_related">
                        <p>NORTH EAST ASIAN</p>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_northeast_01.jpg">
                            <img src="/static/images/fonts/font_main_northeast_02.jpg">
                            <img src="/static/images/fonts/font_main_northeast_03.jpg">
                        </div>
                    </div>
                    <div class="category-item" id="latin_related">
                        <p>SOUTH EAST ASIAN</p>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_southeast_01.jpg">
                            <img src="/static/images/fonts/font_main_southeast_02.jpg">
                            <img src="/static/images/fonts/font_main_southeast_03.jpg">
                            <img src="/static/images/fonts/font_main_southeast_04.jpg">
                        </div>
                    </div>
                    <div class="category-item" id="latin_related">
                        <p>SOUTH WEST ASIAN</p>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_south_west_01.jpg">
                            <img src="/static/images/fonts/font_main_south_west_02.jpg">
                            <img src="/static/images/fonts/font_main_south_west_03.jpg">
                            <img src="/static/images/fonts/font_main_south_west_04.jpg">
                            <img src="/static/images/fonts/font_main_south_west_05.jpg">
                        </div>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_south_west_06.jpg">
                            <img src="/static/images/fonts/font_main_south_west_07.jpg">
                            <img src="/static/images/fonts/font_main_south_west_08.jpg">
                            <img src="/static/images/fonts/font_main_south_west_09.jpg">
                            <img src="/static/images/fonts/font_main_south_west_10.jpg">
                        </div>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_south_west_11.jpg">
                        </div>
                    </div>
                    <div class="category-item" id="latin_related">
                        <p>AFRICAN</p>
                        <div class="items">
                            <img src="/static/images/fonts/font_main_africa_01.jpg">
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
    }
    ,mounted:function(){
        this.pageChange();
    }
    ,methods :{
        pageChange(){
            if(location.hash.includes("latin_related"))
                this.navChange('latin_related');
            else if(location.hash.includes("middle_east_asian"))
                this.navChange('middle_east_asian');
            else if(location.hash.includes("north_east_asian"))
                this.navChange('north_east_asian');
            else if(location.hash.includes("south_east_asian"))
                this.navChange('south_east_asian');
            else if(location.hash.includes("south_west_asian"))
                this.navChange('south_west_asian');
            else if(location.hash.includes("african"))
                this.navChange('african');
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
            $("ul.fonts-sub li.active").removeClass("active");
            $("ul.fonts-sub li#"+category).addClass("active");
        }
        ,subNavChange(sub){
            $(".sub-nav .sub-category.active").removeClass("active");
            $(".sub-nav .sub-category#"+sub).addClass("active");

        }
    }
}
</script>

<style scoped>
.category-item{
    margin-top:48px;
}
.category-item p{
    font-size: 14px;
    color :rgba(0,0,0,0.8);
    font-weight: 600;
}
.category-item .items{
    margin-top: 18px;
}
.category-item .items img:not(:first-child){
    margin-left: 68px;
}
</style>

