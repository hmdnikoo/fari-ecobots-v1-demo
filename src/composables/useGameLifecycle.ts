import { useMutation } from '@tanstack/vue-query'
import { GameService } from '../api/services/GameService'
import { useGameStore } from '../stores/game'
import { usePlayerStore } from '../stores/player'

export function useGameLifecycle() {
  const gameStore = useGameStore()
  const playerStore = usePlayerStore()

  const start = useMutation({
    mutationFn: () => {
      const playerId = playerStore.player?.id
      // The API currently doesn't use this parameter, but we pass it if available for consistency
      return GameService.startGame(playerId != null ? String(playerId) : '')
    },
    onSuccess: (game) => {
      gameStore.setGame(game)
    },
    onError: (error) => {
      console.error('Failed to start game:', error)
    },
  })

  const restart = useMutation({
    mutationFn: () => GameService.restartGame(),
    onSuccess: async (response) => {
      const stats = await GameService.getGameState()
      gameStore.updateStats(stats)
    },
    onError: (error) => {
      console.error('Failed to restart game:', error)
    },
  })

  return { start, restart }
}
