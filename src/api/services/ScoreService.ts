import apiClient from '../axiosInstance'
import type { Score } from '../models/Score'

export class ScoreService {
  static async submitScore(gameId: string, score: number): Promise<Score> {
    const response = await apiClient.post<Score>(`/Game/${gameId}/Score`, { score })
    return response.data
  }

  static async compareWithAI(gameId: string): Promise<{ playerScore: number; aiScore: number }> {
    const response = await apiClient.get<{ playerScore: number; aiScore: number }>(
      `/Game/${gameId}/Compare`,
    )
    return response.data
  }
}
