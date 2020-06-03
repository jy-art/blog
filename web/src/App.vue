<template>
  <div id="app">
    <TabBer/> 
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import TabBer  from "components/TabBer";
import Footer  from "components/Footer";
export default {
  name: 'app',
  components: {
    TabBer,
    Footer
  }
}
</script>

<style>
</style>
