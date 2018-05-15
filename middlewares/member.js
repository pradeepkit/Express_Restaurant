'use strict';
var Member = require('../models/Member');

function member(req, res){
    Member.find({}, function (err, blogs) {
        if (err) return err;
        res.json(blogs);
    })
}

module.exports = member;