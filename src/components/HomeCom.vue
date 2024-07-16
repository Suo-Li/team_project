<script>
export default {
  name: "Home",
};
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div class="homeimg">
    <div class="blackfilter"></div>
    <img src="./homeimg.avif" alt="" />
    <h1>OUR PLANET&nbsp;&nbsp;OUR RESPONSIBILITY</h1>
    <span
      >&mdash;&mdash;&mdash;&mdash;&mdash;TAIWAN
      CHAPTER&mdash;&mdash;&mdash;&mdash;&mdash;</span
    >
    <RouterLink to="/air"><button>Let's Go<i class="fa-solid fa-caret-right"style="position: relative; right: -5px"></i></button></RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Playwrite+CU:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Playwrite+CU:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playwrite+CU:wght@100..400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&display=swap");
.homeimg {
  width: 99dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;

  .blackfilter {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  img {
    width: 100%;
    background-size: cover;
    background-position-x: 50%;
  }

  h1 {
    font-family: "Bona Nova SC", serif;
    position: fixed;
    top: 50%;
    left: 45%;
    font-size: 40px;
    font-weight: bold;
    color: white;
    z-index: 2;
    text-shadow: 2px 2px 2px #000;
  }
  span {
    font-family: "Bona Nova SC", serif;
    position: fixed;
    top: 60%;
    left: 57%;
    font-size: 20px;
    color: white;
    z-index: 2;
    text-shadow: 2px 2px 2px #000;
  }
  button {
    width: 120px;
    border-radius: 3px;
    font-family: "Kanit", sans-serif;
    cursor: pointer;
    position: absolute;
    top: 68%;
    left: 65.1%;
    font-size: 15px;
    z-index: 3;
    border: 2px solid rgba(255, 255, 255, 0.8);
    letter-spacing: 2px;
    background-color: rgba(255, 255, 255, 0);
    font-weight: 200;
    color: white;
    text-shadow: 2px 2px 2px #000;
    box-shadow: 1px 1px 7px 1px #000;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -120px;
      width: 120px;
      height: 26px;
      background-color: white;
      z-index: 2;
      transition: left 0.5s;
      opacity: 0;

      &:hover::before{
        left: 100% ;
        opacity: 1;
      }
      // &:hover{
      //   color: #000
      // }
    }
  }
}
</style>
