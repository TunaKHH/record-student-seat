<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
        <v-card color="#e5ecf7">
          <v-card-title>
            未安排座位
          </v-card-title>
          <draggable style="margin-right: 10px" v-model="students" v-bind="dragOptions" group="group1"
            @start="drag = true" @end="drag = false" item-key="id">
            <template #item="{ element }">
              <v-card variant="outlined" width="200">
                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img :src="studentImg"></v-img>
                </v-avatar>
                <v-card-title>{{ element.name }}</v-card-title>
                <v-card-subtitle>{{ element.subtitle }}</v-card-subtitle>
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
                  <v-col md="4">
                    <v-card color="#ceffed">
                      <v-card-title>
                        第一排
                      </v-card-title>
                      <draggable style="margin-right: 10px" v-model="seats" v-bind="dragOptions" group="group1"
                        @start="drag = true" @end="drag = false" item-key="id">
                        <template #item="{ element }">
                          <v-card variant="outlined" width="200">
                            <v-avatar class="ma-3" size="125" rounded="0">
                              <v-img :src="studentImg"></v-img>
                            </v-avatar>
                            <v-card-title>{{ element.name }}</v-card-title>
                            <v-card-subtitle>{{ element.subtitle }}</v-card-subtitle>
                          </v-card>
                        </template>
                      </draggable>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h1>Seats</h1>
                    {{ seats }}
                  </v-col>
                  <v-col>
                    <h1>Students</h1>
                    {{ students }}
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
import { ref, computed } from 'vue';
import studentImg from '../assets/student.png';

const seats = ref([
  { id: 1, name: '空欄位', subtitle: '', student: null },
]);

const students = ref([
  { id: 1, name: 'student A', subtitle: '學生的課程進度' },
  { id: 2, name: 'student B', subtitle: '學生的課程進度' },
  { id: 3, name: 'student C', subtitle: '學生的課程進度' },
  { id: 4, name: 'student D', subtitle: '學生的課程進度' },
  { id: 5, name: 'student E', subtitle: '學生的課程進度' },
  { id: 6, name: 'student F', subtitle: '學生的課程進度' },
  { id: 7, name: 'student G', subtitle: '學生的課程進度' },
  { id: 8, name: 'student H', subtitle: '學生的課程進度' },
]);

const dragOptions = computed(() => ({
  animation: 100,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
}));



</script>
