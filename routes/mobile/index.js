/**
 * New node file
 */
var mobiles = [
  { url: '/mobile?id=1', name: 'Mobile Page 1'},
  { url: '/mobile?id=2', name: 'Mobile Page 2'},
  { url: '/mobile/1', name: 'Mobile Page 1'},
  { url: '/mobile/2', name: 'Mobile Page 2'}
];

exports.index = function(req, res){
  res.render('mobile/index', {
    title: 'Mobile',
    mobiles: mobiles
  });
};

var dummy_posts = [{
  title: 'dummy post',
  detail: 'mobile/1 でも mobile?id=1 でも同じところに飛ぶよ。',
  author: 'Mr.Nodeman',
  created_at: new Date()
}];

exports.page = function(req, res, next) {
  var id = req.param('id');
  if (!id) {
    return next();
  }
  res.render('mobile/page', {
    title: mobile[id - 1].name,
    id: id,
    posts: dummy_posts
  });
};