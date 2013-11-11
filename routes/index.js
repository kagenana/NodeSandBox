
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mobile = require('./mobile');
exports.widget = require('./widget');