<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-if="flag">{{msg}}</h2>
    <h2 v-else>{{msg1}}</h2>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // dad: {
      //   child: 'i am child'
      // },
      flag: true,
      msg: "hello",
      msg1: "world"
    };
  },
  beforeCreate() {
    console.log("about create");
  },
  methods: {
    change() {
      this.msg = Math.random();
    },
    toggle() {
      this.flag = !this.flag;
    }
  }
};
</script>
