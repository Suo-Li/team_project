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


    </div>


</template>


<style scoped lang="scss">

$MainColor:rgb(108, 185, 241);

.headerArea {
    width: 100%;
    height: 100%;
    background-color: $MainColor;
    display: flex;
    align-items: center;
    // margin-bottom: 3%;

    .routeItem {
        margin: 3%;
        font-size: 36px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>