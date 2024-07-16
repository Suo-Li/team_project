<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
<div class="header">
  <Header />
</div>
<div class="content">
  <RouterView />
</div>

</template>

<style scoped lang="scss">

/*.header{
  width: 100%;
  height: 15dvh;
}*/

.content{
  width: 100%;
  height: 100dvh;
  // background-color: burlywood;
  /*display: flex;
  align-items: end;
  justify-content: center;*/
}

</style>
