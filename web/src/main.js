// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import cookie from 'vue-cookies'
import "ant-design-vue/dist/antd.css"
import App from './App'
import router from './router'
import base from './base'
import * as utils from './base/utils.js';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(cookie);

router.beforeEach(utils.dealWithCookies);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
