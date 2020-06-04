<template>
  <div class="main">
    <div class="public">
      <router-link
        class="categor"
        tag="div"
        :to="`/class/${item._id}`"
        v-for="(item,index) in categor"
        :key="index"
      >
        <p>
          {{item.name}}
          <span>({{item.artleList.length}})</span>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      categor: []
    };
  },
  methods: {
    async fach() {
      const res = await this.$http.get("/categor");
      this.categor = res.data;
    }
  },
  created() {
    this.fach();
  }
};
</script>

<style scoped>
.categor {
  display: flex;
  padding-bottom: 5px;
  margin-left: 80px;
  color: #a59c9c;
  cursor: pointer;
}

.categor :hover {
  color: #00adef;
  transform:translateX(500px);
   transition-duration:3s;
}
.categor p {
  display: inline;
}
</style>