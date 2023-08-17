<template>
  <div class="flex-auto flex justify-center items-stretch overflow-auto">
    <div class="flex-1 my-8 mx-8 max-w-4xl rounded">
      <h1 class="text-center">Gearset</h1>
      <div
        class="grid gap-8 mt-8 mb-16 grid-cols-[repeat(auto-fill,_20rem)] justify-center items-start"
      >
        <EquipmentInfo
          v-if="gear"
          slot="weapon"
          :equipment="gear.weapon"
          :materia="gear.materia?.weapon"
        />
        <EquipmentInfo
          v-if="gear && gear.head"
          slot="head"
          :equipment="gear.head"
          :materia="gear.materia?.head"
        />
        <EquipmentInfo
          v-if="gear && gear.body"
          slot="body"
          :equipment="gear.body"
          :materia="gear.materia?.body"
        />
        <EquipmentInfo
          v-if="gear && gear.hands"
          slot="hands"
          :equipment="gear.hands"
          :materia="gear.materia?.hands"
        />
        <EquipmentInfo
          v-if="gear && gear.legs"
          slot="legs"
          :equipment="gear.legs"
          :materia="gear.materia?.legs"
        />
        <EquipmentInfo
          v-if="gear && gear.feet"
          slot="feet"
          :equipment="gear.feet"
          :materia="gear.materia?.feet"
        />
        <EquipmentInfo
          v-if="gear && gear.offhand"
          slot="offhand"
          :equipment="gear.offhand"
          :materia="gear.materia?.offhand"
        />
        <EquipmentInfo
          v-if="gear && gear.ears"
          slot="ears"
          :equipment="gear.ears"
          :materia="gear.materia?.ears"
        />
        <EquipmentInfo
          v-if="gear && gear.neck"
          slot="neck"
          :equipment="gear.neck"
          :materia="gear.materia?.neck"
        />
        <EquipmentInfo
          v-if="gear && gear.wrist"
          slot="wrist"
          :equipment="gear.wrist"
          :materia="gear.materia?.wrist"
        />
        <EquipmentInfo
          v-if="gear && gear.ringL"
          slot="ringL"
          :equipment="gear.ringL"
          :materia="gear.materia?.ringL"
        />
        <EquipmentInfo
          v-if="gear && gear.ringR"
          slot="ringR"
          :equipment="gear.ringR"
          :materia="gear.materia?.ringR"
        />
        <FoodInfo v-if="gear && gear.food" :food="gear.food" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GearsetID, GearsetFull } from "@/types";
import { fetchData } from "./helper";

interface Props {
  gearsetId?: GearsetID;
}

const props = defineProps<Props>();

const { data: gearsetInfo } = await useFetch(
  () => `/api/gearset/${props.gearsetId}`,
  {
    key: "gearsetinfo-gearsetInfo",
  }
);
const gear = ref<GearsetFull | null>(null);

watch(
  gearsetInfo,
  async () => {
    if (!gearsetInfo.value) {
      gear.value = null;
      return;
    }

    console.log(gearsetInfo.value.materia);

    const data = await fetchData(gearsetInfo.value);
    // @ts-ignore
    gear.value = data;
  },
  { immediate: true }
);
</script>

<style scoped></style>
