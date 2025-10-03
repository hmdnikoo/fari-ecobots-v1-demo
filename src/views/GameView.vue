<template>
  <FAppBar>
    <template #title>
      <FSubTitle>Playing as {{ playerStore.player?.name ?? 'Guest' }}</FSubTitle>
    </template>
    <template #actions>
      <FButtonIcon name="cross" color="red" small @click="endGame" />
    </template>
    <GameStats />
  </FAppBar>
  <div class="game-view bg-color-primary">
    <div class="game-map bg-color-blue rounded">
       <div>
         <img v-if="liveMap" :src="liveMap?.gameView" />
       </div>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import { usePlayerStore } from '../stores/player'
import GameStats from '../components/GameStats.vue'
// import { useSubmitScore } from '../composables/useSubmitScore'
import { FSubTitle, FAppBar, FButtonIcon } from 'fari-component-library'
import { useGameLiveView } from '@/composables/useGameMap'
import { useGameStats } from '@/composables/useGameStats'

const router = useRouter()
const gameStore = useGameStore()

const { gameStats } = storeToRefs(gameStore)
const playerStore = usePlayerStore()
const errorMessage = ref('')
// const { mutate: submitScore, isPending } = useSubmitScore()

const { data: stats, refetch: refetchStats } = useGameStats()
const { data: liveMap, refetch: refetchLiveMap } = useGameLiveView()

const endGame = () => router.push('/result')

watch(gameStats, (newStats) => {
  if (newStats?.gameState === 'end') router.push('/result')
})


const refetch = async () => {
  errorMessage.value = ''
  try {
    await Promise.all([refetchStats(), refetchLiveMap()])
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
    width: 100vw;
    height: auto;
    border: 0.125rem solid #1254e3;
    border-radius: 1rem;
  }
}
</style>
