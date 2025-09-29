import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useGameStore } from '../stores/game'
import { GameService } from '../api/services/GameService'

export function useGameStats() {
  const gameStore = useGameStore()
  const gameId = computed(() => gameStore.currentGame?.id)

  return useQuery({
    queryKey: ['gameStats', gameId],
    queryFn: GameService.getGameState,
    refetchInterval: 1000,
    onSuccess: (stats) => {
      console.log({ stats })
      console.log(gameStore.currentGame)
      gameStore.updateStats(stats)
    },
  })
}
