<template>
  <div class="game-stats bg-color-primary">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Failed to load stats: {{ error?.message }}</div>
    <div v-else>

      <!-- <p>startpoint {{ data?.startPoint ?? 'N/A' }}</p> -->
      <!-- <p>Endpoint: {{ data?.endPoint ?? 'N/A' }}</p>
      <p>Charge: {{ data?.charge ?? 'N/A' }}</p> -->
      <!-- <p>Status: {{ data?.gameState ?? 'N/A' }}</p> -->

      <div class="">
        <table class="t">
          <tbody>
            <tr>
              <td class="timer">
                <h1>Time: {{ data?.time ?? 'N/A' }}</h1>
              </td>
              <td>
                <div class="battery">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h1>Charge</h1>
                        </td>
                        <td>
                          <div class="idicator">
                            <BatteryIndicator size="medium" :charge="data?.charge ?? 0" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStats } from '../composables/useGameStats'
import BatteryIndicator from '../components/BatteryIndicator.vue'

const { data, isLoading, isError, error } = useGameStats()
</script>

<style scoped lang="scss">
.game-stats {
  padding: 1rem;
}

.timer {
width: 800px;
}

.battery{
  width: 400px;
}

.battery .idicator{
  width: 400px;
}

.game-view {
  width: 100vw;
}
</style>
