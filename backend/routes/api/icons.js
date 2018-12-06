
var express = require('express');
var router = express.Router();
var async = require('async');
var multer = require('multer')
const path = require('path');
var fs = require('fs');
var iconPath = 'uploads/icons/';

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, iconPath);
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf()+"_"+file.fieldname+ path.extname(file.originalname));
      }
    }),
  });
  
const package_upload = multer({
    storage: multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, iconPath);
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
		'type' : "ICONS"
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
					,'categories' : []
				});
			})
			async.each(categories,function(item,callback){
				// findQuery.category = item.name
				db.category.find({"category":item.name}).sort({
					"order" : 1	
				}).exec(function(err,data){
					if (!err) {
                        var subCategories = [];
                        data.forEach(function(item){
                            subCategories.push({
                                '_id' : item.name.replace(/ /gi,"_").toLowerCase()
                                ,'category_id' : item._id
                                ,'order' : item.order
                                ,'name' : item.name
                                ,'icons' : []
                            });
                        })
                        item.categories = subCategories;
						async.each(item.categories,function(item2,callback2){
                            findQuery.category = item2.name;
                            db.icon.find(findQuery).sort({
                                "order" : 1
                            }).exec(function(err2,data2){
                                if(!err2){
                                    item2.icons = data2;
                                    callback2(null);
                                }else {
                                    callback2(new Error("icons error"))
                                }
                            })
                        }
                        ,function(err){
                            console.log(err);
                            callback(err);
                        });
					}else 
						callback(new Error("category error"));
				});
            }
            ,function(err){
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
router.post('/',upload.fields([{ name: 'downloadPng' }, { name: 'downloadSvg' }]),function(req,res,next){
	var isEdit = false;
	var type = 'ICONS';
	var result ={code: 0,msg:''};
	if(req.body.icon_id!==undefined && req.body.icon_id!==undefined && req.body.icon_id!==''){
		isEdit = true;
	}

	console.log(isEdit);
	if(isEdit){
		async.waterfall([
			function(cb){
				db.icon.findById(req.body.icon_id,function(err,icon){
					if(err) {
						cb(err)
					}else {
						icon.name = req.body.name;
						icon.category = req.body.category;
						icon.order = parseInt(req.body.order);
						cb(null,icon);
					}
				});
			},function(icon,cb){
				if(req.files.downloadPng!==null && req.files.downloadPng!==undefined){
					var url = "/api/"+iconPath+req.files.downloadPng[0].filename;
					if(icon.downloadPng!==null && icon.downloadPng!==undefined && icon.downloadPng!==''){
						fileDelete(icon.downloadPng,function(err){
							if(err){
								cb(err);
							}else {
								icon.downloadPng = url;
								var file = db.file({
									'name' : req.files.downloadPng[0].path
									,'url' : url
									,'type' : type
								})
								file.save(function(err){
									if(err)
										cb(err);
									else 
										cb(null,icon);
								});
							}
						});
					}
				}else {
					cb(null,icon);
				}
			}
			,function(icon,cb){
				if(req.files.downloadSvg!==null && req.files.downloadSvg!==undefined){
					var url = "/api/"+iconPath+req.files.downloadSvg[0].filename;
					if(icon.downloadSvg!==null && icon.downloadSvg!==undefined && icon.downloadSvg!==''){
						fileDelete(icon.downloadSvg,function(err){
							if(err){
								cb(err);
							}else {
								icon.downloadSvg = url;
								var file = db.file({
									'name' : req.files.downloadSvg[0].path
									,'url' : url
									,'type' : type
								})
								file.save(function(err){
									if(err)
										cb(err);
									else 
										cb(null,icon);
								});
							}
						});
					}
				}else {
					cb(null,icon);
				}
			}
			,function(icon,cb){
				iconSave(icon,res,isEdit);
			}
			,function(err){
				result.code = 4002;
				result.msg = "등록중 에러가 발생하였습니다. 새로고침 후 다시 시도해주세요.";
				result.json(result);	
			}
		])
		
	}else {
		db.icon.find({
			'category' : req.body.category
		}).sort({
			"order" : -1
		}).limit(1).exec(function(err,data){
			var count = 0 ;
			if(data!=null && data.length>0){
				count = data[0].order;
			}
			var newIcon = db.icon({
				'name' : req.body.name
				,'category' : req.body.category
				,'order':parseInt(count)+1
			})
			if(req.files.downloadPng===null || req.files.downloadPng===undefined){
				result.code = 4008;
				result.msg = "아이콘 이미지를 반드시 등록해주세요.";
				res.json(result);
			}else {
				var url = "/api/"+iconPath+req.files.downloadPng[0].filename;
				newIcon.downloadPng = url;
				var file = db.file({
					'name' : req.files.downloadPng[0].path
					,'url' : url
					,'type' : type
				})
				file.save(function(err){});
			}
			if(req.files.downloadSvg!==null && req.files.downloadSvg!==undefined){
				var url = "/api/"+iconPath+req.files.downloadSvg[0].filename;
				newIcon.downloadSvg = url;
				var file = db.file({
					'name' : req.files.downloadSvg[0].path
					,'url' : url
					,'type' : type
				})
				file.save(function(err){});
			}
			iconSave(newIcon,res,isEdit);
		})
	}
})
router.get('/package',function(req,res,next){
    var result ={code: 0,data:{icon:''},msg:''};
    
    db.file.find({
        'type' : 'PACKAGE_ICON'
    }).exec(function(err,data){
        if(err || data.length==0){
			result.code = -1;
			result.msg = "패키지 파일을 찾을수 없습니다.";
        }else {
			result.code = 0;
            result.data.icon = data[0];
        }
        res.json(result);
    })
})
router.post('/package',package_upload.fields([{ name: 'packageIcon' }]),function(req,res,next){

	var result ={code: 0,msg:'업로드되었습니다.'};
	
	async.waterfall([
		function(cb){
			if(req.files.packageIcon!==null && req.files.packageIcon!==undefined){
                var url = "/api/"+iconPath+req.files.packageIcon[0].filename;
                console.log(url);
				db.file.find({'type':'PACKAGE_ICON'}).exec(function(err,data){
					var file ;
					if(data.length>0) {
						file = data[0];
						file.name = req.files.packageIcon[0].path;
						file.url = url;
					}else {
						file = db.file({
							'name' : req.files.packageIcon[0].path
							,'url' : url
							,'type':'PACKAGE_ICON'
						});
					}
					cb(null,file);
				})
			}else {
				cb(null,null)
			}
		}
		,function(file,cb){
            // console.log(file);
			if(file!=null){
				file.save(function(err){
					if(err){
						cb(err);
					}else {
                        result.code = 0;
                        result.msg="업로드에 성공하였습니다.";
                        res.json(result);
					}
				})
			}else {
				cb(new Error("업로드실패"));
			}
		}
		,function(err){
            console.log(err);
            if(err){
                result.code = 4020;
                result.msg="업로드에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
            }
			res.json(result);
		}
	])
	
});

router.delete('/',function(req,res,next){
	var id = req.body.id;

	
	async.waterfall([
		function(cb){
			db.icon.findById(id,function(err,icon){
				if(err){
					cb(err);	
				}
				cb(null,icon);
			})
		},function(icon,cb){
			fileDelete(icon.downloadPng,function(err){
				if(err)
					cb(err);
				else
					cb(null,icon);
			});
			
		}
		,function(icon,cb){
			fileDelete(icon.downloadSvg,function(err){
				if(err)
					cb(err);
				else
					cb(null,icon);
			});
		}
		,function(icon,cb){
			icon.remove(function(err,data){
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

function iconSave(icon,res,isEdit){
	var result ={code: 0,msg:''};
	icon.save(function(err){
		if(err){
			result.code = 4002;
			result.msg = "등록중 에러가 발생하였습니다. 새로고침 후 다시 시도해주세요.";
		}else {
			result.code = 0;
			if(isEdit)
				result.msg = "아이콘이 수정되었습니다.";
			else
				result.msg = "아이콘이 등록되었습니다.";
		}
		res.json(result);
	})
}
module.exports = router;
