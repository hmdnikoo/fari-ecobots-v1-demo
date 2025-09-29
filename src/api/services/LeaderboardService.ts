import apiClient from '../axiosInstance'
import type { LeaderboardEntry } from '../models/Leaderboard'

export class LeaderboardService {
  static async getLeaderboard(): Promise<LeaderboardEntry[]> {
    const response = await apiClient.get<LeaderboardEntry[]>('/Game/Leaderboard')
    return response.data
  }
}
