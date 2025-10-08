<template>
  <div>
    <div class="container bg-color-blue rounded pb-md" @click="openDialog">
      <div class="header mx-auto">
        <img :src="getImgSrc()" class="rounded-s avatar" />
        <h1>{{ title }}</h1>
      </div>
      <FDivider class="bg-color-primary" />

      <div class="image-preview">
        <img v-if="compareData" :src="compareData?.pathImage" class="rounded-s result-map" />
      </div>

      <div class="stats bg-color-blue-light rounded-s p-sm mx-l">
        <h3>
          Rank Time: <strong class="font-weight-bold"> {{ compareData?.rankTime }}</strong>
        </h3>
        <h3>
          Battery Degradation:
          <strong class="font-weight-bold"> {{ compareData?.batteryDegradation }} </strong>
        </h3>
        <h3>
          Power Consumption:
          <strong class="font-weight-bold"> {{ compareData?.powerConsumption }} </strong>
        </h3>
        <!-- <h3 v-if="compareData?.score">
          Score: <strong class="font-weight-bold"> {{ compareData?.score }}</strong>
        </h3> -->
      </div>
    </div>

    <div v-if="isOpen" class="dialog-overlay" @click.self="closeDialog">
      <div class="dialog-content bg-color-blue rounded">
        <button class="close-btn" @click="closeDialog">✕</button>

        <div class="header">
          <img :src="getImgSrc()" class="rounded-s avatar" />
          <h1>{{ title }}</h1>
        </div>

        <div class="dialog-image-wrapper">
          <img v-if="compareData" :src="compareData?.pathImage" class="rounded-s dialog-image" />
        </div>

        <div class="stats bg-color-blue-light rounded-s p-sm mx-l">
          <h3>Rank Time: {{ compareData?.rankTime }}</h3>
          <h3>Battery Degradation: {{ compareData?.batteryDegradation }}</h3>
          <h3>Power Consumption: {{ compareData?.powerConsumption }}</h3>
          <h3 v-if="compareData?.score">Score: {{ compareData?.score }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HumanAvatar from '../assets/human_avatar.svg'
import AiAvatar from '../assets/ai_avatar.svg'
import { FDivider } from 'fari-component-library'

interface CompareData {
  pathImage: string
  rankTime: string
  batteryDegradation: string
  powerConsumption: string
  score?: number
}

type PlayerType = 'human' | 'ai'

const props = defineProps<{
  type: PlayerType
  title: string
  compareData: CompareData | null
}>()

const isOpen = ref(false)
const openDialog = () => (isOpen.value = true)
const closeDialog = () => (isOpen.value = false)

const getImgSrc = () => (props.type === 'human' ? HumanAvatar : AiAvatar)
</script>

<style scoped lang="scss">
.container {
  width: 36rem;
  cursor: pointer;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;

    .avatar {
      height: 4rem;
    }
  }

  .image-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    max-height: 15rem;

    .result-map {
      transform: rotate(90deg);
      transform-origin: center;
      height: 30rem;
      object-fit: contain;
    }
  }

  .stats {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
}

.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: fadeIn 0.3s ease;
}

.dialog-content {
  position: relative;
  max-width: 70rem;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  animation: scaleIn 0.3s ease;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    font-size: 1.8rem;
    color: white;
    cursor: pointer;
  }

  .dialog-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    position: relative;

    .dialog-image {
      position: absolute;
      transform: rotate(90deg);
      transform-origin: center;
      height: 70vh;
      width: auto;
      object-fit: contain;
      border-radius: 1rem;
    }
  }

  .stats {
    margin-top: 15vh;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
</style>
