<script setup>
    import wasteTitle from "../components/waste/WasteTitleCp.vue"
    import wasteTai from "../components/waste/WasteTaiCp.vue"
    import wasteTrend from "../components/waste/WasteTrendCp.vue"
    import WastePieProduce from "../components/waste/WastePieProduce.vue"
    import WastePieProcess from "../components/waste/WastePieProcess.vue"
    
</script>


<template>
    <div class="bgImg">
        <div class="title Blk">
            <wasteTitle />
        </div>
        <div class="taiwan Blk">
            <wasteTai />
        </div>
        <div class="chart Blk">
            <wasteTrend />
        </div>

        <div class="pieArea">
            <div class="produce">
                <WastePieProduce/>
            </div>
            <div class="process">
                <WastePieProcess/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .bgImg{
        width: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(https://cdn.pixabay.com/photo/2024/02/28/15/33/ai-generated-8602262_1280.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 23dvh;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .Blk{
        width: 90%;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 2rem;
        margin-bottom: 5%;
    }

    .title{
        height: 75dvh;
    }
    .taiwan{
        height: 110dvh;
    }
    .chart{
        height: 100dvh;
    }

    .pieArea{
        width: 90%;
        height: 80dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.5);
        // opacity:0.9;
        border-radius: 2rem;
        // border: 1px solid rgb(2, 2, 2);
        .produce{
            width: 100%;
            height: 95%;
            margin-top: 2%;
            // border: 1px solid rgb(0, 0, 0);
        }
        .process{
            width: 95%;
            height: 95%;
            margin-top: 2%;
            // border: 1px solid rgb(37, 205, 231);
        }
    }
</style>