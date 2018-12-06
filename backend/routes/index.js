// restAPIs
var express = require('express');
var router = express.Router();
var random = require("randomstring")
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
			result.id = data[0]._id;
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
		'level' : 1
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
router.patch('/changePassword',function(req,res,next){
	var id = req.body.id;
	var oldPassword = req.body.oldPassword;
	var newPassword = req.body.newPassword;
	var result ={code: 0,msg:''};
	async.waterfall([
		function(cb){
			db.user.findById(id,function (err, user) {
				
				if (!err && user.password === oldPassword) {
					cb(null,user);
				}else {
					result.code = 3001;
					result.msg = "아이디 또는 비밀번호 오류입니다.";
					res.json(result);
				}
			});
		}
		,function(user,cb){
			user.password = newPassword;
			user.save(function(err){
				if(err){
					cb(err);
				}else{
					result.code = 0;
					result.msg = "비밀번호을 변경하였습니다.";
					res.json(result);
				}
			})
		}
		,function(err){
			if(err){
				result.code = 3001;
				result.msg = "비밀번호 변경에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
				res.json(result);
			}
		}
	])
})
router.patch('/changePermission',function(req,res,next){
	var id = req.body.id;
	var result ={code: 0,msg:''};
	async.waterfall([
		function(cb){
			db.user.findById(id,function (err, user) {
				
				if (!err) {
					cb(null,user);
				}else {
					result.code = 3001;
					result.msg = "아이디 또는 비밀번호 오류입니다.";
					res.json(result);
				}
			});
		}
		,function(user,cb){
			user.level = 100 - user.level;
			user.save(function(err){
				if(err){
					cb(err);
				}else{
					result.code = 0;
					result.msg = "권한을 변경하였습니다.";
					res.json(result);
				}
			})
		}
		,function(err){
			if(err){
				result.code = 3001;
				result.msg = "권한 변경에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
				res.json(result);
			}
		}
	])
})
router.get("/password/:id",function(req,res,next){
	var id = req.params.id;

	async.waterfall([
		function(cb){
			db.user.findById(id,function(err,user) {
				if (!err) {
					cb(null,user);
				}else {
					cb(err);
				}
			});
		}
		,function(user,cb){
			var result ={code: 0,msg:''};
			var newPassword= random.generate(6);
			user.password = newPassword;
			user.save(function(err){
				if(err)
					cb(err);
				else {
					result.code = 0;
					result.data = newPassword;
					res.json(result);
				}
			})
		}
		,function(err){
			result.code = 3001;
			result.msg = "비밀번호 재발급에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
			res.json(result);
		}
	]);
});

router.get("/users",function(req,res,next){
	
	db.user.find().exec(function (err, data) {
		var result ={code: 0,msg:''};
		if (!err && data.length) {
			result.code = 0;
			result.data = data;
		}else {
			result.code = 3001;
			result.msg = "오류가 발생했습니다. 새로고침 후 다시시도해주세요.";
		}
		res.json(result);
	});
})



var category = require("./api/category");
var fonts = require("./api/fonts");
var icons = require("./api/icons");
router.use("/category",category);
router.use("/fonts",fonts);
router.use("/icons",icons);


router.use("/uploads", express.static('uploads'));

module.exports = router;
