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
          <p class="font-size-body">The robot follows your plan, then we compare it with AI path finder.</p>
        </div>

        <template #actions>
          <div class="actions">
            <FButtonIcon name="undo" small label="Reset Map" onDark @click="resetMap" />
            <BatteryIndicator size="medium" :charge="stats?.charge ?? 0" />
          </div>
        </template>
      </FAppBar>

      <FDivider class="bg-color-blue-light my-sm" />

      <div class="map-container" ref="mapContainer" @click="handleClick">
        <img v-if="map" :src="map?.mapImage" ref="mapImage" />
        <div
          v-for="(p, i) in points"
          :key="i"
          class="point"
          :style="{ left: p.pixelX + 'px', top: p.pixelY + 'px' }"
        ></div>
      </div>
      <PlayerForm @start="sendPoints"/>
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
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()
const errorMessage = ref('')
const { data: map, refetch: refetchMap } = useGameMap()
const { data: stats, refetch: refetchStats } = useGameStats()
const router = useRouter()

const realWidth = 1.8
const realHeight = 0.8
const points = ref<any[]>([])
const mapContainer = ref<HTMLElement | null>(null)
const mapImage = ref<HTMLImageElement | null>(null)

const handleClick = (e: MouseEvent) => {
  if (!mapImage.value) return
  const rect = mapImage.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const realX = (x / rect.width) * realWidth
  const realY = (y / rect.height) * realHeight
  points.value.push({ pixelX: x, pixelY: y, x_m: +realX.toFixed(3), y_m: +realY.toFixed(3) })
}

const resetMap = async () => {
  points.value = []
  errorMessage.value = ''
  try {
    await Promise.all([refetchMap(), refetchStats()])
  } catch {
    errorMessage.value = 'Failed to refresh game data.'
  }
}

const backToHome = () => router.push('/')

const sendPoints = async () => {
  const payload = points.value.map(p => ({
    x: p.x_m,
    y: p.y_m
  }))

  gameStore.setGameUserRoute(payload);
  console.log(payload)
  router.push('/result')

}
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
  position: relative;
  .map-container {
    position: relative;
    display: inline-block;
    img {
      max-width: 100%;
      height: auto;
      border: 0.125rem solid #1254e3;
      border-radius: 1rem;
      display: block;
    }
    .point {
      position: absolute;
      width: 12px;
      height: 12px;
      background: red;
      border: 2px solid white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  }
}

.title {
  margin: 1rem auto;
}

.playerform {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 16rem;
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
