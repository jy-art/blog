<template>
  <div class="main">
    <div class="article" v-if="artcle.body">
      <h2 class="article-det">{{artcle.title}}</h2>
      <div class="article-categor">
        <p class="article-test">
          <i class="iconfont icon-biaoqian-"></i>
          <span
            class="article-name"
            v-for="(categor,i) in artcle.categories"
            :key="i"
          >{{categor.name}}</span>
        </p>
        <p>
          <i class="iconfont icon-06"></i>
          <span class="date">{{artcle.updatedAt | date}}</span>
        </p>
      </div>
        <pre class="ql-snow" v-highlight><code class="ql-editor" v-html="artcle.body"></code></pre>
    </div>
  </div>
</template>

<script scoped>
import dayjs from "dayjs";
export default {
  data() {
    return {
      id: null,
      artcle: {}
    };
  },
  filters: {
    //日期过滤
    date(val) {
       return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    async fach() {
      const res = await this.$http.get(`/artcles/${this.id}`);
      this.artcle = res.data;
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.fach();
  }
};
</script>

<style>
.article {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
  box-shadow: 8px -3px 14px 4px rgba(202, 203, 204, 0.5);
  border-radius: 18px;
  cursor: pointer;
}
.article-det {
  text-align: center;
  font-weight: 500;
  padding-top: 10px;
}
.article-categor {
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #a59c9c;
  padding-top: 10px;
}
.article i {
  font-size: 12px;
  margin-right: 2px;
}
.article-code {
  background: #fff;
  color: black;
}
.ql-syntax {
  padding: 8px;
  background: #fafafa;
  font-size: 18px;
}

pre {
  position: relative;
  margin-bottom: 24px;
  border-radius: 3px;
  border: 1px solid #c3ccd0;
  background: #fff;
  overflow: hidden;
}

.article-test span{
   padding-right: 8px;
}
</style>