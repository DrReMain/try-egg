'use strict';

module.exports = app => {
  // 内部重定向
  app.redirect('/', '/search', 302);

  // 外部重定向
  app.get('/redirect', app.controller.redirect.redirect)
  // http://localhost:7001/redirect?type=bing&q=node.js
  // http://localhost:7001/redirect?q=node.js

  // Query String
  app.get('/search', app.controller.search.index);

  // 参数命名方式
  app.get('/user/:id/:name', app.controller.router.user)

  // 复杂参数的获取
  app.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, app.controller.package.detail);
  // 表单内容的获取
  app.post('/form', app.controller.form.form);
};
