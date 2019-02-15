import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 写法一工厂函数
// Vue.component('AsyncExample', function (resolve) {
//   // 这个特殊的 `require` 语法将会告诉 webpack
//   // 自动将你的构建代码切割成多个包，这些包
//   // 会通过 Ajax 请求加载
//   require(['./components/AsyncExample'], resolve)
// })
// 写法二promise
// Vue.component(
//   'AsyncExample',
//   // 这个 `import` 函数会返回一个 `Promise` 对象。
//   () => import('./components/AsyncExample')
// )
// 高级异步组件
// const AsyncComponent = () => ({
//   // 需要加载的组件 (应该是一个 `Promise` 对象)
//   component: import('./components/AsyncExample'),
//   // 异步组件加载时使用的组件
//   loading: Loading,
//   // 加载失败时使用的组件
//   error: ErrorComponent,
//   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//   delay: 0,
//   // 如果提供了超时时间且组件加载也超时了，
//   // 则使用加载失败时使用的组件。默认值是：`Infinity`
//   timeout: 1000
// })
// Vue.component('AsyncExample', AsyncComponent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");