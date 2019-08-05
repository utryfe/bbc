<template>
  <div style="height: 100%; width: 100%;">
    <!-- 避免重复渲染的组件放在这里 -->
    <keep-alive>
      <router-view name="utryjsTopics"></router-view>
    </keep-alive>
    <router-view name="user"></router-view>
    <router-view name="article" v-if="isRouterAlive"></router-view>
    <router-view name="createTopic" v-if="isRouterAlive"></router-view>
    <router-view name="cnodeProfile"></router-view>
    <router-view name="messages" v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRouterAlive: true,
      pageShouldLogin: ["createTopic", "profile", "messages"]
    };
  },
  computed: {
    loginStatus() {
      return this.$store.state.loginStatus;
    }
  },
  watch: {
    loginStatus() {
      if (!this.loginStatus) {
        let shouldLogin =
          this.pageShouldLogin.indexOf(this.$route.path.split("/").pop()) + 1;
        if (shouldLogin) {
          this.$router.push({ path: "/utryCommunity/utryjsTopics" });
          this.$store.commit("openLoginCard", true);
        }
      }
    }
  },

  methods: {
    // 重新加载子组件
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style scoped>
/* some css here */
</style>
