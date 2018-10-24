
$(window).bind("touchend click",function(e){
	if($(e.target).hasClass("modal") || $(e.target).hasClass("close") || $(e.target).hasClass("confirm")  || $(e.target).hasClass("close2")){
		$(".modal").hide();
		$('.youtube').each(function(){
			this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		});
	}
});



$(window).on("scroll",function(){
	var scrollValue = $(window).scrollTop();
	if($(".facebook-layout").position().top-150 < scrollValue){
		$(".header li.active").removeClass("active");
		$(".header li#facebook").addClass("active");
	}else if($(".reserved-layout").position().top-150 < scrollValue) {
		$(".header li.active").removeClass("active");
		$(".header li#reserved").addClass("active");
	}else {
		$(".header li.active").removeClass("active");
		$(".header li#main").addClass("active");
	}
});

$(document).ready(function(){

	$("#youtube-prev").click(function(){
		// $('#youtube2').each(function(){
		// 	this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		// });
		$('#youtube1').each(function(){
			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		});
		$('#youtube1').show();
		$('#youtube2').hide();
	});
	$("#youtube-next").click(function(){
		$('#youtube1').each(function(){
			this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		});
		// $('#youtube2').each(function(){
		// 	this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		// });
		$('#youtube1').hide();
		$('#youtube2').show();
	})


	$(".header li#main").click(function(){
		goToPage(1);
	});
	$(".header li#reserved, #main-resereved").click(function(){
		goToPage(2);
		// window.scrollTo(0,$(".reserved-layout").position().top);
	});
	$(".header li#facebook").click(function(){
		goToPage(3);
		// window.scrollTo(0,$(".facebook-layout").position().top);
	});
	$(".radio-group").click(function(){
		$(".radio-group.active").removeClass("active");
		$(this).addClass("active");
	})
	$(".radio-label").click(function(){
		$(".radio-group.active").removeClass("active");
		$(this).prev().addClass("active");
	});
	$(".checkbox-group").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active")
		}else {
			$(this).addClass("active")
		}
	})
	$(".checkbox-label").click(function(){
		if($(this).prev().hasClass("active")){
			$(this).prev().removeClass("active")
		}else {
			$(this).prev().addClass("active")
		}
	});

	$("input[name=submit]").click(function(){
		var device = $(".radio-group.active").attr("id");
		var phone = $("input[name=phone]").val();
		var phoneCheck = /^[0-9]*$/;
		if(typeof device === "undefined"){
			$("#storeModal").show();
			return;
		}
		if(phone.length<=0) {
			$("#phoneEmptyModal").show();
			return;
		}if(phone.length<10 || phone.length>11 || !phoneCheck.test(phone)) {
			$("#phoneErrorModal").show();
			return;
		}
		if(!($("#policy1").hasClass("active"))) {
			$("#policyModal").show();
			return ;
		}
		  $.post('/book', {
		      'phoneNumber': phone,
		      'platform': device
		    }, function(res) {
		      if (res.result) {
		      	$("#confirmModal").show();
		        fbq('track', 'CompleteRegistration');
		        // ga('send', 'event', '사전예약신청', '예약완료', '사전예약신청완료');
		        gtag('event', '사전예약신청', {  'event_category': '사전예약',  'event_label': '등록완료'});
		      } else {
		        if (res.code == '1' || res.code == '3') { 
		        	alert("서버오류가 발생하였습니다. 잠시후 다시 시도해주세요.")
		        } else if (res.code == '2') {
		      		$("#reservedModal").show();
		        }
		      }
		    });
	});
})