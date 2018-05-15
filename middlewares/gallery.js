'use strict';
var Gallery = require('../models/Gallery');

function gallery(req, res){
    Gallery.find({}, function (err, galleries) {
        if (err) return err;
        res.json(galleries);
    })
}

module.exports = gallery;