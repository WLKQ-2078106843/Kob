<template>
    <div class="playground">
        <GameMap/>
    </div>
</template>

<script>
import GameMap from './GameMap.vue';

export default {
    components: {
        GameMap
    }
}

</script>

<style scoped>

div.playground {
    /* 百分之60的浏览器宽度 */
    width: 60vw; 
    height: 70vh;
    

    /* auto左右两边居中 */
    margin: 40px auto; 
}
</style>


