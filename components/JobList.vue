<template>
    <Dropdown :options="jobOptions" scroll-height="300px" placeholder="Select a job" option-group-label="role"
        option-group-children="jobs" option-label="title" option-value="value" @update:model-value="update">
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
import { Job } from 'types'

interface Props {
    jobs: Job[];
}

interface Emits {
    (e: 'change', value: Job): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const jobOptions = computed(() => {
    const roles = props.jobs.map(job => job.role.title).filter(uniqueFilter);

    return roles.map(role => ({
        role,
        jobs: props.jobs.filter(job => job.role.title === role)
    }))
})

const selectedJob = ref<Job>()

const update = computed(() => (value: string) => {
    selectedJob.value = props.jobs.find(job => job.value === value)
    //@ts-ignore
    emit('change', selectedJob.value)
})
</script>