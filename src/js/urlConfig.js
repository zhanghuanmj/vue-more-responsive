/**
 * @author: zhanghuan
 * @create: 2018/4/18
 * @describe: 请求路径配置
 */
"use strict";
var base = '/api/';//开发环境
/*var base = '';//生产环境*/

var URL = {
  test: 'static/mock/data.json',
  index: {
    videoUrl: base + 'channel/getChannels'
  }
};

module.exports = URL;
