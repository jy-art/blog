<template>
  <div class="bounce">
    <span class=" test">一</span>
    <span class=" test">起</span>
    <span class="letter1 test">南</span>
    <span class="letter2 test">下</span>
    <span class="letter3 test">吧</span>
    <span class="letter4 test">！</span>
  </div>
</template>

<script>

export default {};
</script>
    
<style>
.bounce {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  color: #00adef;
  height: 20%;
  white-space: nowrap;
  font-size: 18px;
}
.letter1{
  transform:translateY(2px)
}
.letter2{
  transform:translateY(3px)
}
.letter3{
  transform:translateY(6px)
}
.letter4{
  transform:translateY(6px)
}


@keyframes bounce {
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 0 0.05em;
  }
  100% {
    transform: translate3d(0, -1em, 0);
    text-shadow: rgba(255, 255, 255, 0.4) 0 1em 0.35em;
  }
}
.test {
  font-family: cursive;
text-shadow: 1px -1px 2px #666666;
}
</style>