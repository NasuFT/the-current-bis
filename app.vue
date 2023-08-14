<template>
  <div class="app-bg flex h-screen items-stretch">
    <div class="app-drawer w-96 p-4 flex-col flex items-stretch">
      <h1 class="text-center">The Current BIS</h1>
      <JobList :jobs="jobs" @change="(job) => selectedJob = job" />
      <Listbox class="mt-4 overflow-auto gearlist" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useJobs } from './composables/useJobs'
import { Job } from 'types';

const { data: jobs } = useJobs();

const selectedJob = ref<Job>();

const options = ["SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS", "SDASD", "DASDSADAS",]
</script>

<style scoped>
.app-bg {
  background-color: var(--surface-ground);
}

.app-drawer {
  background-color: var(--surface-card);
  border-right-color: var(--surface-border);
}

.gearlist.p-focus {
  box-shadow: none;
  border-color: var(--surface-border);
}
</style>