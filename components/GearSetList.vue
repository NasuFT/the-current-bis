<template>
  <Listbox
    class="overflow-auto gearlist"
    :options="gearsetOptions"
    option-group-label="type"
    option-group-children="gearsets"
    option-label="name"
    option-value="id"
    @update:model-value="update"
  />
</template>

<script setup lang="ts">
import { GearsetID, GearsetInfo } from "types";

interface Props {
  gearsets: GearsetInfo[] | null;
}

interface Emits {
  (e: "change", value: GearsetID): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const gearsetOptions = computed(() => {
  if (!props.gearsets) {
    return [];
  }

  const gearsetTypes = ["BIS", "Prog", "Others"];

  return gearsetTypes.map((type) => ({
    type,
    //@ts-ignore
    gearsets: props.gearsets.filter((gearset) => {
      const typeValue = type === "BIS" ? "bis" : type === "Prog" ? "prog" : "others";

      return gearset.type === typeValue;
    }),
  }));
});

const update = computed(() => (value: GearsetInfo["id"]) => {
  emit("change", value);
});
</script>

<style scoped>
.gearlist.p-focus {
  box-shadow: none;
  border-color: var(--surface-border);
}
</style>
