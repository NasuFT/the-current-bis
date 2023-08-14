<template>
    <Listbox class="mt-4 overflow-auto gearlist" :options="gearsets" />
</template>

<script setup lang="ts">
import { GearsetInfo } from 'types';

interface Props {
    gearsets: GearsetInfo[]
}

const props = defineProps<Props>()
</script>

<style scoped></style>