<template>
  <div class="game-result">
    <h1><b>Game Over</b></h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Failed to load comparison: {{ error?.message }}</div>

    <div class="rounded p-md mx-auto" v-else>
      <p>Your Score: {{ data?.playerScore ?? 'N/A' }}</p>
      <p>AI Score: {{ data?.aiScore ?? 'N/A' }}</p>
    </div>

    <div class="compare-wrapper">
      <GameCompare
        type="human"
        :title="playerStore.player?.name ?? 'Guest'"
        :compareData="compareData?.user"
      />

      <GameCompare type="ai" title="AI" :compareData="compareData?.ai" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../stores/player'
import { useGameComparison } from '../composables/useGameComparison'
import GameCompare from '../components/GameCompare.vue'
import { useGameCompare } from '@/composables/useGameCompare'
import { ref } from 'vue'


const playerStore = usePlayerStore()
const { data, isLoading, isError, error } = useGameComparison()

const { data: compareData, refetch: refetchCompare } = useGameCompare()
const errorMessage = ref('')

const refetch = async () => {
  errorMessage.value = ''
  try {
    await Promise.all([refetchCompare()])
  } catch (error) {
    errorMessage.value = 'Failed to refresh game data.'
    console.error(error)
  }
}
</script>

<style scoped lang="scss">


.actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.compare-wrapper {
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  flex-wrap: wrap;
}
</style>
