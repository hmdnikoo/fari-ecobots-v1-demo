<template>
  <FAppBar>
    <template #title>
      <FSubTitle>Playing as {{ playerStore.player?.name ?? 'Guest' }}</FSubTitle>
    </template>
    <template #actions>
      <FButtonIcon name="cross" color="red" small @click="endGame" />
    </template>
  </FAppBar>
  <div class="game-view bg-color-primary">
    <GameStats />
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import { usePlayerStore } from '../stores/player'
import GameStats from '../components/GameStats.vue'
import { useSubmitScore } from '../composables/useSubmitScore'
import { FButton, FSubTitle, FAppBar, FButtonIcon } from 'fari-component-library'

const router = useRouter()
const gameStore = useGameStore()
const playerStore = usePlayerStore()
const errorMessage = ref('')
const { mutate: submitScore, isPending } = useSubmitScore()

const endGame = () => router.push('/result')
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
</style>
