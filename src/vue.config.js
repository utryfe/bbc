module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  baseUrl: "/",
  outputDir: "dist",
  lintOnSave: true,

  devServer: {},

  pluginOptions: {
    // ...
  }
};
