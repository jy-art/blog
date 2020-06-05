<template>
  <div id="app">
    <TabBer></TabBer>
    <router-view class="main"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import TabBer from "components/TabBer";
import Footer from "components/Footer";
export default {
  name: "app",
  components: {
    TabBer,
    Footer
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.main {
  flex: 1;
}
</style>
