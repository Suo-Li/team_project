<script setup>
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, computed, onMounted, provide, watch } from 'vue'
import { color } from 'echarts';

//資料集
const arrYear = ref([])
const arrCity = ref([])
const dataOut = ref([])
console.log(dataOut.value);
const dataHandle = ref([])
console.log(dataHandle.value);
onMounted(() => {
    //全國一般廢棄物產生量
    fetch("https://data.moenv.gov.tw/api/v2/stat_p_126?api_key=45b37ff8-c43e-40fc-ae21-a15629c78020")
    .then(res => res.json())
    .then(AllOut =>{
        let getAllOut = ref(AllOut.records);
        getAllOut.value.forEach((item) => {
            let AllOutData = {統計期_年: '', 統計期_月: '', 統計區: '', 總產生量: '', 一般垃圾量: '', 資源垃圾量: '', 廚餘量: ''}
            let day = item.item1.split(" ")
            if (Number(day[0].split("年")[0]) <= 112 && Number(day[0].split("年")[0]) >= 110){
                if (Object.keys(day).length == 2){
                    AllOutData.統計期_年 = day[0].split("年")[0];
                    AllOutData.統計期_月 = day[1].split("月")[0];
                }
                if (Object.keys(day).length == 1){
                    AllOutData.統計期_年 = day[0].split("年")[0];
                }
                AllOutData.總產生量 = item.value1;
                AllOutData.一般垃圾量 = item.value2;
                AllOutData.資源垃圾量 = item.value3;
                AllOutData.廚餘量 = item.value4;
                dataOut.value.push(AllOutData);
            }
        })
        //選單選項陣列
        dataOut.value.forEach((item) => {
            if (!arrYear.value.includes(item.統計期_年)){
                arrYear.value.push(item.統計期_年)
            }
        })
    })
    //執行機關一般廢棄物產生量
    fetch("https://data.moenv.gov.tw/api/v2/stat_p_127?api_key=45b37ff8-c43e-40fc-ae21-a15629c78020")
    .then(res => res.json())
    .then(CityOut =>{
        let getCityOut = ref(CityOut.records);
        getCityOut.value.forEach((item) => {
            let CityOutData = {統計期_年: '', 統計期_月: '', 統計區: '', 總產生量: '', 一般垃圾量: '', 資源垃圾量: '', 廚餘量: ''}
            let day = item.item1.split(" ")
            if (Number(day[0].split("年")[0]) <= 112 && Number(day[0].split("年")[0]) >= 110){
                if (Object.keys(day).length == 2){
                    CityOutData.統計期_年 = day[0].split("年")[0];
                    CityOutData.統計期_月 = day[1].split("月")[0];
                }
                if (Object.keys(day).length == 1){
                    CityOutData.統計期_年 = day[0].split("年")[0];
                }
                CityOutData.統計區 = item.item2;
                CityOutData.總產生量 = item.value1;
                CityOutData.一般垃圾量 = item.value2;
                CityOutData.資源垃圾量 = item.value3;
                CityOutData.廚餘量 = item.value4;
                dataOut.value.push(CityOutData);
            }
        })
        getCityOut.value.forEach((item) => {
            if (!arrCity.value.includes(item.item2)){
                if (!(arrCity.value === "")){
                    arrCity.value.push(item.item2)
                }
            }
        })
    })

    //全國一般廢棄物處理量
    fetch("https://data.moenv.gov.tw/api/v2/stat_p_128?api_key=45b37ff8-c43e-40fc-ae21-a15629c78020")
    .then(res => res.json())
    .then(AllHandle =>{
        let getAllHandle = ref(AllHandle.records);
        getAllHandle.value.forEach((item) => {
            let AllHandleData = {統計期_年: '', 統計期_月: '', 統計區: '', 總處理量: '', 回收再利用量: '', 焚化量: '', 衛生掩埋量: '', 其他處理量: ''}
            let day = item.item1.split(" ")
            if (Number(day[0].split("年")[0]) <= 112 && Number(day[0].split("年")[0]) >= 110){
                if (Object.keys(day).length == 2){
                    AllHandleData.統計期_年 = day[0].split("年")[0];
                    AllHandleData.統計期_月 = day[1].split("月")[0];
                }
                if (Object.keys(day).length == 1){
                    AllHandleData.統計期_年 = day[0].split("年")[0];
                }
                AllHandleData.總處理量 = item.value1;
                AllHandleData.回收再利用量 = item.value2;
                AllHandleData.焚化量 = item.value3;
                AllHandleData.衛生掩埋量 = item.value4;
                AllHandleData.其他處理量 = item.value5;
                dataHandle.value.push(AllHandleData);
            }
        })
    })
    //執行機關一般廢棄物處理量,資料年間 110~112
    fetch("https://data.moenv.gov.tw/api/v2/stat_p_129?api_key=45b37ff8-c43e-40fc-ae21-a15629c78020")
    .then(res => res.json())
    .then(CityHandle =>{
        let getCityHandle = ref(CityHandle.records);
        getCityHandle.value.forEach((item) => {
            let CityHandleData = {統計期_年: '', 統計期_月: '', 統計區: '', 總處理量: '', 回收再利用量: '', 焚化量: '', 衛生掩埋量: '', 其他處理量: ''}
            let day = item.item1.split(" ")
            if (Number(day[0].split("年")[0]) <= 112 && Number(day[0].split("年")[0]) >= 110){
                if (Object.keys(day).length == 2){
                    CityHandleData.統計期_年 = day[0].split("年")[0];
                    CityHandleData.統計期_月 = day[1].split("月")[0];
                }
                if (Object.keys(day).length == 1){
                    CityHandleData.統計期_年 = day[0].split("年")[0];
                }
                CityHandleData.統計區 = item.item2;
                CityHandleData.總處理量 = item.value1;
                CityHandleData.回收再利用量 = item.value2;
                CityHandleData.焚化量 = item.value3;
                CityHandleData.衛生掩埋量 = item.value4;
                CityHandleData.其他處理量 = item.value5;
                dataHandle.value.push(CityHandleData);
            }
        })
    })
})


// sel
const selYearOut = ref('')
const selCityOut = ref('')
let upDateChartOutTrend = function() {
    console.log(selYearOut.value);
    console.log(selCityOut.value);
    let selItemOut = ref([]);
    dataOut.value.forEach((item) => {
        if (item.統計期_年 === selYearOut.value && item.統計區 === selCityOut.value && item.統計期_月 !== "") {
            selItemOut.value.push(item)
            console.log(item);
        }
    })
    optionOut.value.series[0].data = [
        Number(selItemOut.value[11].一般垃圾量),
        Number(selItemOut.value[10].一般垃圾量),
        Number(selItemOut.value[9].一般垃圾量),
        Number(selItemOut.value[8].一般垃圾量),
        Number(selItemOut.value[7].一般垃圾量),
        Number(selItemOut.value[6].一般垃圾量),
        Number(selItemOut.value[5].一般垃圾量),
        Number(selItemOut.value[4].一般垃圾量),
        Number(selItemOut.value[3].一般垃圾量),
        Number(selItemOut.value[2].一般垃圾量),
        Number(selItemOut.value[1].一般垃圾量),
        Number(selItemOut.value[0].一般垃圾量),
    ]
    optionOut.value.series[1].data = [
        Number(selItemOut.value[11].資源垃圾量),
        Number(selItemOut.value[10].資源垃圾量),
        Number(selItemOut.value[9].資源垃圾量),
        Number(selItemOut.value[8].資源垃圾量),
        Number(selItemOut.value[7].資源垃圾量),
        Number(selItemOut.value[6].資源垃圾量),
        Number(selItemOut.value[5].資源垃圾量),
        Number(selItemOut.value[4].資源垃圾量),
        Number(selItemOut.value[3].資源垃圾量),
        Number(selItemOut.value[2].資源垃圾量),
        Number(selItemOut.value[1].資源垃圾量),
        Number(selItemOut.value[0].資源垃圾量),
    ]
    optionOut.value.series[2].data = [
        Number(selItemOut.value[11].廚餘量),
        Number(selItemOut.value[10].廚餘量),
        Number(selItemOut.value[9].廚餘量),
        Number(selItemOut.value[8].廚餘量),
        Number(selItemOut.value[7].廚餘量),
        Number(selItemOut.value[6].廚餘量),
        Number(selItemOut.value[5].廚餘量),
        Number(selItemOut.value[4].廚餘量),
        Number(selItemOut.value[3].廚餘量),
        Number(selItemOut.value[2].廚餘量),
        Number(selItemOut.value[1].廚餘量),
        Number(selItemOut.value[0].廚餘量),
    ]
    console.log(selItemOut);
}

const selYearHan = ref('')
const selCityHan = ref('')
let upDateChartHanTrend = function() {
    console.log(selYear.value);
    console.log(selCity.value);
    let selItemHan = ref([]);
    dataHandle.value.forEach((item) => {
        if (item.統計期_年 === selYearHan.value && item.統計區 === selCityHan.value && item.統計期_月 !== "") {
            selItemHan.value.push(item)
            console.log(item);
        }
    })
    optionHan.value.series[0].data = [
        Number(selItemHan.value[11].回收再利用量),
        Number(selItemHan.value[10].回收再利用量),
        Number(selItemHan.value[9].回收再利用量),
        Number(selItemHan.value[8].回收再利用量),
        Number(selItemHan.value[7].回收再利用量),
        Number(selItemHan.value[6].回收再利用量),
        Number(selItemHan.value[5].回收再利用量),
        Number(selItemHan.value[4].回收再利用量),
        Number(selItemHan.value[3].回收再利用量),
        Number(selItemHan.value[2].回收再利用量),
        Number(selItemHan.value[1].回收再利用量),
        Number(selItemHan.value[0].回收再利用量),
    ]
    optionHan.value.series[1].data = [
        Number(selItemHan.value[11].焚化量),
        Number(selItemHan.value[10].焚化量),
        Number(selItemHan.value[9].焚化量),
        Number(selItemHan.value[8].焚化量),
        Number(selItemHan.value[7].焚化量),
        Number(selItemHan.value[6].焚化量),
        Number(selItemHan.value[5].焚化量),
        Number(selItemHan.value[4].焚化量),
        Number(selItemHan.value[3].焚化量),
        Number(selItemHan.value[2].焚化量),
        Number(selItemHan.value[1].焚化量),
        Number(selItemHan.value[0].焚化量),
    ]
    optionHan.value.series[2].data = [
        Number(selItemHan.value[11].衛生掩埋量),
        Number(selItemHan.value[10].衛生掩埋量),
        Number(selItemHan.value[9].衛生掩埋量),
        Number(selItemHan.value[8].衛生掩埋量),
        Number(selItemHan.value[7].衛生掩埋量),
        Number(selItemHan.value[6].衛生掩埋量),
        Number(selItemHan.value[5].衛生掩埋量),
        Number(selItemHan.value[4].衛生掩埋量),
        Number(selItemHan.value[3].衛生掩埋量),
        Number(selItemHan.value[2].衛生掩埋量),
        Number(selItemHan.value[1].衛生掩埋量),
        Number(selItemHan.value[0].衛生掩埋量),
    ]
    optionHan.value.series[3].data = [
        Number(selItemHan.value[11].其他處理量),
        Number(selItemHan.value[10].其他處理量),
        Number(selItemHan.value[9].其他處理量),
        Number(selItemHan.value[8].其他處理量),
        Number(selItemHan.value[7].其他處理量),
        Number(selItemHan.value[6].其他處理量),
        Number(selItemHan.value[5].其他處理量),
        Number(selItemHan.value[4].其他處理量),
        Number(selItemHan.value[3].其他處理量),
        Number(selItemHan.value[2].其他處理量),
        Number(selItemHan.value[1].其他處理量),
        Number(selItemHan.value[0].其他處理量),
    ]
    console.log(selItemHan);
}

// echarts
provide(THEME_KEY, )
const chartMon = []
for (var i = 1; i <= 12; i++){
    let mon = i + '月'
    chartMon.push(mon)
}
const optionOut = ref({
    title: {
        text: '各縣市歷年一般廢棄物產出量趨勢圖',
        textStyle:{fontSize:24},
        top: '3%',
        left: 'center'
    },
    tooltip: {trigger: 'axis'},
    legend: {
        data: ['一般垃圾量', '資源垃圾量', '廚餘量'],
        bottom: '1%'
    },
    toolbox: {
        show: true,
        itemSize: 20,
        top: '3%',
        right: '5%',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            saveAsImage: { show: true },
        },
        iconStyle: {
            borderWidth: 2.5
        },
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            fontSize: 18,
            color: '#000'
        },
        data: chartMon,
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            fontSize: 18,
            color: '#000'
        },
    },
    series: [
        {
            name: '一般垃圾量',
            type: 'line',
            data: [35, 42, 28, 55, 22, 48, 31, 27, 39, 18, 46, 24],
            smooth: true
        },
        {
            name: '資源垃圾量',
            type: 'line',
            data: [42, 33, 39, 25, 48, 29, 37, 41, 32, 46, 27, 38],
            smooth: true
        },
        {
            name: '廚餘量',
            type: 'line',
            data: [23, 25, 33, 20, 30, 23, 32, 32, 29, 36, 27, 38],
            smooth: true
        }
    ]
})
const optionHan = ref({
    title: {
        text: '各縣市歷年一般廢棄物處理量趨勢圖',
        textStyle:{fontSize:24},
        top: '3%',
        left: 'center'
    },
    tooltip: {trigger: 'axis'},
    legend: {
        data: ['回收再利用量', '焚化量', '衛生掩埋量', '其他處理量'],
        bottom: '1%'
    },
    toolbox: {
        show: true,
        itemSize: 20,
        top: '3%',
        right: '5%',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            saveAsImage: { show: true },
        },
        iconStyle: {
            borderWidth: 2.5
        },
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            fontSize: 18,
            color: '#000'
        },
        data: chartMon,
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            fontSize: 18,
            color: '#000'
        },
    },
    series: [
        {
            name: '回收再利用量',
            type: 'line',
            data: [35, 42, 28, 55, 22, 48, 31, 27, 39, 18, 46, 24],
            smooth: true
        },
        {
            name: '焚化量',
            type: 'line',
            data: [42, 33, 39, 25, 48, 29, 37, 41, 32, 46, 27, 38],
            smooth: true
        },
        {
            name: '衛生掩埋量',
            type: 'line',
            data: [23, 25, 33, 20, 30, 23, 32, 32, 29, 36, 27, 38],
            smooth: true
        },
        {
            name: '其他處理量',
            type: 'line',
            data: [23, 25, 33, 20, 30, 23, 32, 32, 29, 36, 27, 38],
            smooth: true
        },
    ]
})
console.log(chartMon);
</script>

<template>
    <div class="area Out">
        <div class="search">
            <select v-model="selYearOut">
                <option value="">年份</option>
                <option v-for="(yy, index) in arrYear" :value="yy" :key="yy">{{ yy }}年</option>
            </select>
            <select v-model="selCityOut">
                <option value="">縣市</option>
                <option v-for="(city, index) in arrCity" :value="city" :key="city">{{ city }}</option>
            </select>
            <button type="button" @click="upDateChartOutTrend">確認</button>
        </div>
        <v-chart class="trend" :option="optionOut" autoresize />
    </div>
    <div class="area Handle">
        <div class="search">
            <select v-model="selYearHan">
                <option value="">年份</option>
                <option v-for="(yy, index) in arrYear" :value="yy" :key="yy">{{ yy }}年</option>
            </select>
            <select v-model="selCityHan">
                <option value="">縣市</option>
                <option v-for="(city, index) in arrCity" :value="city" :key="city">{{ city }}</option>
            </select>
            <button type="button" @click="upDateChartHanTrend">確認</button>
        </div>
        <v-chart class="trend" :option="optionHan" autoresize />
    </div>
</template>

<style scoped lang="scss">
.area{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 2rem;
    margin-bottom: 5%;
}
.search{
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
    select{
        width: 20%;
        height: 55%;
        font-size: 1.5rem;
        text-align: center;
        border: none;
        border-radius: 1rem;
        background: white;
        margin: 0 2%;
        &:hover{
            box-shadow: 0 0 10px black;
        }
    }
    button{
        width: 10%;
        height: 55%;
        font-size: 1.5rem;
        color: black;
        background: white;
        border: none;
        border-radius: 1rem;
        margin: 0 2%;

        transition: 0.2s;
        cursor: pointer;
        &:hover{
            box-shadow: 0 0 10px black;
        }
        &:active{
            scale: 0.95;
        }
    }
}
.trend{
    width: 80%;
    height: 75%;
    border: 1px solid black;
    border-radius: 1rem;
}
</style>