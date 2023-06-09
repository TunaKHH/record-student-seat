<template>
  <v-container fluid>
    <AddStudentDialog :updateData="updateData" />
    <v-row>
      <v-col md="3">
        <v-card color="#e5ecf7">
          <v-card-title>
            未安排座位
          </v-card-title>
          <draggable style="margin-right: 10px" v-model="classroom.unseated" v-bind="dragOptions" group="group1"
            @start="drag = true" @end="drag = false" item-key="id">
            <template #item="{ element }">
              <v-card variant="outlined" width="200">
                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img :src="studentImg"></v-img>
                </v-avatar>
                <v-card-title>{{ element.name }}</v-card-title>
                <v-card-subtitle>
                  <v-text-field label="進度" :model-value="element.subtitle"></v-text-field>
                </v-card-subtitle>
              </v-card>
            </template>
          </draggable>
        </v-card>
      </v-col>
      <v-col md="9">
        <v-container fluid>
          <v-row>
            <v-col>
              左營C教室-座位表
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-container fluid>
                <v-row>
                  <v-col>
                    <h1 class="text-center">
                      講師座位
                    </h1>
                  </v-col>
                </v-row>
                <v-row>
                  <SeatColumn v-for="index in columnCount" :key="index" :number="index" :dragOptions="dragOptions" />
                </v-row>
                <v-row>
                  <v-col>
                    <h1>Seated</h1>
                    {{ classroom.seated }}
                  </v-col>
                  <v-col>
                    <h1>Unseated</h1>
                    {{ classroom.unseated }}
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import draggable from 'vuedraggable';
import { computed } from 'vue';
import studentImg from '../assets/student.png';
import { useStore } from '@/store/classroom';
import SeatColumn from '@/components/SeatColumn';
import AddStudentDialog from '@/components/AddStudentDialog';


const classroom = useStore();
const dragOptions = computed(() => ({
  animation: 100,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
}));

const columnCount = computed(() => {
  return Object.keys(classroom.seated).length;
});

const updateData = (students) => {
  classroom.addStudents(students);
};

</script>
