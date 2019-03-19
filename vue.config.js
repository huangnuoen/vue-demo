const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')
module.exports = {
  productionSourceMap: false,
  // outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ?
    '../' : '/',
  // assetsDir: 'static',
  // indexPath: 'a.html',
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          // 其他路由输出目录
          outputDir: path.join(__dirname, 'dist'),
          routes: ['/index', '/hello'],
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            renderAfterDocumentEvent: 'render-event'
          })
        })
      ]
    }
  }
}