<template>
  <div class="game-view bg-color-primary">
    <FTitle class="title">Ecobots</FTitle>

    <div class="game-map bg-color-blue rounded">
      <FAppBar>
        <template #navigation>
          <FButtonIcon name="chevron-left" small label="Back" onDark @click="backToHome" />
        </template>

        <div class="instruction-text">
          <p class="font-size-body">Draw a path from start to finish with limited battery.</p>
          <p class="font-size-body">
            The robot follows your plan, then we compare it with AI path finder.
          </p>
        </div>

        <template #actions>
          <div class="actions">
            <FButtonIcon name="undo" small label="Reset Map" onDark @click="refetch" />
            <BatteryIndicator size="medium" :charge="stats?.charge ?? 0" />
          </div>
        </template>
      </FAppBar>
      <FDivider class="bg-color-blue-light my-sm" />
      <img v-if="map" :src="map?.mapImage" />
      <PlayerForm class="playerform" />
    </div>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useGameMap } from '../composables/useGameMap'
import { useGameStats } from '../composables/useGameStats'
import { FTitle, FButtonIcon, FDivider, FAppBar } from 'fari-component-library'
import PlayerForm from '../components/PlayerForm.vue'
import BatteryIndicator from '../components/BatteryIndicator.vue'

const errorMessage = ref('')
const { data: map, refetch: refetchMap } = useGameMap()
const { data: stats, refetch: refetchStats } = useGameStats()

const router = useRouter()

const refetch = async () => {
  errorMessage.value = ''
  try {
    await Promise.all([refetchMap(), refetchStats()])
  } catch (error) {
    errorMessage.value = 'Failed to refresh game data.'
    console.error(error)
  }
}

const backToHome = () => router.push('/')
</script>

<style scoped lang="scss">
.game-view {
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .error {
    color: red;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
}

.game-map {
  margin-top: 1rem;
  padding: 2rem 3rem 3rem 2rem;
  width: fit-content;
  img {
    max-width: 100%;
    height: auto;
    border: 0.125rem solid #1254e3;
    border-radius: 1rem;
  }
}

.title {
  margin: 1rem auto;
}
.playerform {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 40rem;
}

:deep(.app-bar) {
  width: 100% !important;

  .app-bar__content {
    flex: unset !important;
    padding: 0 2rem;
    width: 100%;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.instruction-text {
  width: 100%;
  margin: 0 auto;
  color: white;
  text-align: center;
}

:deep(.title) {
  margin: 0.5rem auto;
}
</style>
