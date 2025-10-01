<template>
  <div class="leaderboard bg-color-blue p-md">
    <h1 class="title">🏆 Leaderboard</h1>
    <div class="divider bg-color-primary"></div>

    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
    </div>
    <div v-else-if="isError" class="error">Failed to load leaderboard: {{ error?.message }}</div>
    <ul v-else class="entries">
      <p v-if="!sortedLeaderboard.length" class="no-entries font-size-body">
        No leaderboard entries yet
      </p>
      <li
        v-for="(entry, index) in sortedLeaderboard"
        :key="entry.firstName"
        :class="['entry', { 'top-1': index === 0, 'top-2': index === 1, 'top-3': index === 2 }]"
      >
        <div class="entry-content">
          <span class="medal">
            {{ index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}` }}
          </span>
          <span class="name">{{ entry.firstName }}</span>
        </div>
        <span class="score">{{ entry.score }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLeaderboard } from '../composables/useLeaderboard'
import { computed } from 'vue'

const { data, isLoading, isError, error } = useLeaderboard()

const sortedLeaderboard = computed(
  () =>
    data.value
      ?.slice()
      .sort((a, b) => b.score - a.score)
      .slice(0, 5) || [],
)
</script>

<style scoped lang="scss">
$dark-blue: #183e91;
$primary-blue: #2e4fbf;
$light-blue: #4393de;
$turquoise: #64d8bf;
$yellow: #f9db6b;
$magenta: #b93080;
$white: #ffffff;
$dark-gray: #454545;

.leaderboard {
  width: 30rem;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 0.75rem;
  animation: fadeIn 0.5s ease-out;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.875rem;
  font-weight: 800;
  color: $white;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.divider {
  height: 0.1rem;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.spinner {
  width: 3rem;
  height: 3rem;
  border: 4px solid transparent;
  border-top-color: $turquoise;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error {
  color: $magenta;
  text-align: center;
  padding: 1rem 0;
  font-weight: 500;
}

.entries {
  list-style: none;
  padding: 0;
  margin: 0;
}

.no-entries {
  text-align: center;
  padding: 1rem 0;
  font-weight: 500;
}

.entry {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.75rem;
  background: rgba($white, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  transform: translateY(0);

  &:hover {
    background: rgba($white, 0.2);
    transform: translateY(-2px);
  }

  &.top-1 {
    background: linear-gradient(
      90deg,
      rgba($yellow, 0.3),
      rgba($turquoise, 0.2),
      rgba($white, 0.1)
    );
    border: 1px solid rgba($yellow, 0.5);
    &:hover {
      transform: translateY(-4px);
    }
  }

  &.top-2 {
    background: linear-gradient(
      90deg,
      rgba($light-blue, 0.3),
      rgba($primary-blue, 0.2),
      rgba($white, 0.1)
    );
    border: 1px solid rgba($light-blue, 0.5);

    &:hover {
      transform: translateY(-3px);
    }
  }

  &.top-3 {
    background: linear-gradient(
      90deg,
      rgba($magenta, 0.3),
      rgba($light-blue, 0.2),
      rgba($white, 0.1)
    );
    border: 1px solid rgba($magenta, 0.5);

    &:hover {
      transform: translateY(-3px);
    }
  }
}

.entry-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.medal {
  font-size: 1.25rem;
  color: $white;
  transition: transform 0.3s ease;

  .entry:hover & {
    transform: scale(1.3);
  }

  .top-1:hover & {
    transform: scale(1.6);
  }

  .top-2:hover &,
  .top-3:hover & {
    transform: scale(1.4);
  }
}

.name {
  font-size: 1.125rem;
  font-weight: 600;
  color: $white;
}

.score {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, $light-blue, $turquoise);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
