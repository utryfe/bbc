import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";

import commonUtil from "./util/common.js";
import apiRequest from "./service/apiRequest.js";

//引入font-awesome
import "font-awesome/css/font-awesome.css";
import "./assets/css/common.css";
import "./assets/css/markdown.css";

Vue.config.productionTip = false;

// 将自定义工具方法添加到vue全局中
Vue.prototype.$commonUtil = commonUtil;
Vue.prototype.$apiRequest = apiRequest;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
