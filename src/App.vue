<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/Header.vue'
</script>

<template>
<<<<<<< HEAD
    <div class="header">
        <Header />
    </div>
    <div class="content">
        <RouterView />
    </div>
=======
<div class="header">
  <Header />
</div>
<div class="content">
  <RouterView />
</div>

>>>>>>> 8531862ccb23ffe19c863161f8889453278f2477
</template>

<style scoped lang="scss">
    .header{
        width: 100%;
        height: 15dvh;
        display: flex;
        justify-content: center;

<<<<<<< HEAD
        margin-top: 1%;
        position: fixed;
        top: 0;
        left: 0;
    }
    .content{
        width: 100%;
        height: 100dvh;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar{
        width: 0.5rem;
    }
    ::-webkit-scrollbar-track-piece {
        background: #F2F2F2;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.4);
    }
=======
/*.header{
  width: 100%;
  height: 15dvh;
}*/

.content{
  width: 100%;
  height: 100dvh;
  background-color: burlywood;
  /*display: flex;
  align-items: end;
  justify-content: center;*/
}

>>>>>>> 8531862ccb23ffe19c863161f8889453278f2477
</style>
