<template>
  <div class="result-view">
    <FAppBar dense>
      <template #title>
        <FSubTitle>Running as {{ playerStore.player?.name ?? 'Guest' }}</FSubTitle>
      </template>
      <template #actions>
        <div class="actions">
          <FButtonIcon name="undo"  small onDark @click="restartGame" />
          <FButton label="Home" onDark @click="goToHome" />
        </div>
      </template>
      <GameStats />
    </FAppBar>
    <GameResult />
  </div>
</template>

<script setup lang="ts">
import GameResult from '../components/GameResult.vue'
import { FAppBar, FSubTitle, FButtonIcon, FButton } from 'fari-component-library'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import { usePlayerStore } from '../stores/player'

const router = useRouter()
const gameStore = useGameStore()
const playerStore = usePlayerStore()

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
.result-view {
  text-align: center;
  padding: 2rem;
}

:deep(.app-bar) {
  width: 100% !important;

  // .app-bar__content {
  //   flex: unset !important;
  //   padding: 0 2rem;
  //   width: 100%;
  // }
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
