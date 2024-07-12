<script setup>

</script>


<template>
    <div class="bgImg">
        <div class="taiwanBlk">
            <h1></h1>
            <div class="taiwanSvg"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&display=swap');

    .bgImg{
        width: 100%;
        height: 100%;
        color: white;
        font-family: "Chocolate Classical Sans", sans-serif;

        background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(https://cdn.pixabay.com/photo/2024/02/28/15/33/ai-generated-8602262_1280.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 20dvh;
        .search{
            font-size: 1.5rem;
            fieldset{
                border: 0.2rem solid white;
                border-radius: 1rem;
                padding-bottom: 1%;
            }
            .dataInfo{
                width: 10%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                legend{
                    text-align: center;
                }
            }
        }
    }
</style>
