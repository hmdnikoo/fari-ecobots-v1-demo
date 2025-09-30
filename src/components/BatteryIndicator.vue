<template>
  <div class="battery-indicator" :class="size">
    <div class="battery-icon">
      <svg
        class="battery-svg"
        :width="dimensions.width"
        :height="dimensions.height"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="2" y="2" width="15" height="8">
          <div class="battery-fill-container">
            <div
              class="battery-fill"
              :style="{ width: fillWidthPx + 'px', backgroundColor: fillColor }"
            ></div>
          </div>
        </foreignObject>

        <path
          d="M2.75 1H16.75C17.5784 1 18.25 1.67157 18.25 2.5V9.5C18.25 10.3284 17.5784 11 16.75 11H2.75C1.92157 11 1.25 10.3284 1.25 9.5V2.5C1.25 1.67157 1.92157 1 2.75 1Z"
          stroke="#ffff"
        />
        <path
          d="M21.0833 2.5H19.75V9.5H21.0833C21.4513 9.5 21.75 9.1864 21.75 8.8V3.2C21.75 2.8136 21.4513 2.5 21.0833 2.5Z"
          fill="#ffff"
        />
      </svg>

      <span class="battery-percent">{{ charge }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  charge: number
  size?: 'small' | 'medium' | 'large'
}>()

const size = computed(() => props.size || 'medium')

const MAX_FILL_WIDTH = 15

const fillWidthPx = computed(() => {
  const clamped = Math.min(100, Math.max(0, props.charge))
  return (clamped / 100) * MAX_FILL_WIDTH
})

const fillColor = computed(() => {
  if (props.charge <= 20) return '#e74c3c'
  if (props.charge <= 50) return '#f39c12'
  return '#2ecc71'
})

const dimensions = computed(() => {
  switch (size.value) {
    case 'small':
      return { width: 44, height: 24 }
    case 'large':
      return { width: 88, height: 48 }
    default:
      return { width: 66, height: 36 }
  }
})
</script>

<style scoped lang="scss">
.battery-indicator {
  display: inline-flex;
  align-items: center;
  position: relative;
}

.battery-icon {
  position: relative;
  display: inline-block;
}

.battery-fill-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1px;
  /* background-color: rgba(255, 255, 255, 0.1); */
}

.battery-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition:
    width 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.battery-svg {
  display: block;
}

.battery-percent {
  position: absolute;
  left: 60%;
  transform: translateX(-50%);
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
}

.battery-indicator.small .battery-percent {
  font-size: 0.9rem;
  top: -1.5rem;
}

.battery-indicator.medium .battery-percent {
  font-size: 1.2rem;
  top: -1.75rem;
}

.battery-indicator.large .battery-percent {
  font-size: 1.5rem;
  top: -2rem;
}
</style>
