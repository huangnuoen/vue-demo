<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <async-example></async-example>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Loading from "@/components/Loading.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";
const AsyncExample = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import("@/components/AsyncExample"),
  // 异步组件加载时使用的组件
  loading: Loading,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 0,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 1000
});
export default {
  name: "home",
  components: {
    HelloWorld,
    AsyncExample
  }
};
</script>
