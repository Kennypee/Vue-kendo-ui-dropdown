<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Dropdown msg="ComboBox Dropdown demo"/>
  </div>
</template>

<script>
import Dropdown from "./components/Dropdown.vue";

export default {
  name: "app",
  components: {
    Dropdown
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
