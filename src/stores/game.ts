import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Game, GameStats, GameMap, GameLiveView, GameCompare, GameUserRoute } from '../api/models/Game'

export const useGameStore = defineStore('game', () => {
  const currentGame = ref<Game | null>(null)
  const gameStats = ref<GameStats | null>(null)
  const gameMap = ref<GameMap | null>(null)
  const gameCompare = ref<GameCompare | null>(null)
  const gameLiveView = ref<GameLiveView | null>(null)
  const gameUserRoute = ref<GameUserRoute | null>(null)

  const setGame = (game: Game) => (currentGame.value = game)

  const setGameMap = (map: GameMap) => (gameMap.value = map)

  const updateStats = (stats: GameStats) => (gameStats.value = stats)

  const setGameUserRoute = (points: GameUserRoute) => (gameUserRoute.value = points)

  const resetGame = () => {
    currentGame.value = null
    gameStats.value = null
    gameUserRoute.value = null
  }

  return {
    currentGame,
    gameStats,
    gameMap,
    gameLiveView,
    gameCompare,
    gameUserRoute,
    setGame,
    setGameMap,
    updateStats,
    resetGame,
    setGameUserRoute
  }
})
