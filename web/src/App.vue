<template>
  <div id="app">
    <TabBer></TabBer>
    <router-view></router-view>
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


</style>
