<template>
  <div class="flex-auto flex justify-center items-stretch overflow-auto">
    <div class="flex-1 my-8 mx-8 max-w-4xl rounded">
      <h1 class="text-center">Gearset</h1>
      <div class="grid gap-8 mt-8 mb-16 grid-cols-[repeat(auto-fill,_20rem)] justify-center items-start">
        <EquipmentInfo slot="head" />
        <EquipmentInfo slot="head" />
        <EquipmentInfo slot="head" />
        <EquipmentInfo slot="head" />
        <FoodInfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GearsetID } from "types";

interface Props {
  gearsetId?: GearsetID;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
