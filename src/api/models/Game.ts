export interface Game {
  id: string
  playerName: string
  status: 'active' | 'finished'
}

export interface GameStats {
  id: string
  score: number
  timeElapsed: number
}

export type GameMap = object
export type GameLiveView = object
export type GameCompare = object
