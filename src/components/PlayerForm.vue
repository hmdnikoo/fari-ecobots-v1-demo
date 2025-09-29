<template>
  <div class="text-input-container">
    <input
      v-model="playerName"
      type="text"
      placeholder="Enter your name"
      class="input font-weight-semibold"
    />
    <FButton type="primary" label="Start game!" @click="startGame" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '../stores/game'
import { useCreatePlayer } from '../composables/useCreatePlayer'
import { GameService } from '../api/services/GameService'

import { FButton } from 'fari-component-library'

const router = useRouter()
const gameStore = useGameStore()
const playerName = ref('')
const errorMessage = ref('')

const { mutate: createPlayer, isPending } = useCreatePlayer()

const startGame = async () => {
  try {
    errorMessage.value = ''
    await new Promise((resolve, reject) => {
      createPlayer(playerName.value, {
        onSuccess: () => resolve(true),
        onError: (error) => {
          errorMessage.value = 'Failed to create player. Please try again.'
          reject(error)
        },
      })
    })
    const game = await GameService.startGame(gameStore.currentGame?.playerId || '')
    gameStore.setGame(game)
    router.push('/game')
  } catch (error: any) {
    errorMessage.value = errorMessage.value || 'Failed to start game. Please try again.'
    console.error('Failed to start game:', error)
  }
}
</script>

<style scoped lang="scss">
.text-input-container {
  display: flex;
  align-items: center;

  border-radius: 3rem;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  border: 0.125rem solid #1254e3;
  height: 76px;
  background-color: #183e91;
  &--disabled {
    background-color: #4393de50;
  }

  .input {
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.3rem;
    padding: 0;

    &::placeholder {
      color: white;
    }
  }

  .disabled::placeholder {
    color: #4393de50 !important;
  }
}

.spinner {
  width: 56px;
  height: 56px;
}
</style>
