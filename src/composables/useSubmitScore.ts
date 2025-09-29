import { useMutation } from '@tanstack/vue-query'
import { PlayerService } from '../api/services/PlayerService'

export function useSubmitScore() {
  return useMutation({
    mutationFn: ({ playerId, score }: { playerId: string; score: number }) =>
      PlayerService.submitScore(playerId, score),
    onSuccess: () => {
      console.info('Score submitted successfully')
    },
    onError: (error) => {
      console.error('Failed to submit score:', error)
    },
  })
}
