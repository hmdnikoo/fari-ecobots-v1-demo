<template>
  <div class="home-view">
    <FTitle class="title">Ecobots</FTitle>
    <div class="content">
      <Leaderboard />
      <FButton onDark label="Play" @click="goToManual" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Leaderboard from '../components/Leaderboard.vue'
import { FTitle, FButton } from 'fari-component-library'

import { useRouter } from 'vue-router'
const router = useRouter()

const goToManual = () => {
  router.push('/manual')
}
</script>

<style scoped lang="scss">
.home-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
}

.playerform {
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  margin-bottom: auto;
}
</style>
