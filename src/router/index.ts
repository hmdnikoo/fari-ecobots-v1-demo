import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameManualView from '../views/GameManualView.vue'
import GameView from '../views/GameView.vue'
import ResultView from '../views/ResultView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/manual', name: 'Manual', component: GameManualView },
  { path: '/game', name: 'Game', component: GameView },
  { path: '/result', name: 'Result', component: ResultView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
