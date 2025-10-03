<template>
  <div class="game-stats bg-color-primary">
    <table>
      <tbody>
        <tr>
          <td>
            <div class="game-view bg-color-primary">
              <h1>{{ title }}</h1>
              <div class="game-map bg-color-blue rounded">
                <div class="result-map">
                  <img v-if="compareData" :src="compareData?.pathImage" />
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h3>Rank Time: {{ compareData?.rankTime }}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Battery Degradation: {{ compareData?.batteryDegradation }}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h3>Power Consumption: {{ compareData?.powerConsumption }}</h3>
                    </td>
                  </tr>
                  <tr v-if="compareData?.score != null">
                    <td>
                      <h3>Score: {{ compareData?.score }}</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string,
  compareData: object,
}>()


</script>

<style>
.game-view {
  img{
    height: 60vh;
    border-radius: 20px;
  }
  .result-map{
    padding: 20px;
  }
}
</style>
