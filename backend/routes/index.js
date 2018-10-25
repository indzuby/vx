// restAPIs
var express = require('express');
var router = express.Router();
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
		'password': password
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
		res.redirect('/');
	});
});

module.exports = router;
