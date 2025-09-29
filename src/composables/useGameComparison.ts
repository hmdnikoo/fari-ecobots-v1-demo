import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useGameStore } from '../stores/game'
import { GameService } from '../api/services/GameService'

export function useGameComparison() {
  const gameStore = useGameStore()
  const gameId = computed(() => gameStore.currentGame?.id)

  return useQuery({
    queryKey: ['comparison', gameId],
    queryFn: GameService.compareWithAI,
    enabled: computed(() => !!gameId.value),
  })
}
