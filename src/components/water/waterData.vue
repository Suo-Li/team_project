<script>

export default {
data() {
    return {
    riverArr: [],
    selectedRiver: '',
    selectedYear: '',
    riverbyCity:'',
    uniqueYears: [],
    riverOptions: ['淡水河系', '頭前溪', '後龍溪', '大安溪', '大甲溪', '烏溪', '濁水溪', '北港溪', '朴子溪', '八掌溪', '急水溪', '曾文溪', '鹽水溪', '二仁溪', '高屏溪', '東港溪', '林邊溪','蘭陽溪','花蓮溪', '秀姑巒溪', '卑南溪'],
    selectedData: null,
    rpi: null
    };
},
created() {
    fetch('https://data.moenv.gov.tw/api/v2/stat_p_123?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate desc&format=JSON')
    .then(response => response.json())
    .then(data => {
        this.riverArr = data.records.filter(item => {
        return this.riverOptions.includes(item.item2);
        });
        const yearSet = new Set();
        this.riverArr.forEach(item => {
        const year = parseInt(item.item1.slice(0, 3));
        if (year >= 100 && year <= 111) {
            yearSet.add(year);
        }});
        this.uniqueYears = Array.from(yearSet).sort((a, b) => a - b);
    });
},
methods: {
    selectRiver(river) {           // ⤵ 河川&年份可相互點選並跑出對應數據
        this.selectedRiver = river;
        if (this.selectedYear) {
            this.updateSelectedData();
        }
        /*this.selectedYear = '';
        this.selectedData = null;
        this.rpi = null; */
    },
    handleYearChange() {
        if (this.selectedRiver) {
            this.updateSelectedData();
        }
    },
    updateSelectedData() {
        this.selectedData = this.riverArr.find(item => {
            const year = parseInt(item.item1.slice(0, 3));
            return year === this.selectedYear && item.item2 === this.selectedRiver;
        });

        this.calculateRPI();
    },
    riverCity(cityName) {  // 河川所在區域
        this.riverbyCity = cityName;
    },
    calculateRPI() {             //  RPI 計算公式 
    if (this.selectedData) {
        const doValue = parseFloat(this.selectedData.value2);
        const bodValue = parseFloat(this.selectedData.value3);
        const ssValue = parseFloat(this.selectedData.value4);
        const nh3Value = parseFloat(this.selectedData.value5);
        const rpiValue = (1 / 4) * (this.getPollutionScore(doValue) + this.getPollutionScore(bodValue) + this.getPollutionScore(ssValue) + this.getPollutionScore(nh3Value));
        this.rpi = rpiValue.toFixed(2);
    } else {
        this.rpi = null;
    }
    },
    getPollutionScore(value) {
    if (value <= 2) return 1;
    else if (value <= 4) return 2;
    else if (value <= 6) return 3;
    else return 4;
    }
},
computed: {
rpiLevel() {
    if (this.rpi === null) return '';
    const rpi = parseFloat(this.rpi);
    if (rpi <= 2) return '未（稍）受污染';
    else if (rpi <= 3) return '輕度污染';
    else if (rpi <= 6) return '中度污染';
    else return '嚴重污染';
},

sizeBackgroundColor() { // RPI底色
    if (this.rpi === null) return '';
    const rpi = parseFloat(this.rpi);
    if (rpi <= 2) return 'rgb(200, 244, 200, 0.5)';
    else if (rpi <= 3) return 'rgb(248, 243, 199, 0.5)';
    else if (rpi <= 6) return 'rgb(248, 195, 138, 0.5)';
    else return 'rgb(246, 204, 204, 0.5)';
},  

sizeBorderColor() { // RPI外框色
    if (this.rpi === null) return '';
    const rpi = parseFloat(this.rpi);
    if (rpi <= 2) return 'rgb(32, 179, 32)';
    else if (rpi <= 3) return 'rgb(255, 230, 0)';
    else if (rpi <= 6) return 'rgb(255, 132, 0)';
    else return 'red';
},

rpiIcon() {   // RPI表情
    if (this.rpi === null) return 'fa-regular fa-face-smile-wink'; //預設
    const rpi = parseFloat(this.rpi);
    if (rpi <= 2) return 'fa-regular fa-face-laugh'; //綠色
    else if (rpi <= 3) return 'fa-regular fa-face-meh'; //黃色
    else if (rpi <= 6) return 'fa-regular fa-face-sad-tear'; //橘色
    else return 'fa-face-sad-cry'; // 紅色
}
}

};

</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="backGround">
<div class="map">
    <img src="./河川圖.png" alt="" class="kawaTW">
    <p class="A" @click="selectRiver('淡水河系'), riverCity('台北 新北')">淡水河系</p>
    <p class="B" @click="selectRiver('頭前溪'), riverCity('新竹')">頭前溪</p>
    <p class="C" @click="selectRiver('後龍溪'), riverCity('苗栗')">後龍溪</p>
    <p class="D" @click="selectRiver('大安溪'), riverCity('苗栗 台中')">大安溪</p>
    <p class="E" @click="selectRiver('大甲溪'), riverCity('台中')">大甲溪</p>
    <p class="F" @click="selectRiver('烏溪'), riverCity('台中')">烏溪</p>
    <p class="G" @click="selectRiver('濁水溪'), riverCity('彰化 雲林')">濁水溪</p>
    <p class="H" @click="selectRiver('北港溪'), riverCity('雲林 嘉義')">北港溪</p>
    <p class="I" @click="selectRiver('朴子溪'), riverCity('嘉義')">朴子溪</p>
    <p class="J" @click="selectRiver('八掌溪'), riverCity('嘉義、台南')">八掌溪</p>
    <p class="K" @click="selectRiver('急水溪'), riverCity('台南')">急水溪</p>
    <p class="L" @click="selectRiver('曾文溪'), riverCity('台南')">曾文溪</p>
    <p class="M" @click="selectRiver('鹽水溪'), riverCity('台南')">鹽水溪</p>
    <p class="N" @click="selectRiver('二仁溪'), riverCity('高雄')">二仁溪</p>
    <p class="O" @click="selectRiver('高屏溪'), riverCity('高雄 屏東')">高屏溪</p>
    <p class="P" @click="selectRiver('東港溪'), riverCity('屏東')">東港溪</p>
    <p class="Q" @click="selectRiver('林邊溪'), riverCity('屏東')">林邊溪</p>
    <p class="R" @click="selectRiver('蘭陽溪'), riverCity('宜蘭')">蘭陽溪</p>
    <p class="S" @click="selectRiver('花蓮溪'), riverCity('花蓮')">花蓮溪</p>
    <p class="T" @click="selectRiver('秀姑巒溪'), riverCity('花蓮')">秀姑巒溪</p>
    <p class="U" @click="selectRiver('卑南溪'), riverCity('台東')">卑南溪</p>
</div>
<div class="info">
    <div class="riverName">
        <select class="year" v-model="selectedYear" @change="handleYearChange">
            <option disabled value="">請選擇年份</option>
            <option v-for="year in uniqueYears" :key="year" :value="year">{{ year }}</option>
        </select>
        <h2 class="river">{{ selectedRiver }}</h2>
        <i class="fa-sharp fa-solid fa-location-dot fa-fade" style="color: #ff0a54;"></i>
        <p class="cityName">{{ this.riverbyCity }}</p>
    </div>
    <div class="rpiCard"> <!-- 翻轉圈圈 -->
    <div class="front size" :style="{ backgroundColor: sizeBackgroundColor, borderColor: sizeBorderColor }">
        <h5>RPI</h5>
        <p class="rpiNum">{{ rpi }}</p>
        <h5>{{ rpiLevel }}</h5>
    </div> 
    <div class="back size" :style="{ backgroundColor: sizeBackgroundColor, borderColor: sizeBorderColor }">
    <i :class="`fa ${rpiIcon}`"></i>
    </div>
    </div>
    <div class="testValue"> <!-- 監測數值 -->
    <p class="testText" >監測站數 <p>{{ selectedData ? selectedData.value1 : '' }}</p></p>
    <p class="testText" >溶氧量平均值 <p>{{ selectedData ? selectedData.value2 : '' }}</p></p>
    <p class="testText" >生化需氧量平均值 <p>{{ selectedData ? selectedData.value3 : '' }}</p></p>
    <p class="testText" >懸浮固體平均值 <p>{{ selectedData ? selectedData.value4 : '' }}</p></p>
    <p class="testText" >氨氮平均值 <p>{{ selectedData ? selectedData.value5 : '' }}</p></p>
    <p class="testText" >溶氧量最大值<p>{{ selectedData ? selectedData.value6 : '' }}</p></p>
    <p class="testText" >生化需氧量最大值 <p>{{ selectedData ? selectedData.value7 : '' }}</p></p>
    <p class="testText" >懸浮固體最大值 <p>{{ selectedData ? selectedData.value8 : '' }}</p></p>
    <p class="testText" >氨氮最大值<p>{{ selectedData ? selectedData.value9 : '' }}</p></p>
    </div>
</div>
<div class="rpi">
    <h4>RPI</h4>
    <div class="red"></div>
    <div class="orange"></div>
    <div class="yellow"></div>
    <div class="green"></div>
</div>
<div class="rpiValue">
    <p>6.0</p>
    <p>3.0</p>
    <p>2.0</p>
</div>
</div>

</template>

<style scoped lang="scss">
.backGround{
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url('./water\ figma.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex; // ⤵固定map、info、rpi的大div並排在底部
    align-items: flex-end;
    //justify-content: center;
}

.map{
    width: 50dvw;
    height: 85dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .kawaTW{
        width: 337px;  
    }
    p{
        position: absolute;
        width: 100px;
        height: 50px;
        font-size: 20px;
        text-shadow: 2px 2px 2px black;
        font-weight: 600;
        //text-shadow: 2px 3px 3px rgb(250, 87, 114);
        color: rgb(219, 238, 255);
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            text-shadow: 3px 3px 2px black;
            color: rgb(255, 223, 39);
            transform: translate(-5px,-5px);
        }
        &:active{
            scale: 0.95;
        }
    }
    .A{
        left: 48%;
        top: 0%;
    }
    .B{
        left: 40%;
        top: 9%;
    }
    .C{
        left: 36%;
        top: 15%;
    }
    .D{
        left: 34%;
        top: 20%;
    }
    .E{
        left: 32%;
        top: 25%;
    }
    .F{
        left: 32%;
        top: 30%;
    }
    .G{
        left: 26%;
        top: 39%;
    }
    .H{
        left: 22%;
        top: 47%;
    }
    .I{
        left: 23%;
        top: 51%;
    }
    .J{
        left: 22%;
        top: 55%;
    }
    .K{
        left: 21%;
        top: 59%;
    }
    .L{
        left: 20%;
        top: 63%;
    }
    .M{
        left: 22%;
        bottom: 25%;
    }
    .N{
        left: 24%;
        bottom: 21%;
    }
    .O{
        left: 27%;
        bottom: 12%;
    }
    .P{
        left: 30%;
        bottom: 8%;
    }
    .Q{
        left: 33%;
        bottom: 4%;
    }
    .R{
        left: 71%;
        top: 15%;
    }
    .S{
        left: 68%;
        top: 38%;
    }
    .T{
        left: 65%;
        bottom: 40%;
    }
    .U{
        left: 57%;
        bottom: 18%;
    }
}

.info{
    width: 31dvw;
    height: 83dvh;
    margin: 20px 0px;
    background-color: rgba(128, 128, 128, 0.599);
    box-shadow: rgba(0, 0, 0, 0.36) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .riverName{
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: azure;
        text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
        .year{
            width: 20%;
            height: 40%;
            font-size: 14px;
            text-align: center;
            border-radius: 5px;
            background-color: rgba(211, 208, 208, 0.67);
            cursor: pointer;
        }
        h2{
            font-size: 33px;
            padding: 0 10%;
        }
        p{
            width: 60px;
            font-size: 20px;
        }
    }
    .rpiCard{
        height: 35%;
        width: 45%;
        margin: 10px;
        position: relative;
        &:hover .front{ // 觸碰時，前面由0轉向180
            transform: rotateY(180deg);
        }
        &:hover .back{ // 觸碰時，前面由180轉向0
            transform: rotateY(0deg);
        }
        
        
        .size{
            width: 100%;
            height: 100%;
            position: absolute;
            border: 8px solid rgb(32, 179, 32);
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
            //以下是圓圈中的內容樣式
            color: rgb(255, 255, 255);
            text-shadow: 2px 2px 0px black;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color: rgba(179, 247, 179, 0.5);
            //翻轉效果 !!!
            transition: transform 1.0s ease;
            backface-visibility: hidden;
        }
        .front{
            font-size: 30px;
            font-weight: 600;
            transform:  rotateY(0deg);
            
            .rpiNum{
            font-size: 40px;
            }
            /* &:hover{ 要對整個card，不是單面~~
            transform: rotateY(180deg);
            }*/
        }
        .back{
            transform: rotateY(-180deg);
            /*  &:hover{ 同上！
            transform: rotateY(0deg);
            }*/
            i{
                font-size: 70px;
                
            }
        }
    }
    .testValue{
        height: 45%;
        width: 100%;
        display: flex; // ⤵ 使每個 p 並排、自動換下行、置中
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        .testText{
            width: 47%;
            height: 17%;
            margin: 3px 5px;
            background-color: rgba(255, 255, 255, 0.834);
            border-left: 10px solid rgba(60, 57, 57, 0.888);
            border-radius: 5px;
            font-size: 17px; // ⤵ 文字的樣式、位置
            color: rgb(0, 0, 0);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            
            p{
                //font-weight: bold; 
                font-size: 28px;
                padding-left: 10px;
            }
        }
    }
}

.rpi{
    width: 5dvw;
    height: 50dvh;
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding-bottom: 2%;
    font-size: 20px;
    color: azure;
    div{
        width: 15px;
        height: 80px;
        transition: 0.5s;
        &:hover{
            scale: 1.15;
        }
        &:active{
            scale: 0.95;
        }
    }
    .red{
        background-color: red;
    }
    .orange{
        background-color: orange;
    }
    .yellow{
        background-color:yellow;
    }
    .green{
        background-color: rgb(32, 179, 32);
    }
}

.rpiValue{
    width: 15px;
    height: 42dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 70px;
    //border: 1px solid black;
    p{
        color: azure;
    }
}
</style>_river