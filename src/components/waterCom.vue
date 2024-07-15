<script>
export default{
    data(){
        return{

        }
    }

}
</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <div class="backGround">
        <div class="map">
            <img src="../components/河川圖.png" alt="" class="kawaTW">
            <p class="A">淡水河</p>
            <p class="B">頭前溪</p>
            <p class="C">後龍溪</p>
            <p class="D">大安溪</p>
            <p class="E">大甲溪</p>
            <p class="F">烏溪</p>
            <p class="G">濁水溪</p>
            <p class="H">北港溪</p>
            <p class="I">朴子溪</p>
            <p class="J">八掌溪</p>
            <p class="K">急水溪</p>
            <p class="L">曾文溪</p>
            <p class="M">鹽水溪</p>
            <p class="N">二仁溪</p>
            <p class="O">高屏溪</p>
            <p class="P">東港溪</p>
            <p class="Q">林邊溪</p>
            <p class="R">蘭陽溪</p>
            <p class="S">花蓮溪</p>
            <p class="T">秀姑巒溪</p>
            <p class="U">卑南溪</p>
        </div>
        <div class="info">
            <div class="riverName">
                <p class="date">2024/07/10</p>
                <h2 class="river
                ">淡水河</h2>
                <i class="fa-sharp fa-solid fa-location-dot fa-fade" style="color: #ff0a54;"></i>
                <p class="cityName">台北市</p>
            </div>
            <div class="rpiCard"> <!-- 翻轉圈圈 -->
                <div class="front size">
                    <h5>RPI</h5>
                    <P class="rpiNum">1.5</P>
                    <h5>良好</h5>
                </div>
                <div class="back size">
                    <i class="fa-regular fa-face-smile-beam"></i>
                </div>
            </div>
            <div class="testValue">
                <p>監測站數______________ 38</p>
                <p>溶氧量平均值__________ 7</p>
                <p>生化需氧量平均值______ 2.7</p>
                <p>懸浮固體平均值________ 18.9</p>
                <p>氨氮平均值____________ 0.73</p>
                <p>溶氧量最大值__________ 11.9</p>
                <p>生化需氧量最大值______ 46.5</p>
                <p>懸浮固體最大值________ 386</p>
                <p>氨氮最大值____________ 6.39</p>
            </div>
        </div>
        <div class="rpi">
            <h4>RPI</h4>
            <div class="red"></div>
            <div class="orange"></div>
            <div class="yello"></div>
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
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url('water figma.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex; // ⤵固定map、info、rpi的大div並排在底部
    align-items: flex-end;
    //justify-content: center;
}
.map{
    width: 50dvw;
    height: 85dvh;
    //border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .kawaTW{
        width: 44%;  
    }
    p{
        position: absolute;
        width: 100px;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
        color: rgb(219, 238, 255);
        text-shadow: 0px 1px 2px rgb(250, 87, 114);
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            color: rgb(255, 169, 40);
        }
        &:active{
            scale: 0.95;
        }
    }
    .A{
        left: 50%;
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
        left: 67%;
        top: 40%;
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
    width: 23dvw;
    height: 83dvh;
    //border: 1px solid gray;
    margin: 20px;
    background-color: rgba(128, 128, 128, 0.599);
    box-shadow: rgba(0, 0, 0, 0.36) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .riverName{
        height: 15%;
        width: 85%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: azure;
        text-shadow: -1px 0 #000, 0 1px #000,
        1px 0 #000, 0 -1px #000;
        h2{
            padding: 10%;
        }
    }
    .rpiCard{
        height: 30%;
        width: 50%;
        position: relative;
        &:hover .front{
            transform: rotateY(180deg);
        }
        &:hover .back{
            transform: rotateY(0deg);
        }
        
        .size{
            width: 100%;
            height: 100%;
            position: absolute;
            border: 5px solid rgb(32, 179, 32);
            border-radius: 50%;
            box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
            //以下是圓圈中的內容樣式
            font-weight: 600;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background-color: #c3f3c3;
            //翻轉效果 !!!
            transition: transform 1.0s ease;
            backface-visibility: hidden;
        }
        .front{
            font-size: 30px;
            transform:  rotateY(0deg);
           /* &:hover{
                transform: rotateY(180deg);
            }*/
        }
        .back{
            transform: rotateY(-180deg);
          /*  &:hover{
                transform: rotateY(0deg);
            }*/
            i{
                font-size: 60px;
                color: rgb(233, 188, 42)
            }
        }
    }
    .testValue{
        height: 55%;
        font-size: 20px;
        text-shadow: -1px 0 #000, 0 1px #000,
        1px 0 #000, 0 -1px #000;
        p{
            margin: 7px;
            color: azure;
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
        &:active{
            transition: 0.3s;
            scale: 1.10;
        }
    }
    .red{
        background-color: red;
    }
    .orange{
        background-color: orange;
    }
    .yello{
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
</style>