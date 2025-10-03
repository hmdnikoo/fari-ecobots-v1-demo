import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useGameStore } from '../stores/game'
import { GameService } from '../api/services/GameService'

export function useGameCompare() {
  const gameStore = useGameStore()
  const gameId = computed(() => gameStore.currentGame?.id)

  return useQuery({
    queryKey: ['gameCompare', gameId],
    queryFn: GameService.getGameCompare,
    onSuccess: (stats) => {
      console.log({ stats })
      console.log(gameStore.gameCompare)
      gameStore.updateStats(stats)
    },
  })
}
