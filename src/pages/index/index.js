// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import babel from 'babel-polyfill';//让低版本浏览器支持es6
import i18n from '../../libs/i18n/i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery';
window.$ = window.jQuery = $;
import layer from '../../libs/layer/layer';
import FastClick from 'fastclick';

FastClick.attach(document.body);
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
});
