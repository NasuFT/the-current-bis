<template>
  <div class="app-bg flex h-screen items-stretch">
    <div class="app-drawer w-96 p-4 flex-col flex items-stretch">
      <h1 class="text-center">The Current BIS</h1>
      <JobList :jobs="jobs" @change="(id) => (selectedJobID = id)" />
      <GearSetList
        class="mt-4"
        :gearsets="gearsets"
        @change="(id) => (selectedGearsetID = id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { JobID, GearsetID } from "types";

const jobs = useJobs();
const selectedJobID = ref<JobID>();

const gearsets = computed(() => useGearsets(selectedJobID.value));
const selectedGearsetID = ref<GearsetID>();
watch(selectedGearsetID, () => {
  console.log(selectedGearsetID.value);
});
</script>

<style scoped>
.app-bg {
  background-color: var(--surface-ground);
}

.app-drawer {
  background-color: var(--surface-card);
  border-right-color: var(--surface-border);
}
</style>
