<template>
  <div id="app">
    <div class="header">
      <bc-head></bc-head>
    </div>
    <div class="wrapper">
      <nav-side v-if="isRouterAlive"></nav-side>
      <bc-content></bc-content>
    </div>
    <div v-show="showFooter" class="footer">
      <bc-footer></bc-footer>
    </div>
    <loading
      style="z-index:300; background:rgba(255,255,255,1)"
      v-if="loading"
    ></loading>
  </div>
</template>
<script>
import header from "./components/header";
import content from "./components/content";
import navSide from "./components/navSide";
import footer from "./components/footer";
import loading from "./components/common/loading.vue";

export default {
  components: {
    "bc-head": header,
    "bc-content": content,
    "nav-side": navSide,
    "bc-footer": footer,
    loading: loading
  },

  data() {
    return {
      // 记录原本设备屏幕高度
      defaultHeight: document.documentElement.clientHeight,
      // 记录实时屏幕高度
      currentHeight: document.documentElement.clientHeight,
      // 控制footer的显隐
      showFooter: true,
      loading: false,
      // 存储本次触发onresize事件时的平台，用于下次判断使用
      isMobile: true,
      mobileDirection: 0,
      isRouterAlive: true
    };
  },

  methods: {
    // 处理软键盘弹出footer被顶起，占用狭小显示空间的问题
    resizeMethod() {
      // 监测到视口尺寸变化，判断当前平台
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        // 当前是移动端
        this.$store.commit("mobileController", true);
        // 开发模式下pc端直接切移动端不触发footer相关判断逻辑
        if (this.isMobile === true) {
          // 监测到旋转，初始化屏幕默认方向，同时初始化defaultHeight(对比屏幕高度)与currentHeight(当前屏幕高度)
          if (window.orientation !== this.mobileDirection) {
            this.mobileDirection = window.orientation;
            this.defaultHeight = document.body.clientHeight;
            this.currentHeight = document.body.clientHeight;
          }
          // 开始处理footer伸缩逻辑,首先记录当前实时显示区域高度
          this.currentHeight = document.body.clientHeight;
          if (this.defaultHeight - this.currentHeight > 100) {
            this.showFooter = false;
          } else {
            this.showFooter = true;
          }
        } else {
          // pc突然转mobile, footer不做任何响应
          this.isMobile = true;
        }
      } else {
        // 当前是PC端
        this.$store.commit("mobileController", false);
        this.isMobile = false;
      }
    },
    // 注册
    verifyRegister(usr) {
      const { loginname, password } = usr;
      this.$apiRequest.registerUsers(
        {
          loginname,
          password
        },
        res => {
          this.loading = false;
          this.$store.commit("changeLoginStatus", res.data);
          this.$commonUtil.setCookie("loginname", loginname, 24);
          this.$commonUtil.setCookie("password", password, 24);
        },
        err => {
          this.loading = false;
          // 重新加载一下登录组件
          this.$children[2].reload();
        }
      );
    },
    // 登录
    verifyLogin(usr) {
      let loginname, password;
      if (!usr) {
        loginname = this.$commonUtil.getCookie("loginname");
        password = this.$commonUtil.getCookie("password");
        this.$store.commit("openLoginCard", false);
      } else {
        loginname = usr.loginname;
        password = usr.password;
      }
      this.$apiRequest.verifyUsers(
        {
          loginname,
          password
        },
        res => {
          this.loading = false;
          if (usr) {
            this.$commonUtil.setCookie("loginname", loginname, 0.5);
            this.$commonUtil.setCookie("password", password, 0.5);
          }
          this.$store.commit("changeLoginStatus", res.data);
        },
        err => {
          this.$store.commit("changeLoginStatus", {
            success: false
          });
          // 密码验证错误时清除错误的cookie存储
          this.$commonUtil.removeCookie("loginname");
          this.$commonUtil.removeCookie("password");
          this.$commonUtil.netErrorTips(err);
          this.loading = false;
          // 重新加载一下登录组件
          this.$children[2].reload();
        }
      );
    }
  },

  created() {
    // 验证是否有token存储
    if (this.$commonUtil.getCookie('loginname')) {
      sessionStorage['isAutoLogin'] = 'true'
      this.loading = true
      this.verifyLogin()
    } else {
      this.$store.commit('openLoginCard', true)
    }
  },

  mounted() {
    // 添加这个窗口resize事件监听器
    window.addEventListener("resize", this.resizeMethod, true);
    this.resizeMethod();
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 15px;
}
/* root-window(rw) css style */
#app {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.header {
  order: 0;
  flex: 0 1 60px;
  z-index: 200;
}
.wrapper {
  order: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  /* flex: 1 1 auto; 为以上三者的缩写*/
  /* 照顾到子元素的absulute定位 */
  position: relative;
}
.footer {
  order: 2;
  flex: 0 1 50px;
  z-index: 150;
}
</style>
