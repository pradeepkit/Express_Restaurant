'use strict';
var Comment = require('../models/Comment');

function getComment(req, res){
	var blog_id = req.params.blog_id || req.body.blog_id;
    Comment.find({blog_id : blog_id}, function (err, comments) {
        if (err) return err;
        res.json(comments);
    })
}

function postComment(req, res, next){
   	var comment = new Comment(req.body);
    comment.save(function (err) {
       	if (err) return console.log(err);
       	next();
   	});
}

module.exports = {
	get : getComment,
	post : postComment
};