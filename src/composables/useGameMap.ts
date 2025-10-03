import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { useGameStore } from '../stores/game'
import { GameService } from '../api/services/GameService'

export function useGameMap() {
  const gameStore = useGameStore()
  const gameId = computed(() => gameStore.currentGame?.id)

  return useQuery({
    queryKey: ['gameMap', gameId],
    queryFn: GameService.getGameMap,
    onSuccess: (stats) => {
      console.log({ stats })
      console.log(gameStore.gameMap)
      gameStore.updateStats(stats)
    },
  })
}

export function useGameLiveView() {
  const gameStore = useGameStore()
  const gameId = computed(() => gameStore.currentGame?.id)

  return useQuery({
    queryKey: ['gameLiveView', gameId],
    queryFn: GameService.getGameLiveView,
    refetchInterval: 1000,
    onSuccess: (stats) => {
      console.log({ stats })
      console.log(gameStore.gameLiveView)
      gameStore.updateStats(stats)
    },
  })
}
