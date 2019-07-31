<template>
  <div class="nsc-commonWrp">
    <vue-markdown
      source="
    # 使用vue构建的第三方社区网站
    ## 功能介绍
    这是一个功能尚不健全的utry前端技术交流社区，可以适应移动端和PC端，主要包含以下功能:
    1. 【分类浏览】分类浏览社区中各种类型的话题，包括技术分享，问题讨论，招聘信息等等板块
    2. 【个人中心】用户个人中心查看用户最近参与的话题，发表的话题，以及收藏的话题
    3. 【文章互动】可在各类话题中发表自己的评论，为他人的评论点赞，以及收藏自己喜欢的话题
    4. 【话题发表】可以发表自己的话题，编辑自己已经发表的话题，在发表话题与编辑话题的过程中可以实时预览发表后的格式排版
    5. 【接收消息】当有其他用户@你或者在你的话题下方添加评论的时候，可以接收到相应的消息提醒(消息提醒60秒刷新一次)

    [[---github源码---]](https://github.com/utryfe/bbc)
    ## 技术栈
    - 前端框架：`vue@cli3 & Vue全家桶`
    - 后端框架：`Express + Node`
    - 数据存储：`MongoDB + Redis`
    - 样式控制: `font-awesome/vue-markdown`

 "
      class="md-content"
    ></vue-markdown>
  </div>
</template>

<script>
import vueMarkdown from "vue-markdown";

export default {
  components: {
    "vue-markdown": vueMarkdown
  },
  data: function() {
    return {
      aboutContent: ""
    };
  },
  methods: {
    // put some function here
  },
  mounted() {
    this.aboutContent = "";
  }
};
</script>

<style scoped>
/* some css here */
</style>
