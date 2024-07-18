<script>
import { RouterLink } from "vue-router";
import location from "@/stores/location";
import { mapState } from "pinia";
export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(location, ["location", "pageLocation"]),
  },
};
</script>

<template>
  <div class="headerArea">
    <div class="headerLogo">
      <RouterLink class="headerLogo" to="/">
        <div class="logo"></div>
      </RouterLink>
    </div>

    <RouterLink class="routeItem" :class="{ selected: this.location === 2 }" to="/air">air</RouterLink>
    <RouterLink class="routeItem" :class="{ selected: this.location === 3 }" to="/water">water</RouterLink>
    <RouterLink class="routeItem" :class="{ selected: this.location === 4 }" to="/waste">waste</RouterLink>
    <div class="headerLine"></div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Playwrite+CU:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");
$MainColor: rgba(108, 186, 241, 0.537);

.headerArea {
  width: 100%;
  height: 15%;
  background-color: rgb(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  // margin-bottom: 3%;

  .routeItem {
    font-family: "Bona Nova SC", serif;
    font-size: 30px;
    color: white;
    text-decoration: none;
    text-shadow: 2px 2px 5px #000;
    margin: 0px 45px;
    transition: 0.2s;
    cursor: pointer;
    z-index: 2;
    &:hover{
      scale: 1.1;
      color: #000;
      text-shadow: 0 0 5px white;
    }
    &:active{
      scale: 1;
    }
  }
  .headerLogo {
    width: 140px;
    height: 104px;
    position: absolute;
    left: 3%;
    bottom: 0%;
    

    .logo {
      width: 100%;
      height: 100%;
      background-image: url(/public/header/睜開眼.png);
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
      &:hover{
      scale: 1.05;
    }
    &:active{
      scale: 1;
    }
    }
  }

  .headerLine {
    width: 83%;
    height: 45%;
    position: absolute;
    left: 12%;
    bottom: 0%;
    background-image: url("/public/header/headerLine.png");
    background-repeat: no-repeat;
    background-size: 100% 70%;
  }

  .selected {
    border-bottom: 3px solid rgb(255, 255, 255);
    scale: 1.1;
  }
}
</style>
