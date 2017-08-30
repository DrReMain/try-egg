'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503989054189_6591';

  // add your config here

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
      '.nunj': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 10,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // config.middleware = [
  //   'robot'
  // ];
  //
  // config.robot = {
  //   ua: [
  //     /Baiduspider/i,
  //   ]
  // };

  return config;
};
