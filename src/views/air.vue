<script>
// import


// 宣告
export default {
    data() {
        return {
            cityArr: [],
        };

    },

    methods: {
        async fetchData() {
            let wibsite = await fetch('https://data.moenv.gov.tw/api/v2/aqf_p_01?language=zh&api_key=58f5fc65-e6f6-4c1e-a2e1-2a5a69fbaef8');
            let test = await wibsite.json();
            this.cityArr = test.records;
            console.log(this.cityArr);
        }
    },
    // 調用資料
    mounted() {
        this.fetchData(); // 調用 fetchData
    }

}

</script>





<template>


    <div class="outLine">

        <div class="upper">

        </div>

        <div class="taiwanSVG">
            <!-- 印出資料 -->
            <!-- <div v-for="item in cityArr" :key="item.id">{{ item.forecastdate}} - {{ item.area }}</div>   -->

        </div>

        <div class="dashBoard">

        </div>

        <div class="trandChart">

        </div>


    </div>



</template>



<style scoped>
.outLine {
    /* 分頁大小控制 */
    width: 100%;
    height: 200dvh;
    border: 1px solid black;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 3%;


    .upper {
        width: 50px;
        height: 150px;
        border: 1px solid black;

        position: fixed;
        right: 30px;
        bottom: 30px;

    }


    .taiwanSVG {
        width: 50vw;
        height: 90dvh;
        border: 1px solid black;

    }

    .dashBoard {
        width: 15dvw;
        height: 90dvh;
        border: 1px solid black;

    }

    .trandChart {
        width: 80dvw;
        height: 90dvh;
        border: 1px solid black;

    }

}
</style>