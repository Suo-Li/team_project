<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/Header.vue'
</script>

<template>
    <div class="header" id="header">
        <Header />
    </div>
    <div class="content">
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
    .header{
        width: 100%;
        height: 20dvh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999999999;
        background: rgba( 0, 0, 0, 0.4 );
    }
    .content{
        width: 100%;
        height: 100dvh;
    }
</style>