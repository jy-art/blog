<template>
  <div class="footer">
    <div class="footer-con">
      <p class="copy"><span>一起南下吧</span>&copy;2020-2022</p>
      <p class="icp">黔ICP备20004462号-1</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
}
.footer-con {
  flex: 1;
  width: 80%;
  height: 80px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction:column;
  color: #a59c9c;
}
.copy span{
  color: #00adef;
}
.icp{
  font-size: 13px;
}

</style>