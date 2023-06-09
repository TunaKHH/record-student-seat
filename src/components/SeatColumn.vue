<template>
  <v-col>
    <v-card color="#ceffed">
      <v-card-title>
        {{ seated.title }}
      </v-card-title>
      <draggable style="margin-right: 10px" v-model="seated.seats" :dragOptions="dragOptions" group="group1"
        @start="drag = true" @end="drag = false" item-key="id">
        <template #item="{ element }">
          <v-card variant="outlined" width="200">
            <v-avatar class="ma-3" size="125" rounded="0">
              <v-img :src="studentImg"></v-img>
            </v-avatar>
            <v-card-title>{{ element.name }}</v-card-title>
            <v-card-subtitle>
              <v-text-field label="進度" :model-value="element.subtitle" prefix=""></v-text-field>
            </v-card-subtitle>
          </v-card>
        </template>
      </draggable>
    </v-card>
  </v-col>
</template>
<script setup>

import draggable from 'vuedraggable'
import studentImg from '../assets/student.png'
import { defineProps } from 'vue';
import { useStore } from '@/store/classroom';

// 取得父層傳遞的資料
const props = defineProps(['number', 'dragOptions'])

const classroom = useStore();
const seated = classroom.seated[props.number];

</script>
