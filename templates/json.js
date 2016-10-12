module.exports = options => `// Window config
// https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#window
{
  // 导航栏背景颜色，如"#000000"
  // HexColor
  "navigationBarBackgroundColor": "#000000",
  // 导航栏标题颜色，仅支持 black/white，默认：white
  // String
  "navigationBarTextStyle": "black",
  // 导航栏标题文字内容
  // String
  "navigationBarTitleText": "${name}",
  // 窗口的背景色，默认：#ffffff
  // HexColor
  "backgroundColor": "#ffffff",
  // 下拉背景字体、loading 图的样式，仅支持 dark/light，默认：dark
  // String
  "backgroundTextStyle": "white",
  // 是否开启下拉刷新，详见页面相关事件处理函数，默认：false
  // https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html#页面相关事件处理函数
  // Boolean
  "enablePullDownRefresh": false
}
`
