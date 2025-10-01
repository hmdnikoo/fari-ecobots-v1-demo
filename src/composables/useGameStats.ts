import { useQuery } from '@tanstack/vue-query'
import { computed, watch } from 'vue'
import { useGameStore } from '../stores/game'
import { GameService } from '../api/services/GameService'

export function useGameStats() {
  const gameStore = useGameStore()
  const gameId = computed(() => gameStore.currentGame?.id)

  const query = useQuery({
    queryKey: ['gameStats', gameId],
    queryFn: GameService.getGameState,
    refetchInterval: 1000,
  })
  watch(
    () => query.data.value,
    (stats) => {
      if (stats) {
        gameStore.updateStats(stats)
      }
    },
    { immediate: true },
  )

  return query
}
