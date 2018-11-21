// restAPIs
var express = require('express');
var router = express.Router();
var async = require('async');
var fs = require('fs');


router.post('/login', function (req, res, next) {
	var email = req.body.email;
	var password = req.body.password;

	db.user.find({
		'email': email,
		'password': password
	}).limit(1).exec(function (err, data) {
		var result ={code: 0,msg:''};
		req.session.login = true;
		if (!err && data.length) {
			req.session.login = true;
			req.session.login_email = data[0].email;
			if(data[0].level>1){
				req.session.admin = true;
			} else {
				req.session.admin = false;
			}
			result.code = 0;
			result.admin = req.session.admin;
			result.msg = "로그인에 성공하였습니다.";
		}else {
			result.code = 3001;
			result.msg = "아이디 또는 비밀번호 오류입니다.";
		}
		res.json(result);
	});
});

router.post('/signup', function (req, res, next) {
	var email = req.body.email;
	var password = req.body.password;
	var newUser = new db.user({
		'email': email,
		'password': password,
		'level' : 10
	});
	newUser.save(function(err){
		var result ={code: 0,msg:''};
		if(err){
			result.code = 3010;
			if(err.code == 11000){
				result.msg="중복된 이메일입니다.";
			}else {
				result.msg="가입에 실패하였습니다. 잠시후 다시 시도해주세요.";
			}
		}else {
			result.code = 0;
			result.msg = "가입에 성공하였습니다.";
		}
		res.json(result);
	});
});
router.post('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		res.redirect('/login');
	});
});


router.get('/fonts',function(req,res,next){
	db.category.find({
		'type' : "FONTS"
	}).sort({
		"order" : 1
	}).exec(function(err,data){
		var result ={code: 0,msg:''};
		var categories = [];
		if (!err && data.length) {
			data.forEach(function(item){
				categories.push({
					'_id' : item._id
					,'name' : item.name
					,'fonts' : []
				});
			})
			async.each(categories,fontFind,function(err){
				if(err){
					console.log(err);
					result.code = 3002;
					result.msg = err;
				}else {
					result.code = 0;
					result.data = categories;
				}
				res.json(result);
			});
		}else {
			result.code = 3001;
			result.msg = "서버에서 에러가 발생하였습니다.";
			res.json(result);
		}
	});

})
function fontFind(item,doneCallback){
	db.font.find({
		'category' : item.name
	}).sort({
		"order" : 1	
	}).exec(function(err,data){
		if (!err) {
			item.fonts = data;
			console.log(item);
			doneCallback(null);	
		}else if(error){
			doneCallback(new Error("font error"));
		}
	});
}	

module.exports = router;
