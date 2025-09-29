<template>
  <div class="game-view bg-color-primary">
    <FTitle class="title">Ecobots</FTitle>
    <p class="font-size-body">
      Draw a path from start to finish with limited battery. The robot follows your plan, then we
      compare it with AI path finder.
    </p>
    <div class="game-map">
      <img v-if="map" :src="map?.mapImage" />
    </div>
    <PlayerForm class="playerform" />

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGameMap } from '../composables/useGameMap'
import { FTitle } from 'fari-component-library'
import PlayerForm from '../components/PlayerForm.vue'

const errorMessage = ref('')
const { data: map } = useGameMap()
</script>

<style scoped lang="scss">
.game-view {
  text-align: center;
  padding: 2rem;
  .error {
    color: red;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
}

.game-map {
  margin-top: 2rem;
  img {
    max-width: 100%;
    height: auto;
    border: 0.125rem solid #1254e3;
    border-radius: 1rem;
  }
}

.title {
  margin: 2rem auto;
}
.playerform {
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  width: 40rem;
}
</style>
