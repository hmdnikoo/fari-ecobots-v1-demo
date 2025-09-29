<template>
  <div class="game-stats bg-color-primary">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Failed to load stats: {{ error?.message }}</div>
    <div v-else>
      <p>Time Elapsed: {{ data?.time ?? 'N/A' }}</p>
      <p>startpoint {{ data?.startPoint ?? 'N/A' }}</p>
      <p>Endpoint: {{ data?.endPoint ?? 'N/A' }}</p>
      <p>Charge: {{ data?.charge ?? 'N/A' }}</p>
      <p>Status: {{ data?.gameState ?? 'N/A' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStats } from '../composables/useGameStats'

const { data, isLoading, isError, error } = useGameStats()
</script>

<style scoped lang="scss">
.game-stats {
  padding: 1rem;
}
</style>
