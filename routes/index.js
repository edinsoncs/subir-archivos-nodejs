var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function(req, res, next){
	if(req.url) {
		res.render('index', {
			title: 'subeimg'
		});
	}
	
});

module.exports = router;