
var express = require('express');
var router = express.Router();
var async = require('async');


// router.get('/:type',function(req,res,next){
// 	var keyword = req.query.keyword;
// 	var findQuery = {
// 		'type' : "FONTS"
// 	};

// 	if(keyword!==undefined && keyword!==null){
// 		var regex = new RegExp(keyword,"i");
// 		findQuery.$or = [
// 			{"name":{$regex : regex}}
// 		];
// 	}
// 	db.category.find(findQuery).sort({
// 		"order" : 1
// 	}).exec(function(err,data){
// 		var result ={code: 0,msg:''};
// 		if (!err) {
// 			var categories = [];
// 			data.forEach(function(item){
// 				categories.push({
// 					'_id' : item.name.replace(/ /gi,"_").toLowerCase()
// 					,'category_id' : item._id
// 					,'order' : item.order
// 					,'name' : item.name
// 					,'fonts' : []
// 				});
// 			})
// 			result.code = 0;
// 			result.data = categories;
// 			res.json(result);
// 		}else {
// 			result.code = 3001;
// 			result.msg = "서버에서 에러가 발생하였습니다.";
// 			res.json(result);
// 		}
// 	});

// })


router.post('/:type',function(req,res,next){
    var name = req.body.name;
	var type = req.params.type.toUpperCase();
	db.category.find({
		'type' : type
	}).sort({
		"order" : -1
	}).limit(1).exec(function(err,data){
		var count = 0;
		if(data!=null && data.length>0){
			count = data[0].order;
		}
        var newCategory = db.category({
            'name': name
            ,'type' : type
            ,'order' : parseInt(count)+1
        });
        newCategory.save(function(err){
			var result ={code: 0,msg:''};
            if(err){
                result.code = 3010;
                if(err.code == 11000){
                    result.msg="중복된 이름입니다.";
                }else {
                    result.msg="등록에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
                }
            }else {
                result.code = 0;
                result.msg = "등록에 성공하였습니다.";
            }
            res.json(result);
        })
	});
});


router.patch('/:type',function(req,res,next){
	var name = req.body.name;
	var id = req.body.category_id;
	var order = req.body.order;
	db.category.findById(id,function(err,cate){
		var result ={code: 0,msg:''};
		if(err){
			result.code = 3040;
			result.msg="수정에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
			res.json(result);
		}else {
			cate.name = name;
			cate.order = order;
			cate.save(function(err,cate2){
				if(err){
					result.code = 3040;
					result.msg="수정에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
				}else {
					result.code = 0;
					result.msg = "수정에 성공하였습니다.";
				}
				res.json(result);
			})
		}
	});
});



router.delete('/',function(req,res,next){
	var id = req.body.id;
	console.log(id);
	db.category.remove({
		'_id' : id
	}).exec(function(err,data){
		var result ={code: 0,msg:''};
		if(err){
			result.code = 3020;
			result.msg="삭제에 실패하였습니다. 새로고침 후 다시 시도해주세요.";
		}else {
			result.code = 0;
			result.msg = "삭제에 성공하였습니다.";
		}
		res.json(result);
	});
});


module.exports = router;
