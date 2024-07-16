<script setup>
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";


const option = {
    xAxis: {
    type: 'category',
    data: ['107','108','109','110','111']
},
    yAxis: {
    type: 'value'
},
    series: [{
    data: ['2.0','2.3','2.1','3.0','3.5'],
    type: 'line',
    label: {
    show: true,
    position: 'bottom',
    textStyle: {
        fontSize: 20
        }
    }
}]
};
</script>


<template>
    <v-chart class="chart" :option="option" />

</template>


<style scoped lang="scss">
.chart{
    height: 500px;
}
</style>