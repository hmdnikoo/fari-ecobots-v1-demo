import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const player = ref<{ id: number; name: string } | null>(null)

  const setPlayer = ({ id, name }: { id: number; name: string }) => (player.value = { id, name })

  const resetPlayer = () => (player.value = null)

  return { player, setPlayer, resetPlayer }
})
