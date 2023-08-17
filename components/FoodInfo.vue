<template>
  <div class="equipment-container flex flex-col rounded p-2 w-80">
    <div class="flex flex-row justify-between items-end">
      <p class="font-medium text-lg ml-4">Food</p>
      <p class="text-xs">{{ `i${props.food.itemLevel}` }}</p>
    </div>
    <div class="equipment-info rounded p-2 mt-4 flex flex-row items-center">
      <nuxt-img
        :src="food.iconSrc"
        width="32"
        height="32"
        fit="contain"
        class="mr-2"
      >
        <Skeleton size="2rem"></Skeleton>
      </nuxt-img>
      <p class="text-sm">{{ props.food.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Food } from "types";

interface Props {
  food: Food;
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
