<script setup>
    import VChart from 'vue-echarts';       // 原本是import VChart, { THEME_KEY } from 'vue-echarts';
    import { ref } from 'vue';              // 原本是import { ref, provide } from 'vue';

    const period = ref('');             // 綁定選擇的下拉選單選項
    let producechartData = ref([]);     // 保存從 API 獲取的數據
        fetch("https://data.moenv.gov.tw/api/v2/stat_p_126?api_key=b7cccc28-d920-43b4-bc91-07682f3591e7")
            .then(res => res.json())
            .then(data =>{ 
                // console.log(data);
                producechartData.value = data.records;
                console.log(producechartData.value);
        });

    const option = ref({
    title: {
        text: '單位：公噸',
        padding: [400, 0, 0, 450],
        textStyle:{
            fontSize: 16,
            fontWeight: 100,
        }
    }, 
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '3%',
        left: 'center',
        textStyle: {
        fontSize: 18}
    },
    series: [{
        // name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
        },
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold',
                formatter:'{d}%'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 0, name: '一般垃圾量'},
            { value: 0, name: '資源垃圾量' },
            { value: 0, name: '廚餘量' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
        ]
    }]
    });
    let updateChartData = function() {
        let selectedItem = producechartData.value.find(item => item.item1 === period.value);
        // console.log(selectedItem);
        if (selectedItem) {
            option.value.series[0].data = [
                { value: selectedItem.value2, name: '一般垃圾量' },
                { value: selectedItem.value3, name: '資源垃圾量' },
                { value: selectedItem.value4, name: '廚餘量' }
            ];
        }
    };

</script>





<template>
    <div class="produce">
        <span>全國一般廢棄物產生量</span>
        <select name="" v-model="period" @change="updateChartData" >
            <option value="">請選擇年月</option>
            <option v-for="item in producechartData" :key ="item.item1" :value="item.item1">
                {{ item.item1 }}
            </option>
        </select>
        <v-chart class="chart" :option="option" autoresize/>    <!-- div內的id會對應main.js的chartDom -->
        </div>
</template>







<style scoped lang="scss">
.produce{
    height: 100dvh;
    width: 100dvh;
    margin-left: 10%;
    
    span{
        font-size: 28px;
        font-weight: bold;
        color: rgb(35, 39, 39);
        padding: 1% 22%;
    }
    select{
        font-size: 20px;
        margin: 2% 32%;
    }
    .chart{
        width: 80%;
        height: 90%;
        // border: 1px solid black;
    }
}    

</style>

