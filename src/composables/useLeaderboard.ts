import { useQuery } from '@tanstack/vue-query'
import { LeaderboardService } from '../api/services/LeaderboardService'

export function useLeaderboard() {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: LeaderboardService.getLeaderboard,
  })
}
