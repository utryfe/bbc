import Vue from "vue";
import Vuex from "vuex";
import "babel-polyfill";

Vue.use(Vuex);

const state = {
  loginStatus: false,
  loginUsername: "",
  loginAvatarUrl: "",
  openLoginCard: false,
  showNavside: false,
  isMobile: false
};

const mutations = {
  // 管理登录状态以及一些共享的登录信息
  changeLoginStatus(state, loginInfo) {
    if (loginInfo.success) {
      state.loginStatus = loginInfo.success;
      state.loginUsername = loginInfo.loginname;
      state.loginAvatarUrl = loginInfo.avatar_url;
    } else if (!loginInfo.success) {
      state.loginStatus = loginInfo.success;
      state.loginUsername = "";
      state.loginAvatarUrl = "";
    }
  },
  // 管理登录窗口的显示与隐藏
  openLoginCard(state, order) {
    state.openLoginCard = order;
  },
  // 管理侧边栏导航的显示与隐藏
  navSideController(state, order) {
    state.showNavside = order;
  },
  // 控制当前平台是否是移动端
  mobileController(state, isMobile) {
    state.isMobile = isMobile;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
