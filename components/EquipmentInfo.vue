<template>
  <div class="equipment-container flex flex-col rounded p-2 w-80">
    <div class="flex flex-row justify-between items-end">
      <p class="font-medium text-lg ml-4">{{ getSlotLabel(props.slot) }}</p>
      <p class="text-xs">{{ `i${props.equipment.itemLevel}` }}</p>
    </div>
    <div class="equipment-info rounded p-2 mt-4 flex flex-row items-center">
      <nuxt-img
        :src="equipment.iconSrc"
        width="32"
        height="32"
        fit="contain"
        class="mr-2"
      >
        <Skeleton size="2rem"></Skeleton>
      </nuxt-img>
      <p class="text-sm my-2">{{ props.equipment.name }}</p>
    </div>
    <Accordion
      v-if="props.materia && props.materia.length > 0"
      :active-index="0"
    >
      <AccordionTab
        header="Materia"
        :pt="{
          headerAction: {
            style: {
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              borderWidth: 0,
            },
          },
          headerTitle: {
            style: {
              fontWeight: 600,
            },
          },
          content: {
            style: {
              borderWidth: 0,
            },
          },
          headerIcon: {
            style: {
              padding: '2px',
            },
          },
        }"
      >
        <ul class="list-disc list-inside">
          <li
            class="leading-7"
            v-for="materia in props.materia"
            :key="materia.id"
          >
            {{ `${materia.stat} +${materia.value}` }}
          </li>
        </ul>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import { Equipment, Materia, GearsetSlot } from "types";

interface Props {
  equipment: Equipment;
  slot: GearsetSlot;
  materia?: Materia[];
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

:deep(
    .p-accordion
      .p-accordion-header:not(.p-disabled)
      .p-accordion-header-link:focus
  ) {
  box-shadow: none;
}
</style>
