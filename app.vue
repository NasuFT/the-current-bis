<template>
  <div class="app-bg flex h-screen items-stretch">
    <div class="app-drawer border-r w-96 p-4 flex-col flex items-stretch">
      <h1 class="text-center">The Current BIS</h1>
      <JobList :jobs="jobs" @change="(id) => (selectedJobID = id)" />
      <GearSetList
        class="mt-4"
        :gearsets="gearsets"
        @change="(id) => (selectedGearsetID = id)"
      />
    </div>
    <GearsetInfo :gearset-id="selectedGearsetID" />
  </div>
</template>

<script setup lang="ts">
import { JobID, GearsetID } from "types";

const { data: jobs } = await useFetch("/api/job");
const selectedJobID = ref<JobID>();
const { data: gearsets } = await useFetch("/api/gearset", {
  query: { jobID: selectedJobID },
  immediate: false,
});
watch(gearsets, () => {
  console.log(gearsets.value);
});
const selectedGearsetID = ref<GearsetID>();
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
