/**
 * New node file
 */

var mobiles = [
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
  detail: 'this post is dummy',
  username: 'Mr.Nodeman',
  created_at: new Date()
}];

exports.page = function(req, res) {
  var id = req.param('id');
  res.render('mobile/page', {
    title: mobiles[id -1].name,
    id: id,
    posts: dummy_posts
  });
};