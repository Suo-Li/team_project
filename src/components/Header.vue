<script>
import { RouterLink } from 'vue-router'
import location from '@/stores/location';
import { mapState } from 'pinia';
export default {
    components: {
        RouterLink
    },
    computed:{
        ...mapState(location,["location","pageLocation"])
    }
}

</script>


<template>
    

    <div class="headerArea">
        <RouterLink class="routeItem" :class="{'selected':this.location ===1}" to="/">Home</RouterLink>
        <RouterLink class="routeItem" to="/air">air</RouterLink>
        <RouterLink class="routeItem" to="/water">water</RouterLink>
        <RouterLink class="routeItem" to="/polution">polution</RouterLink>
        <div class="headerLine"></div>
        <div class="logo"></div>

    </div>


</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Playwrite+CU:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
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
    z-index: 50;
    // margin-bottom: 3%;

    .routeItem {
        font-family: "Bona Nova SC", serif;
        padding: 30px;
        font-size: 25px;
        color: white;
        text-decoration: none;
        cursor: pointer;
        text-shadow: 2px 2px 2px #000;
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