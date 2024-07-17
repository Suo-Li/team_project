<script setup>
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
provide(THEME_KEY, '');

const data = {
    name: '廢棄物',
    children: [
        {name: '一般廢棄物',children: [{ name: '一般垃圾'},{ name: '資源回收'},{ name: '廚餘'},{ name: '巨大垃圾'}]},
        {name: '事業廢棄物'}
    ]
};

const option = ref({
    series: [{
        type: 'tree',
        data: [data],

        top: '15%',
        left: '20%',
        bottom: '15%',
        right: '20%',

        symbolSize: 15,
        symbol: 'rect',
        itemStyle:{color:'black'},

        orient: 'vertical',
        edgeShape: 'polyline',
        edgeForkPosition: '50%',
        lineStyle: {
            width: 3,
            color: '',
        },
        label: {
            fontSize: 25,
            position: 'top',
            align: 'center'
        },
        leaves: {
            label: {
                position: 'bottom',
                align: 'center'
            }
        }
    }]
});
</script>


<template>
    <div class="">
        <p>廢棄物類別</p>
        <v-chart class="chart" :option="option" autoresize />
    </div>
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Cactus+Classical+Serif&display=swap');
    div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        font-family: "Cactus Classical Serif", serif;
        font-size: 3rem;
        letter-spacing: 1rem;
        writing-mode: vertical-lr;
        padding-left: 20%;
    }
    .chart {
        width: 65%;
        height: 100%;
    }
</style>
