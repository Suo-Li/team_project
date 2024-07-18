<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/headerCp/Header.vue'
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
    .content{
        width: 100%;
        height: 0;
    }
</style>