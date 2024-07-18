<script setup>
import { ref, onMounted, watch } from "vue";
import VChart from "vue-echarts";

const selectedRiver = ref("");
const uniqueName = ref([]);
const option = ref(getInitialOption());

const targetRivers = [
  '淡水河系', '頭前溪', '後龍溪', '大安溪', '大甲溪', '烏溪', '濁水溪', '北港溪', '朴子溪', '八掌溪', '急水溪',
  '曾文溪', '鹽水溪', '二仁溪', '高屏溪', '東港溪', '林邊溪', '蘭陽溪', '花蓮溪', '秀姑巒溪', '卑南溪'
];

function getInitialOption() {
  return {
    title: {
      text: '歷年溪流各項污染長度(單位:KM)',
      left: 'center',
      textStyle: {
        fontSize: 24,
        color: '#333',
      },
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(50, 50, 50, 0.7)',
      borderColor: '#333',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      data: ['未[稍]受污染長度', '輕度污染長度', '中度污染長度', '嚴重污染長度'],
      top: '10%',
      textStyle: {
        fontSize: 14,
        color: '#333',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: '保存',
          iconStyle: {
            borderColor: '#333',
          },
        },
      },
      right: '5%',
      top: '5%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#333',
        },
      },
      axisLabel: {
        fontSize: 12,
        color: '#333',
      },
      data: [],
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#333',
        },
      },
      axisLabel: {
        fontSize: 12,
        color: '#333',
      },
    },
    series: [
      { name: '未[稍]受污染長度', type: 'line', stack: 'Total', data: [], lineStyle: { width: 2 }, symbolSize: 8 },
      { name: '輕度污染長度', type: 'line', stack: 'Total', data: [], lineStyle: { width: 2 }, symbolSize: 8 },
      { name: '中度污染長度', type: 'line', stack: 'Total', data: [], lineStyle: { width: 2 }, symbolSize: 8 },
      { name: '嚴重污染長度', type: 'line', stack: 'Total', data: [], lineStyle: { width: 2 }, symbolSize: 8 },
    ],
  };
}


onMounted(async () => {
  try {
    const response = await fetch('https://data.moenv.gov.tw/api/v2/stat_p_120?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate%20desc&format=JSON');
    const data = (await response.json()).records;
    uniqueName.value = [...new Set(data.map(item => item.item2))].filter(name => targetRivers.includes(name));
    console.log('Unique river names:', uniqueName.value); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


watch(selectedRiver, (newRiver) => {
  if (newRiver) {
    fetchData(newRiver);
    updateTitle(newRiver);
  }
});


function updateChart(data) {
  const years = ["112年", "111年", "110年", "109年", "108年", "107年", "106年", "105年", "104年", "103年", "102年", "101年", "100年"];

  const filteredData = data.filter(item => years.includes(item.item1));

  const uniqueYears = [...new Set(filteredData.map(item => item.item1))].sort((a, b) => parseInt(a) - parseInt(b));

  option.value.xAxis.data = uniqueYears;
  option.value.series.forEach((series, index) => {
    series.data = uniqueYears.map(year => {
      const record = filteredData.find(item => item.item1 === year);
      return record ? Number(record[`value${index + 1}`]) : null;
    });
  });
}


function updateTitle(riverName) {
  option.value.title.text = `歷年${riverName}各項污染長度(單位:KM)`;
}


async function fetchData(riverName) {
  try {
    const response = await fetch('https://data.moenv.gov.tw/api/v2/stat_p_120?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate%20desc&format=JSON');
    const data = (await response.json()).records;
    const filteredData = data.filter(item => item.item2 === riverName);
    updateChart(filteredData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
</script>

<template>
  <div class="container">
    <select class="river" v-model="selectedRiver">
      <option disabled value="">請選擇河流</option>
      <option v-for="name in uniqueName" :key="name" :value="name">{{ name }}</option>
    </select>
    <v-chart class="chart" :option="option" />
    <a href="https://data.gov.tw/dataset/89034">資料來源：重要河川污染情形</a>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 3% 18%;
  height: 100dvh;
  width: 100%;
}

.river {
  width: 200px;
  padding: 10px;
  font-size: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  z-index: 10;
}

.chart {
  width: 100%;
  height: 400px;
  max-width: 1000px;
}

a{
  position: absolute;
  right: 30px;
  bottom: -93%;
}
</style>