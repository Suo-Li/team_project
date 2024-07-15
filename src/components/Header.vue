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
<<<<<<< HEAD
        <RouterLink class="routeItem" to="/">
            <img src="/public/earth.svg" class="home">
        </RouterLink>
        <div class="areaRight">
            <RouterLink class="routeItem A" to="/air"><span>AIR</span></RouterLink>
            <RouterLink class="routeItem B" to="/water"><span>WATER</span></RouterLink>
            <RouterLink class="routeItem B" to="/waste"><span>WASTE</span></RouterLink>
            <div class="bar"><i class="fa-solid fa-grip-lines fa-2xl"></i></div>
        </div>
=======
        <RouterLink class="routeItem" to="/">Home</RouterLink>
        <RouterLink class="routeItem" to="/air">air</RouterLink>
        <RouterLink class="routeItem" to="/water">water</RouterLink>
        <RouterLink class="routeItem" to="/polution">polution</RouterLink>
        <div class="headerLine"></div>
        <div class="logo"></div>

>>>>>>> 8531862ccb23ffe19c863161f8889453278f2477
    </div>
    <img class="headerLine" src="/public/HeaderLineWhite.svg" alt="headerLine">
</template>


<style scoped lang="scss">
<<<<<<< HEAD
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    .headerArea {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        z-index: 1;
        .home{
            width: 15dvh;
            height: 100%;
            cursor: pointer;
            transition: 0.5s;
            &:hover{
                scale: 1.05;
            }
            &:active{
                scale: 1;
            }
        }
        .areaRight{
            width: 35%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .routeItem {
                span{
                    font-family: "Playfair Display", serif;
                    font-size: 5dvh;
                    font-weight: bolder;
                    color: white;
                    text-align: center;
                    text-shadow: 0px 5px 5px black;
                }
                text-decoration: none;
                cursor: pointer;
                transition: 0.3s;
                &:hover{
                    scale: 1.05;
                }
                &:active{
                    scale: 1;
                }
            }
            .bar{
                width: 7dvh;
                height: 7dvh;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 2rem;
                box-shadow: 2px 3px 3px black;
                display: flex;
                justify-content: center;
                align-items: center;
                i{
                    font-size: 2rem;
                    &:hover{
                    scale: 1.05;
                }
                &:active{
                    scale: 1;
                }
                }
            }
        }
    }
    .headerLine{
        width: 100%;
        height: 20dvh;
        position: fixed;
        top: 0%;
        left: 0%;
    }
=======

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
>>>>>>> 8531862ccb23ffe19c863161f8889453278f2477
</style>