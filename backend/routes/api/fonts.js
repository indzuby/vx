
var express = require('express');
var router = express.Router();
var async = require('async');
var multer = require('multer')
const path = require('path');
var fs = require('fs');
var fontPath = 'uploads/fonts/';


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, fontPath);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  }),
});

router.get('/',function(req,res,next){
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
					'_id' : item.name.replace(/ /gi,"_").toLowerCase()
					,'category_id' : item._id
					,'order' : item.order
					,'name' : item.name
					,'fonts' : []
				});
			})
			async.each(categories,fontFind,function(err){
				if(err){
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
router.post('/',upload.fields([{ name: 'thumbnail' }, { name: 'downloadDevice' }, { name: 'downloadMarcomm' }]),function(req,res,next){
	var isEdit = false;
	var result ={code: 0,msg:''};
	if(req.body.font_id!==undefined && req.body.font_id!==undefined && req.body.font_id!==''){
		isEdit = true;
	}
	console.log(isEdit);
	if(isEdit){
		db.font.findById(req.body.font_id,function(err,font){
			font.name = req.body.name;
			font.category = req.body.category;
			font.order = req.body.order;

			if(req.files.thumbnail!==null && req.files.thumbnail!==undefined){
				font.thumbnail = "/api/"+fontPath+req.files.downloadDevice[0].filename;
			}
			if(req.files.downloadDevice!==null && req.files.downloadDevice!==undefined){
				font.downloadDevice = "/api/"+fontPath+req.files.downloadDevice[0].filename;
			}
			if(req.files.downloadMarcomm!==null && req.files.downloadMarcomm!==undefined){
				font.downloadMarcomm = "/api/"+fontPath+req.files.downloadMarcomm[0].filename;
			}
			fontSave(font,res,isEdit);
		});
	}else {
		db.font.count({
			'category' : req.body.category
		}).exec(function(err,count){
			var newFont = db.font({
				'name' : req.body.name
				,'category' : req.body.category
				,'order':count+1
			})
			if(req.files.thumbnail===null || req.files.thumbnail===undefined){
				result.code = 4008;
				result.msg = "폰트 미리보기 이미지를 반드시 등록해주세요.";
				res.json(result);
			}else {
				newFont.thumbnail = "/api/"+fontPath+req.files.thumbnail[0].filename;
			}
			if(req.files.downloadDevice!==null && req.files.downloadDevice!==undefined){
				newFont.downloadDevice = "/api/"+fontPath+req.files.downloadDevice[0].filename;
			}
			if(req.files.downloadMarcomm!==null && req.files.downloadMarcomm!==undefined){
				newFont.downloadMarcomm = "/api/"+fontPath+req.files.downloadMarcomm[0].filename;
			}
			fontSave(newFont,res,isEdit);
		})
	}
})

router.delete('/',function(req,res,next){
	var id = req.body.id;
	db.font.remove({
		'_id' : id
	}).exec(function(err,data){
		var result ={code: 0,msg:''};
		if(err){
			result.code = 4020;
			result.msg="삭제에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
		}else {
			result.code = 0;
			result.msg = "삭제에 성공하였습니다.";
		}
		res.json(result);
	});
});


function fontSave(font,res,isEdit){
	var result ={code: 0,msg:''};
	font.save(function(err){
		if(err){
			result.code = 4002;
			result.msg = "등록중 에러가 발생하였습니다. 새로고침 후 다시 시도해주세요.";
		}else {
			result.code = 0;
			if(isEdit)
				result.msg = "폰트가 수정되었습니다.";
			else
				result.msg = "폰트가 등록되었습니다.";
		}
		res.json(result);
	})
}
function fontFind(item,doneCallback){
	db.font.find({
		'category' : item.name
	}).sort({
		"order" : 1	
	}).exec(function(err,data){
		if (!err) {
			item.fonts = data;
			doneCallback(null);	
		}else if(error){
			doneCallback(new Error("font error"));
		}
	});
}	

router.use("/files", express.static('uploads/fonts'));

module.exports = router;
