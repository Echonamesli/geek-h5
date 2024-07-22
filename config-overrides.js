const path = require("path");
const px2viewport = require("postcss-px-to-viewport");
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addPostcssPlugins,
} = require("customize-cra");

//导出所有要进行覆盖的webpack配置
module.exports = override(
  //antd的按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css",
  }),
  //配置别名（jsconfig.json文件是为了路径有提示（比如敲了@之后））
  addWebpackAlias({
    "@": path.join(__dirname, "src"),
    "@scss": path.join(__dirname, "src/assets/styles"),
  }),
  //配置postcss样式转换插件
  addPostcssPlugins([
    // 移动端布局 viewport适配方案
    px2viewport({
      //视口宽度，对应设计稿的宽度，一般是750（即750=100vw）
      //vant的参考尺寸是375
      unitToConvert: 'px',
      viewportWidth: 375,
    }),
  ])
);
