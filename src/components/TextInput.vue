<template>
  <div class="text-input-container" :class="{ 'text-input-container--disabled': disabled }">
    <input
      v-model="model"
      type="text"
      placeholder="Enter your name"
      class="input font-weight-semibold"
      :disabled="disabled"
      @keyup.enter="!disabled && emit('submit')"
      :class="{ disabled: disabled }"
    />
    <FButton type="primary" label="Start!" @click="emit('submit')" />
  </div>
</template>

<script setup lang="ts">
import { FButton } from 'fari-component-library'
const emit = defineEmits(['submit'])
const model = defineModel()

defineProps<{ loading: boolean; disabled?: boolean }>()
</script>

<style scoped lang="scss">
.text-input-container {
  display: flex;
  align-items: center;

  border-radius: 3rem;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  border: 0.125rem solid #1254e3;
  height: 76px;
  background-color: #183e91;
  &--disabled {
    background-color: #4393de50;
  }

  .input {
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff; // White text
    font-size: 1.3rem;
    padding: 0;

    &::placeholder {
      color: white;
    }
  }

  .disabled::placeholder {
    color: #4393de50 !important;
  }
}

.spinner {
  width: 56px;
  height: 56px;
}
</style>
