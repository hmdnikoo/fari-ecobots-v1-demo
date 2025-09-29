import { useMutation } from '@tanstack/vue-query'
import { PlayerService } from '../api/services/PlayerService'
import { usePlayerStore } from '../stores/player'

export function useCreatePlayer() {
  const playerStore = usePlayerStore()

  let name = ''

  return useMutation({
    mutationFn: (playerName: string) => {
      name = playerName
      return PlayerService.createPlayer(playerName)
    },
    onSuccess: (id: number) => {
      playerStore.setPlayer({ id, name })
      console.info('Player created and stored:', playerStore.player)
    },
    onError: (error) => {
      console.error('Failed to create player:', error)
    },
  })
}
