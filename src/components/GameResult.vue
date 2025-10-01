<template>
  <div class="game-result">
    <h2>Game Over</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Failed to load comparison: {{ error?.message }}</div>
    <div v-else>
      <p>Your Score: {{ data?.playerScore ?? 'N/A' }}</p>
      <p>AI Score: {{ data?.aiScore ?? 'N/A' }}</p>
    </div>

    <div class="actions">
      <FButtonIcon name="undo" color="blue-light" onDark @click="restartGame" />
      <FButton type="secondary" label="Home" onDark @click="goToHome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import { usePlayerStore } from '../stores/player'
import { useGameComparison } from '../composables/useGameComparison'
import { useGameLifecycle } from '../composables/useGameLifecycle'
import { FButton, FButtonIcon } from 'fari-component-library'

const router = useRouter()
const gameStore = useGameStore()
const playerStore = usePlayerStore()
const { data, isLoading, isError, error } = useGameComparison()

const { restart } = useGameLifecycle()

const restartGame = async () => {
  await new Promise((resolve) => {
    restart.mutate(undefined, {
      onSuccess: () => resolve(true),
      onError: (error) => {
        console.error('Failed to restart game:', error)
        resolve(false)
      },
    })
  })
  router.push('/game')
}

const goToHome = () => {
  gameStore.resetGame()
  playerStore.resetPlayer()
  router.push('/')
}
</script>

<style scoped lang="scss">
.game-result {
  text-align: center;
  padding: 1rem;
}

.actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
