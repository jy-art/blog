<template>
  <div class="main">
    <div class="public">
      <div class="search-input">
        <el-input class="input" v-model="keyword" placeholder="请输入内容"></el-input>
        <i class="sea iconfont icon-sousuo"></i>
      </div>
      <router-link
        tag="div"
        :to="`/home/${item._id}`"
        class="article"
        v-for="(item,i) in list"
        :key="i"
      >
        <h2 class="title">{{item.title}}</h2>
        <div class="categor">
          <p class="categor-test">
            <i class="iconfont icon-biaoqian-"></i>
            <span
              class="categor-name"
              v-for="(categor,i) in item.categories"
              :key="i"
            >{{categor.name}}</span>
          </p>
          <p>
            <i class="iconfont icon-06"></i>
            <span class="date">{{item.updatedAt | date}}</span>
          </p>
        </div>

        <div
          v-if="item.body"
          class="body"
          v-html="$options.filters.ellipsis($options.filters.removeHtmlStyle(item.body))"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<script scoped>
import dayjs from "dayjs";
export default {
  data() {
    return {
      keyword: "",
      list: "",
      timer: null
    };
  },
   watch: {
    keyword(){
     if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
       this.fach()
      }, 300)
    }
    
  },
  methods: {
    async fach() {
      this.list =[]
      this.keyword=this.keyword.replace(/[, ]/g,'')
      if (this.keyword) {
        const key = encodeURIComponent(this.keyword)
        const res = await this.$http.get(`/searchs/${key}`);
        this.list = res.data;
      }
    }
  },
  filters: {
    //日期过滤
    date(val) {
      return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
    },
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 300) {
        return value.slice(0, 300) + "...";
      }
      return value;
    },
    removeHtmlStyle(html) {
      var input = html;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    }
  },
}
</script>

<style scoped>
.article {
  width: 80%;
  height: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
  box-shadow: 8px -3px 14px 4px rgba(202, 203, 204, 0.5);
  border-radius: 18px;
  cursor: pointer;
}
.block {
  text-align: center;
}
.title {
  font-size: 18px;
  font-weight: 500;
  padding: 20px 0 0 10px;
}
.categor {
  display: flex;
  font-size: 12px;
  color: #a59c9c;
  padding-top: 4px;
}
.categor-test {
  padding: 0 10px;
}
.categor-name {
  padding-right: 2px;
}
.categor i {
  font-size: 12px;
  margin-right: 2px;
}
.body {
  font-size: 16px;
  font-weight: 200;
  padding: 10px;
}
.search-input {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.search-input .input{
  width: 500px;
  height: 38px;
  border-radius: 16px;
  
}
.search-input .sea{
  font-size: 30px;
  color: #00adef;
  margin: 4px 0 0 14px;
}

</style>


