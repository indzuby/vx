// restAPIs
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function (req, res, next) {
	console.log(1);
	if(req.session.login){
		res.sendFile(path.join(__dirname, '../public', 'index.html'))
	}else {
		res.redirect("/login");
	}
});


module.exports = router;
