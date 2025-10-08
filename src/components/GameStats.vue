<template>
  <div class="game-stats bg-color-primary">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Failed to load stats: {{ error?.message }}</div>
    <div v-else>
      <div class="realtime-data">
        <h2>Time: {{ data?.time ?? 'N/A' }}</h2>
        <BatteryIndicator size="medium" :charge="data?.charge ?? 0" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStats } from '../composables/useGameStats'
import BatteryIndicator from '../components/BatteryIndicator.vue'

const { data, isLoading, isError, error } = useGameStats()
</script>

<style scoped lang="scss">
.game-stats {
  padding: 1rem;
}

.realtime-data {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
