'use strict';

import {EggAppConfig} from 'egg'
import 'source-map-support/register'
import defaultConfig from './defaultConfig'

module.exports = (appInfo: EggAppConfig) => {
    const config: any = {};

    // should change to your own
    config.keys = appInfo.name + '123456';

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.nunj': 'nunjucks',
        },
    };

    return {...config, ...defaultConfig};
};
