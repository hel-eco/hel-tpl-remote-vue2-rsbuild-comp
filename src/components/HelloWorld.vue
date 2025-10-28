<template>
  <div class="hello">
    <hr />
    <h1>{{ msg }}</h1>
    <h2>我是一个远程Vue组件</h2>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  components: {
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
