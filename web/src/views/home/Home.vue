<template>
  <div class="main">
    <div class="public home">
      <router-link
        tag="div"
        :to="`/home/${item._id}`"
        class="article"
        v-for="(item,i) in pageLists"
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
          class="body"
          v-html="$options.filters.ellipsis($options.filters.removeHtmlStyle(item.body))"
        ></div>
      </router-link>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="4"
          layout="prev, pager, next"
          :total="listsDataNumber"
        >></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      id: 0,
      total: 0,
      currentPage: 1,
      listsDataNumber: null,
      pageLists: "",
      artclaList: {
        data: 0
      }
    };
  },
  filters: {
    //日期过滤
    date(val) {
      return dayjs(val).format("YYYY-MM-DD HH:mm:ss");
    },
    //当渲染的文字超出30字后显示省略号
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
  watch: {
    $route: "fachs",
    artclaList: function(artclaList) {
      this.listsDataNumber = artclaList.data.length;
      this.initPageLists();
    }
  },
  methods: {
    async fachs() {
      let res = await this.$http.get("/artcles");
      this.artclaList = res;
    },
    async fach() {
      let res;
      if (this.id) {
        res = await this.$http.get(`/artclesas/${this.id}`);
        this.artclaList = res;
      } else {
        res = await this.$http.get("/artcles");
        this.artclaList = res;
      }
    },
    handleCurrentChange(val) {
      this.pageLists = this.artclaList.data.slice((val - 1) * 4, val * 4);
    },
    initPageLists() {
      this.pageLists = this.artclaList.data.slice(0, 4);
    }
  },

  created() {
    this.id = this.$route.params.id;
    this.fach();
  }
};
</script>

<style scoped>
.home {
  padding-top: 30px;
}
.article {
  width: 80%;
  margin: 0 auto;
  height: 200px;
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
</style>