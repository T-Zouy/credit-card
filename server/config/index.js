/**
 * Created by lin_yu on 2018/8/20
 */
const fs = require('fs');

const CONFIG = {
  mongodb: {
    host: '127.0.0.1',
    database: 'test',
    port: 27017,
    user: '',                    //非必填
    password: ''                 //非必填
  },
  app: {
    port: process.env.PORT || 3000,
    routerBaseApi: '/api'
  }
};

//可以新建一个private.js定义自己的私有配置
if (fs.existsSync(__dirname + '/private.js')) {
  config = Object.assign(CONFIG, require('./private.js'));
}

module.exports = CONFIG;
