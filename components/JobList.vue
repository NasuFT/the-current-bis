<template>
  <Dropdown
    :options="jobOptions"
    scroll-height="300px"
    placeholder="Select a job"
    option-group-label="role"
    option-group-children="jobs"
    option-label="title"
    option-value="id"
    @update:model-value="onChange"
  >
    <template #option="slotProps">
      <div class="flex items-center">
        <Image :src="slotProps.option.iconImgSrc" class="w-5 mr-2" />
        <div>{{ slotProps.option.title }}</div>
      </div>
    </template>
    <template #value="slotProps">
      <div v-if="selectedJob" class="flex items-center">
        <Image :src="selectedJob.iconImgSrc" class="w-5 mr-2" />
        <div>{{ selectedJob.title }}</div>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { Job, JobID } from "types";

interface Props {
  jobs: Job[] | null;
}

interface Emits {
  (e: "change", value: JobID): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const jobs = computed(() => props.jobs ?? []);
const selectedJob = ref<Job>();

const jobOptions = computed(() => {
  const roles = jobs.value.map((job) => job.role.title).filter(uniqueFilter);

  return roles.map((role) => ({
    role,
    jobs: jobs.value.filter((job) => job.role.title === role),
  }));
});

const onChange = computed(() => (id: number) => {
  selectedJob.value = jobs.value.find((job) => job.id === id);
  emit("change", id);
});
</script>
