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
      <RouterLink
        class="headerLogo"
        to="/"
      >
        <div class="logo"></div>
      </RouterLink>
    </div>

    <RouterLink
      class="routeItem"
      :class="{ selected: this.location === 2 }"
      to="/air"
      >air</RouterLink
    >
    <RouterLink
      class="routeItem"
      :class="{ selected: this.location === 3 }"
      to="/water"
      >water</RouterLink
    >
    <RouterLink
      class="routeItem"
      :class="{ selected: this.location === 4 }"
      to="/polution"
      >waste</RouterLink
    >
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
  z-index: 50;
  // margin-bottom: 3%;

  .routeItem {
    font-family: "Bona Nova SC", serif;
    margin: 0px 45px;
    font-size: 30px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px 2px #000;
    z-index: 2;
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
      background-image: url(/src/components/睜開眼.png);
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }

  .headerLine {
    width: 100%;
    height: 45%;
    position: absolute;
    left: 15%;
    bottom: 0%;
    background-image: url("Vector 1.png");
    background-repeat: no-repeat;
    background-size: 80% 70%;
  }

  .selected {
    border-bottom: 3px solid white;
    scale: 1.1;
  }
}
</style>
