import apiClient from '../axiosInstance'
import type { Player } from '../models/Player'

export class PlayerService {
  static async createPlayer(playerName: string): Promise<Player> {
    const response = await apiClient.post<Player>('/Game/User', playerName)
    return response.data
  }

  static async submitScore(playerId: string, score: number): Promise<void> {
    await apiClient.put(`/Game/User/${playerId.toString()}/Score`, score)
  }
}
