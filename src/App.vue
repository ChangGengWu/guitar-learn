<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/test">test</router-link>
  </div>
  <router-view /> -->
  <home />
</template>
<script>
//import HelloWorld from "./components/HelloWorld.vue";
import home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    home,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
#app {
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
