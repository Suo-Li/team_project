<script setup>
    import VChart from 'vue-echarts';       
    import { ref } from 'vue';              

    const period = ref('');             
    let processchartData = ref([]);     
        fetch("https://data.moenv.gov.tw/api/v2/stat_p_128?api_key=b7cccc28-d920-43b4-bc91-07682f3591e7")
            .then(res => res.json())
            .then(data =>{ 
                // console.log(data);
                processchartData.value = data.records;
                console.log(processchartData.value);
        });

    const option = ref({
        title: {
            text: '單位：公噸',
            padding: [400, 0, 0, 450],
            textStyle:{
                fontSize: 16,
                fontWeight: "bold",
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
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
                formatter:'{d}%'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 0, name: '回收再利用量'},
                { value: 0, name: '焚化量' },
                { value: 0, name: '衛生掩埋量' },
            { value: 0, name: '其他處理量' },
            // { value: 300, name: 'Video Ads' }
        ]
    }]
});
let updateChartData = function() {
    let selectedItem = processchartData.value.find(item => item.item1 === period.value);
    if (selectedItem) {
        option.value.series[0].data = [
            { value: selectedItem.value2, name: '一般垃圾量' },
            { value: selectedItem.value3, name: '資源垃圾量' },
            { value: selectedItem.value4, name: '廚餘量' },
            { value: selectedItem.value5, name: '其他處理量' }
        ];
    }
};

</script>




<template>
    <div class="process">
        <span>全國一般廢棄物處理量</span>
        <select name="" v-model="period" @change="updateChartData" >
            <option value="">請選擇年月</option>
            <option v-for="item in processchartData" :key ="item.item1" :value="item.item1">
                {{ item.item1 }}
            </option>
        </select>
        <v-chart class="chart" :option="option" autoresize/>    
        </div>
</template>









<style scoped lang="scss">
.process{
    height: 100dvh;
    width: 100dvh;
    margin-left: 5%;
    
    span{
        font-size: 28px;
        font-weight: bold;
        color: rgb(35, 39, 39);
        padding: 2% 20%;
    }
    select{
        font-size: 20px;
        margin: 2% 31%;
    }
    .chart{
        width: 80%;
        height: 90%;
        // border: 1px solid black;
    }
}

</style>

