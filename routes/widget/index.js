/**
 * New node file
 */

var widgets = [
  { url: '/widget?id=1', name: 'widget Page 1'},
  { url: '/widget?id=2', name: 'widget Page 2'},
  { url: '/widget/1', name: 'widget Page 1'},
  { url: '/widget/2', name: 'widget Page 2'}
];

exports.index = function(req, res){
  res.render('widget/index', {
    title: 'widget',
    widgets: widgets
  });
};

var dummy_posts = [{
  title: 'dummy post',
  detail: 'widget/1 でも widget?id=1 でも同じところに飛ぶよ。',
  author: 'Mr.Nodeman',
  created_at: new Date()
}];

exports.page = function(req, res, next) {
  var id = req.param('id');
  if (!id) {
    return next();
  }
  res.render('widget/page', {
    title: widgets[id - 1].name,
    id: id,
    posts: dummy_posts
  });
};