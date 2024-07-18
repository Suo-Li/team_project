<script>
// import
import SvgAndDash from "../components/air/AirEcharts.vue";
import location from "@/stores/location";
import { mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(location, ["setPages"]),
  },
  mounted() {
    this.setPages(2);
  },
  data() {
    return {};
  },
  components: {
    SvgAndDash,
  },  
};
</script>

<template>
  <div class="outLine">
    <!-- <div class="firPic">
            <img src="/public/air/air_polution_Taichong 1.png" alt="">
        </div> -->

    <div class="secPic">
      <img
        src="/public/air/airBgimg.jpg"
        alt=""
      />
    </div>

    <!-- 
        <div class="upper">

        </div> -->

    <div class="taiwanSVG">
      <!-- 印出資料 -->
      <!-- <div v-for="item in cityArr" :key="item.id">{{ item.forecastdate}} - {{ item.area }}</div>   -->
      <SvgAndDash />
    </div>

    <!-- <div class="dashBoard">

        </div> -->

    <!-- <div class="trandChart">

        </div> -->
  </div>
</template>

<style scoped lang="scss">
.outLine {
  /* 分頁大小控制 */
  width: 100%;
  height: 100dvh;
  /* height: 200dvh; */
  border: 1px solid black;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // padding-top: 3%;
  position: relative;
  z-index: -1;
  backdrop-filter: blur(5px);

  // .upper {
  //     width: 50px;
  //     height: 150px;
  //     border: 1px solid black;

  //     position: fixed;
  //     right: 30px;
  //     bottom: 30px;

  // }

  // .firPic {
  //     width: 100%;
  //     /* height: 100dvh; */
  //     height: 60%;
  //     object-fit: cover;
  //     position: absolute;
  //     top: 0%;
  //     left: 0%;

  //     img {
  //         width: 100%;
  //         height: 100%;
  //         opacity: 90%;

  //     }
  // }

  .secPic {
    width: 100%;
    height: 100%;
    // height: 58%;

    // position: absolute;
    // top: 0%;
    // left: 0%;

    // padding-bottom: 3%;
    // backdrop-filter: blur(5px);
    img {
      width: 100%;
      height: 100%;
      filter: blur(2px);

      // padding-bottom: 3%;
    }
  }

  .taiwanSVG {
    width: 98vw;
    height: 80dvh;
    // border: 1px solid black;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0%;
    // margin-bottom: 3%;
    overflow: hidden;
  }

  /* .dashBoard {
        width: 20dvw;
        height: 70dvh;
        border: 1px solid black;
        z-index: 1;

    } */

  /* .trandChart {
        width: 80dvw;
        height: 90dvh;
        border: 1px solid black;
    } */
}
</style>
