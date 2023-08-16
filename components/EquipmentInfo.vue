<template>
  <div class="equipment-container flex flex-col rounded p-2 w-80">
    <div class="flex flex-row justify-between items-end">
      <p class="font-medium text-lg ml-4">{{ getSlotLabel(props.slot) }}</p>
      <p class="text-xs">i660</p>
    </div>
    <div class="equipment-info rounded p-2 mt-4 flex flex-row items-center">
      <!-- <nuxt-img :src="props.iconSrc" /> -->
      <Skeleton size="2rem" class="mr-2"></Skeleton>
      <p class="text-sm">Augmented Credendum Circlet of Casting</p>
    </div>
    <Accordion :active-index="0">
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
          <li class="leading-7">SPS +36</li>
          <li class="leading-7">SPS +36</li>
        </ul>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import { Equipment, Materia, GearsetSlot } from "types";

interface Props {
  equipment?: Equipment;
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
