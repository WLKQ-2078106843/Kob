<template>
  <div ref="parent" class="gamemap">
    <canvas ref="canvas" tabindex="0"></canvas>
    <!-- 游戏画布再canvas里 -->
</div>
</template>

<script>
import { GameMap } from "@/assets/scripts/GameMap"
import { ref, onMounted } from 'vue'

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);

        onMounted(()  => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        })

        return {
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    /* 同时实现数值和水平居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>