import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Game, GameStats, GameMap } from '../api/models/Game'

export const useGameStore = defineStore('game', () => {
  const currentGame = ref<Game | null>(null)
  const gameStats = ref<GameStats | null>(null)
  const gameMap = ref<GameMap | null>(null)

  const setGame = (game: Game) => (currentGame.value = game)

  const setGameMap = (map: GameMap) => (gameMap.value = map)

  const updateStats = (stats: GameStats) => (gameStats.value = stats)

  const resetGame = () => {
    currentGame.value = null
    gameStats.value = null
  }

  return { currentGame, gameStats, gameMap, setGame, setGameMap, updateStats, resetGame }
})
