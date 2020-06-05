<template>
  <div>
    <div class="nav">
      <Font/>
      <div class="nav-r">
        <router-link tag="p" to="/home">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
        <router-link tag="p" to="/label">
         <i class="iconfont icon-biaoqian-"></i>
          <span>标签</span>
        </router-link>
        <router-link tag="p" to="/class">
         <i class="iconfont icon-fenlei-"></i>
          <span>分类</span>
        </router-link>
        <router-link tag="p" to="/about">
         <i class="iconfont icon-xinbaniconshangchuan-"></i>
          <span>关于</span>
        </router-link>
        <router-link tag="p" to="/search">
         <i class="iconfont icon-search"></i>
          <span>搜索</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Font from "components/Font";
import 'assets/css/icon/iconfont.css'
export default {
  name: "tabbar",
  components:{
    Font
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  padding-bottom:30px;
  width: 80%;
  height: 80px;
  margin: 0 auto;
}
.nav-r {
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
}
.nav-r p {
  margin-left: 30px;
  cursor: pointer;
  color: #a59c9c;
}
.nav-r i {
  font-size: 18px;
  padding-right: 6px;
}
.nav-r span{
  color: #a59c9c
}
.nav-r span:hover {
  border-bottom: 2px solid #00adef;
}
.nav-r p:hover {
  color: #00adef;

}
</style>