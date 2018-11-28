
var express = require('express');
var router = express.Router();
var async = require('async');
var multer = require('multer')
const path = require('path');
var fs = require('fs');
var fontPath = 'uploads/';


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, fontPath);
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf()+"_"+file.fieldname+ path.extname(file.originalname));
    }
  }),
});

const package_upload = multer({
	storage: multer.diskStorage({
	  destination: function (req, file, cb) {
		cb(null, fontPath);
	  },
	  filename: function (req, file, cb) {
		cb(null, file.fieldname + path.extname(file.originalname));
	  }
	}),
  });

router.get('/',function(req,res,next){
	var keyword = req.query.keyword;;
	var findQuery = {
		'category' : ""
	};

	if(keyword!==undefined && keyword!==null){
		var regex = new RegExp(keyword,"i");
		findQuery.$or = [
			{"name":{$regex : regex}}
			,{"category":{$regex : regex}}
		];
	}
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
			async.each(categories,function(item,callback){
				findQuery.category = item.name
				db.font.find(findQuery).sort({
					"order" : 1	
				}).exec(function(err,data){
					if (!err) {
						item.fonts = data;
						callback(null);	
					}else if(error){
						callback(new Error("font error"));
					}
				});
			},function(err){
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
	var type = 'FONTS';
	var result ={code: 0,msg:''};
	if(req.body.font_id!==undefined && req.body.font_id!==undefined && req.body.font_id!==''){
		isEdit = true;
	}

	console.log(isEdit);
	if(isEdit){
		async.waterfall([
			function(cb){
				db.font.findById(req.body.font_id,function(err,font){
					if(err) {
						cb(err)
					}else {
						font.name = req.body.name;
						font.category = req.body.category;
						font.order = req.body.order;
						cb(null,font);
					}
				});
			},function(font,cb){
				console.log("thumb");
				if(req.files.thumbnail!==null && req.files.thumbnail!==undefined){
					var url = "/api/"+fontPath+req.files.thumbnail[0].filename;
					if(font.thumbnail!==null && font.thumbnail!==undefined && font.thumbnail!==''){
						fileDelete(font.thumbnail,function(err){
							if(err){
								cb(err);
							}else {
								font.thumbnail = url;
								var file = db.file({
									'name' : req.files.thumbnail[0].path
									,'url' : url
									,'type' : type
								})
								file.save(function(err){
									if(err)
										cb(err);
									else 
										cb(null,font);
								});
							}
						});
					}
				}else {
					cb(null,font);
				}
			}
			,function(font,cb){
				if(req.files.downloadDevice!==null && req.files.downloadDevice!==undefined){
					var url = "/api/"+fontPath+req.files.downloadDevice[0].filename;
					if(font.downloadDevice!==null && font.downloadDevice!==undefined && font.downloadDevice!==''){
						fileDelete(font.downloadDevice,function(err){
							if(err){
								cb(err);
							}else {
								font.downloadDevice = url;
								var file = db.file({
									'name' : req.files.downloadDevice[0].path
									,'url' : url
									,'type' : type
								})
								file.save(function(err){
									if(err)
										cb(err);
									else 
										cb(null,font);
								});
							}
						});
					}
				}else {
					cb(null,font);
				}
			}
			,function(font,cb){
				if(req.files.downloadMarcomm!==null && req.files.downloadMarcomm!==undefined){
					var url = "/api/"+fontPath+req.files.downloadMarcomm[0].filename;
					if(font.downloadMarcomm!==null && font.downloadMarcomm!==undefined && font.downloadMarcomm!==''){
						fileDelete(font.downloadMarcomm,function(err){
							if(err){
								cb(err);
							}else {
								font.downloadMarcomm = url;
								var file = db.file({
									'name' : req.files.downloadMarcomm[0].path
									,'url' : url
									,'type' : type
								})
								file.save(function(err){
									if(err)
										cb(err);
									else 
										cb(null,font);
								});
							}
						});
					}
				}else {
					cb(null,font);
				}
			}
			,function(font,cb){
				fontSave(font,res,isEdit);
			}
			,function(err){
				result.code = 4002;
				result.msg = "등록중 에러가 발생하였습니다. 새로고침 후 다시 시도해주세요.";
				result.json(result);	
			}
		])
		
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
				var url = "/api/"+fontPath+req.files.thumbnail[0].filename;
				newFont.thumbnail = url;
				var file = db.file({
					'name' : req.files.thumbnail[0].path
					,'url' : url
					,'type' : type
				})
				file.save(function(err){});
			}
			if(req.files.downloadDevice!==null && req.files.downloadDevice!==undefined){
				var url = "/api/"+fontPath+req.files.downloadDevice[0].filename;
				newFont.downloadDevice = url;
				var file = db.file({
					'name' : req.files.downloadDevice[0].path
					,'url' : url
					,'type' : type
				})
				file.save(function(err){});
			}
			if(req.files.downloadMarcomm!==null && req.files.downloadMarcomm!==undefined){
				var url = "/api/"+fontPath+req.files.downloadMarcomm[0].filename;
				newFont.downloadMarcomm = url;
				var file = db.file({
					'name' : req.files.downloadMarcomm[0].path
					,'url' : url
					,'type' : type
				})
				file.save(function(err){});
			}
			fontSave(newFont,res,isEdit);
		})
	}
})
router.get('/package',function(req,res,next){
	var result ={code: 0,data:{device:'',marcomm:''},msg:''};
	async.parallel({
		'device' : (cb) => {
			db.file.find({
				'type' : 'PACKAGE_DEVICE'
			}).exec(function(err,data){
				if(err){
					cb(err);
				}else {
					if(data.length>0)
						result.data.device = data[0];
					cb(null);
				}
			})
		}
		,'marcomm' : (cb) => {
			db.file.find({
				'type' : 'PACKAGE_MARCOMM'
			}).exec(function(err,data){
				if(err){
					cb(err);
				}else {
					if(data.length>0)
						result.data.marcomm = data[0];
					cb(null);
				}
			})
		}
	},(err) => {
		if (err) {
			result.code = 5037;
			result.msg = "패키지 파일을 찾을수 없습니다.";
		}else {
			result.code = 0;
		}
		res.json(result);
	})
})
router.post('/package',package_upload.fields([{ name: 'packageDevice' }, { name: 'packageMarcomm' }]),function(req,res,next){

	var result ={code: 0,msg:'업로드되었습니다.'};
	
	async.waterfall([
		function(cb){
			if(req.files.packageDevice!==null && req.files.packageDevice!==undefined){
				var url = "/api/"+fontPath+req.files.packageDevice[0].filename;
				db.file.find({'type':'PACKAGE_DEVICE'}).exec(function(err,data){
					var file ;
					if(data.length>0) {
						file = data[0];
						file.name = req.files.packageDevice[0].path;
						file.url = url;
					}else {
						file = db.file({
							'name' : req.files.packageDevice[0].path
							,'url' : url
							,'type':'PACKAGE_DEVICE'
						});
					}
					cb(null,file);
				})
			}else {
				cb(null,null)
			}
		}
		,function(file,cb){
			if(file!=null){
				file.save(function(err){
					var result ={code: 0,msg:''};
					if(err){
						cb(err);
					}else {
						cb(null);
					}
				})
			}else {
				cb(null);
			}
		}
		,function(cb){
			if(req.files.packageMarcomm!==null && req.files.packageMarcomm!==undefined){
				var url = "/api/"+fontPath+req.files.packageMarcomm[0].filename;
				db.file.find({'type':'PACKAGE_MARCOMM'}).exec(function(err,data){
					var file ;
					if(data.length>0) {
						file = data[0];
						file.name = req.files.packageMarcomm[0].path;
						file.url = url;
					}else {
						file = db.file({
							'name' : req.files.packageMarcomm[0].path
							,'url' : url
							,'type':'PACKAGE_MARCOMM'
						});
					}
					cb(null,file);
				})
			}else {
				cb(null,null);
			}
		}
		,function(file,cb){
			if(file!=null){
				file.save(function(err){
					var result ={code: 0,msg:''};
					if(err){
						cb(err);
					}else {
						result.code = 0;
						result.msg="업로드에 성공하였습니다.";
						res.json(result);
					}
				})
			}else {
				result.code = 0;
				result.msg="업로드에 성공하였습니다.";
				res.json(result);
			}
		}
		,function(err){
			result.code = 4020;
			result.msg="업로드에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
			res.json(result);
		}
	])
	
});

router.delete('/',function(req,res,next){
	var id = req.body.id;

	
	async.waterfall([
		function(cb){
			db.font.findById(id,function(err,font){
				if(err){
					cb(err);	
				}
				cb(null,font);
			})
		},function(font,cb){
			fileDelete(font.thumbnail,function(err){
				if(err)
					cb(err);
				else
					cb(null,font);
			});
			
		}
		,function(font,cb){
			fileDelete(font.downloadDevice,function(err){
				if(err)
					cb(err);
				else
					cb(null,font);
			});
		}
		,function(font,cb){
			fileDelete(font.downloadMarcomm,function(err){
				if(err)
					cb(err);
				else
					cb(null,font);
			});
		}
		,function(font,cb){
			font.remove(function(err,data){
				var result ={code: 0,msg:''};
				if(err){
					cb(err);
				}else {
					result.code = 0;
					result.msg = "삭제에 성공하였습니다.";
					res.json(result);
				}
			});
		},function(err){
			result.code = 4020;
			result.msg="삭제에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
			res.json(result);
		}
	])

});

function fileDelete(url,cb){
	db.file.find({
		'url' : url
	}).exec(function(err,file){
		console.log(url);
		if(err){
			cb(err);
		}
		else if(file.length>0){
			fs.unlinkSync(file[0].name);
			db.file.remove({'url' :url},function(err){
				if(err)
					cb(err);
				else {
					cb(null);
				}
			});
		}else {
			cb(null);
		}
	});
}

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
router.use("/files", express.static('uploads'));

module.exports = router;
