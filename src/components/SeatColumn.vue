<template>
  <v-card color="#ceffed">
    <v-card-title>
      {{ seated.title }}
    </v-card-title>
    <!-- <SeatCard :student="element" /> -->
    <draggable style="min-height: 300px;" v-model="seated.seats" :dragOptions="dragOptions" group="group1"
      @start="drag = true" @end="drag = false" item-key="id">
      <template #item="{ element }">

        <SeatCard :student="element" />

      </template>
    </draggable>
  </v-card>
</template>
<script setup>
import draggable from 'vuedraggable';
import { defineProps } from 'vue';
import { useStore } from '@/store/classroom';
import SeatCard from './SeatCard.vue'

// 取得父層傳遞的資料
const props = defineProps(['number', 'dragOptions', 'seated'])
// defineProps(['seated'])

const classroom = useStore();
const seated = classroom.seated[props.number];

</script>
