'use strict';
var Service = require('../models/Service');

function service(req, res){
    Service.find({}, function (err, blogs) {
        if (err) return err;
        res.json(blogs);
    })
}

module.exports = service;