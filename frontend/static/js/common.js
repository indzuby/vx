var baseURI = '/api';
var processing = false;

function httpCall(url,type,data,callback){
	if(processing && type!="GET"){
		return;
	}
    if(type!="GET"){
        $(".loading").show();
        processing = true;
    }
	$.ajax({
        url : baseURI + url
        ,type : type
        ,data : data
        ,error : function(res){
            alert("서버에서 에러가 발생하였습니다. \n 잠시후 시도해 주세요.");
            if(processing){
                $(".loading").hide();
                processing = false;
            }
        }
        ,success : function(res){
            if(processing){
                $(".loading").hide();
                processing = false;
            }
            if(res.code <= 0){
                callback(res);
            }else {
                alert(res.msg);
            }
        }
    });
}

function httpFormData(url,id,data,callback){
	if(processing){
		return;
	}
	processing = true;
    $(".loading").show();
	$(id).ajaxSubmit({
        url : baseURI + url
        ,data : data
        ,error : function(res){
			processing = false;
            $(".loading").hide();
        }
        ,success : function(res){
			processing = false;
            $(".loading").hide();
            callback(res);
        }
    });
}

function openConfirmPopup(title, content, btn_text, status, is_alert, close_function,confirm_function){
    $("#confirm_popup").show();
    $("#confirm_popup #popup_header").text(title);
    $("#confirm_popup #popup_content").text(content);
    $("#confirm_popup #confirm_btn").text(btn_text);
    if(status == "error"){
        $("#confirm_popup #popup_content").css("color","#d0021b");
    }else if(status=="success"){
        $("#confirm_popup #popup_content").css("color","#4a90e2");
    }else {
        $("#confirm_popup #popup_content").css("color","#4a4a4a");
    }
    if(is_alert) {
        $("#confirm_popup #confirm_btn").hide();
    }else { 
        $("#confirm_popup #confirm_btn").show();
    }
    $("#confirm_popup #confirm_btn").unbind('click').click(confirm_function);
    $("#confirm_popup #close_btn").unbind('click').click(close_function);
}
$(document).ready(function(){
    $("#confirm_popup").click(function(event){
        if($(event.target).hasClass("close-area")) 
            $("#confirm_popup").hide();
    });
});

function hash(s) {
    /* Simple hash function. */
    var a = 1, c = 0, h, o;
    if (s) {
        a = 0;
        /*jshint plusplus:false bitwise:false*/
        for (h = s.length - 1; h >= 0; h--) {
            o = s.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
        }
    }
    return String(a);
};