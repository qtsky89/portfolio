let devEnv = require("./vue.config.local.js");

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  configureWebpack: (config) => {
    config.devtool = "source-map";
  },
  transpileDependencies: ["@coreui/utils", "@coreui/vue"],
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);

    config.resolve.alias.set("__STATIC__", "static");

    config.devServer
      .host(devEnv.devHost)
      .port(devEnv.devPort)
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },
};
