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
  data: function() {
    return {
      isRouterAlive: true,
      pageShouldLogin: ["createTopic", "profile", "messages"]
    };
  },
  mounted() {
    this.$router.push({ path: "/utryCommunity/utryjsTopics" });
  }
};
</script>

<style scoped>
/* some css here */
</style>
