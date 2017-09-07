'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504230175121_2891';

  // add your config here

  config.security = {
    csrf: false
  };

  return config;
};
