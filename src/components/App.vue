<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>name: {{name}}</h2>
    <HelloWorld msg="欢迎查看项目 hel-tpl-remote-vue-comp" />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  props: {
    name: String,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
