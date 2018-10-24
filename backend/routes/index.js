// restAPIs
var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post('/login', function (req, res, next) {
	var id = req.body.id;
	var password = req.body.password;

	db.user.find({
		'id': id,
		'password': password
	}).limit(1).exec(function (err, data) {
		var result ={code: 0,msg:''};
		req.session.login = true;
		if (!err && data.length) {
			req.session.login = true;
			req.session.login_email = data[0].id;
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

router.post('/logout', function (req, res, next) {
	req.session.destroy(function (err) {
		res.redirect('/');
	});
});

module.exports = router;
