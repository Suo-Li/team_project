<script setup>
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

const option = {
    xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
},
    yAxis: {
    type: 'value'
},
    series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
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