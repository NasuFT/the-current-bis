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
import { GearsetInfo, JobID, GearsetID } from "types";

const { data: jobs } = await useFetch("/api/jobs");
const selectedJobID = ref<JobID>();

const { data: gearsetsTest } = await useFetch("/api/bis");
watch(gearsetsTest, () => {});

const gearsets = ref<GearsetInfo[]>([]);
const selectedGearsetID = ref<GearsetID>();
// fetch gearsets for job
watch(selectedJobID, async () => {
  if (selectedJobID.value === undefined) {
    return;
  }

  console.log("fetching");

  const { data } = await useFetch(`/api/bis/${selectedJobID.value}`);
  if (!data.value) {
    return;
  }

  console.log("fetched");

  gearsets.value = data.value;
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
