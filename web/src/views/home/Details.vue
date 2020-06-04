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

      <pre v-highlight><code class="article-code" v-html="artcle.body"></code></pre>
    </div>
  </div>
</template>

<script>
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
.categor-name {
  padding-right: 2px;
}
.article i {
  font-size: 12px;
  margin-right: 2px;
}
.article-code {
  background: #fff;
  color: black;
}
.ql-align-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ql-syntax {
  padding: 8px;
  background: #fafafa;
  font-size: 18px;
}
.article img {
  max-width: 59%;
  margin-bottom: 4px;
}

pre {
  position: relative;
  margin-bottom: 24px;
  border-radius: 3px;
  border: 1px solid #c3ccd0;
  background: #fff;
  overflow: hidden;
}
code {
  display: block;
  padding: 12px 24px;
  overflow-y: auto;
  font-weight: 300;
  font-family: Menlo, monospace;
  font-size: 0.8em;
}
code.has-numbering {
  margin-left: 21px;
}
.pre-numbering {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  padding: 12px 2px 12px 0;
  border-right: 1px solid #c3ccd0;
  border-radius: 3px 0 0 3px;
  background-color: #eee;
  text-align: right;
  font-family: Menlo, monospace;
  font-size: 0.8em;
  color: #aaa;
}
.hljs-variable {
  color: #aaa;
}
.hljs-tag {
  color: #000;
}
.ql-video {
  display: block;
  width: 100%;
  height: 500px;
}
.article-code blockquote {
  font-weight: 800;
  font-size: 16px;
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.article-code p {
  padding-left:38px ;
 
}
.article-test span{
   padding-right: 8px;
}
</style>