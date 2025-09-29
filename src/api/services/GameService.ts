import apiClient from '../axiosInstance'
import type { Game, GameStats } from '../models/Game'

export class GameService {
  static async startGame(playerId: string): Promise<Game> {
    const response = await apiClient.get<Game>('/Game/Start')
    return response.data
  }

  static async getGameState(): Promise<GameStats> {
    const response = await apiClient.get<GameStats>('/Game/State')
    return response.data
  }

  static async getGameMap(): Promise<object> {
    const response = await apiClient.get<object>('/Game/Map')
    return response.data
  }

  static async restartGame(): Promise<Game> {
    const response = await apiClient.get<Game>('/Game/Restart')
    return response.data
  }

  static async compareWithAI(): Promise<{ playerScore: number; aiScore: number }> {
    const response = await apiClient.get<{ playerScore: number; aiScore: number }>('/Game/Compare')
    return response.data
  }
}
