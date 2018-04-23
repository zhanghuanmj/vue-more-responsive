/**
 * author: zhanghuan
 * created: 2018/4/18
 * describe: 公共方法的封装
 */
import * as Cookies from 'tiny-cookie';
/*
 * params: 无
 * return: 无
 * function: 公共对象的构造方法
 * */
var $public = function () {
  this.init.apply(this, arguments);
};
$public.prototype = {
  /*
   * params: 无
   * return: 无
   * function: 初始化方法
   * */
  init: function () {

  },
  /*
   * params: 配置选项
   * return: 无
   * function: ajax请求
   * */
  getRequest: function (options, callback) {
    var type = options.type ? options.type : "POST";
    var url = options.url;
    var data = options.data || {};
    var headers = options.headers || {};
    var dataType = options.dataType || 'json';
    var getTime = new Date().getTime();
    var loading = null;

    if (url.indexOf('?') > -1) {
      url = url + '&_=' + getTime;
    } else {
      url = url + '?_=' + getTime;
    }
    //在请求发出之前进行一些操作
    loading = layer.load(1, {
      shade: [0.3, '#000'] //0.1透明度的白色背景
    });
    return $.ajax({
      type: type,
      dataType: dataType,
      timeout: 300000,
      url: url,
      data: data,
      traditional: true,
      headers: headers,
      success: function (res) {
        layer.close(loading);
        if (res.code !== '200') {
          layer.open({
            title: Cookies.get('lang') === 'en' ? 'info' : '信息',
            content: res.message,
            icon: 5,
            skin: 'msg',
            time: 2000, //2秒后自动关闭
            btn: [Cookies.get('lang') === 'en' ? 'sure' : '确认'],
            end: function () {
              console.log('%c' + res.message, 'color: #00f; font-size: 20px;');
            }
          });
          return false;
        }
        callback && callback(res);
        return false;
      },
      error: function (err) {
        layer.close(loading);
        return false;
      }
    });
  },
  /*
   * params: 字段名
   * return: 字段值
   * function: 获取地址栏的查询字段值
   * */
  getHashStr: function (name) {
    var url = location.hash; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?")) {
      var str = url.substr(url.indexOf("?") + 1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
      }
    }
    return theRequest[name];
  }
};
export default new $public();
