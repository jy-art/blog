<template>
  <div class="main">
    <div class="public">
      <transition name="fade">
        <div class="label">
          <router-link
            :class="{labela:index == i}" @mouseover.native="mouseover(index)"
            class="label-list"
            tag="div"
            :to="`/label/${item._id}`"
            v-for="(item,index) in categories"
            :key="index"
          >{{item.name}}</router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i:-1,
      categories: {}
    };
  },
  methods: {
    async fach() {
      const res = await this.$http.get("/categories");
      this.categories = res.data;
    },
    mouseover(index){
      this.i = index
      
    },
  },
  created() {
    this.fach();
  }
};
</script>

<style scoped>
.label {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.label-list {
  display: flex;
  padding: 4px;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;
  border-radius: 2px;
  box-shadow: -3px -5px 7px 0px #aaaaac;
  cursor: pointer;
}
.labela{
  transform:rotate(360deg);
  transition-duration:2s;
  box-shadow: -3px -5px 7px 0px #aaaaac;
}

</style>