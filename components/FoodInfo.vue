<template>
  <div class="equipment-container flex flex-col rounded p-2 w-80">
    <div class="flex flex-row justify-between items-end">
      <p class="font-medium text-lg ml-4">Food</p>
      <p class="text-xs">i660</p>
    </div>
    <div class="equipment-info rounded p-2 mt-4 flex flex-row items-center">
      <!-- <nuxt-img :src="props.iconSrc" /> -->
      <Skeleton size="2rem" class="mr-2"></Skeleton>
      <p class="text-sm">Garlean Pizza</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Food } from "types";

interface Props {
  food?: Food;
}

const props = defineProps<Props>();
</script>

<style scoped>
:deep(.p-inputtext) {
  border: 0;
  background-color: inherit;
  opacity: 1;
}

.equipment-container {
  background-color: var(--surface-card);
}

.equipment-info {
  background-color: var(--surface-border);
}
</style>
