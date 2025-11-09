<template>
  <div class="text-input-container">
    <FButton type="primary" label="Start game!" @click="emit('start')" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import { FButton } from 'fari-component-library'

const emit = defineEmits(['start'])
</script>

<style scoped lang="scss">
.text-input-container {
  display: flex;
  align-items: center;
  border-radius: 3rem;
  padding: 0.5rem 1rem 0.5rem 1.5rem;
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
    color: #fff;
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
