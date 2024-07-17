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
        <RouterLink class="routeItem" to="/">
            <img src="/public/header/earth.svg" class="home">
        </RouterLink>
        <div class="areaRight">
            <RouterLink class="routeItem A" to="/air"><span>AIR</span></RouterLink>
            <RouterLink class="routeItem B" to="/water"><span>WATER</span></RouterLink>
            <RouterLink class="routeItem B" to="/waste"><span>WASTE</span></RouterLink>
            <div class="bar"><i class="fa-solid fa-grip-lines fa-2xl"></i></div>
        </div>
    </div>
    <img class="headerLine" src="/public/header/HeaderLineWhite.svg" alt="headerLine">
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.headerArea {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    z-index: 1;

    .home {
        width: 15dvh;
        height: 100%;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            scale: 1.05;
        }

        &:active {
            scale: 1;
        }
    }

    .areaRight {
        width: 35%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .routeItem {
            text-decoration: none;

            span {
                font-family: "Playfair Display", serif;
                font-size: 5dvh;
                font-weight: bolder;
                color: white;
                text-align: center;
                text-shadow: 0px 5px 5px black;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    scale: 1.05;
                    color: black;
                    text-shadow: 0 0 10px white;
                }

                &:active {
                    scale: 1;
                }
            }

        }

        .bar {
            width: 7dvh;
            height: 7dvh;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 2rem;
            box-shadow: 2px 3px 3px black;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                font-size: 2rem;

                &:hover {
                    scale: 1.05;
                }

                &:active {
                    scale: 1;
                }
            }
        }
    }
}

.headerLine {
    width: 100%;
    height: 19dvh;
    position: fixed;
    top: 0%;
    left: 0%;
}
</style>