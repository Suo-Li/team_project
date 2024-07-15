<script>

import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    }
}

</script>


<template>
    

    <div class="headerArea">
        <RouterLink class="routeItem" to="/">Home</RouterLink>
        <RouterLink class="routeItem" to="/air">air</RouterLink>
        <RouterLink class="routeItem" to="/water">water</RouterLink>
        <RouterLink class="routeItem" to="/polution">polution</RouterLink>
        <div class="headerLine"></div>
        <div class="logo"></div>

    </div>


</template>


<style scoped lang="scss">

$MainColor:rgba(108, 186, 241, 0.537);

.headerArea {
    width: 100%;
    height: 15%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 3%;
    position: fixed;
    z-index: 1;
    // margin-bottom: 3%;

    .routeItem {
        padding: 30px;
        font-size: 30px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    .headerLine{
        width: 100%;
        height: 45%;
        position: absolute;
        left: 15%;
        bottom: 0%;
        background-image: url('Vector 1.png');
        background-repeat: no-repeat;
        background-size: 80% 70%;
    }
    .logo{
    width: 10%;
    height: 105%;
    position: absolute;
    left: 3%;
    bottom: -20%;
    background-image: url(/src/components/睜開眼.png);
    background-repeat: no-repeat;
    background-size: 100% 105%;
    }
}
</style>