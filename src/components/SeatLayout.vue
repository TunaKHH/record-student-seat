<template>
  <v-container fluid>
    <AddStudentDialog :updateData="updateData" />
    <v-row>
      <v-col>
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
                  <v-col v-for="row in classroom" :key="row.id">
                    <SeatColumn :row="row" :dragOptions="dragOptions" />

                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h1>classroom</h1>
                    {{ classroom }}
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
import { computed } from 'vue';
import { useStore } from '@/store/classroom';
import SeatColumn from '@/components/SeatColumn';
import AddStudentDialog from '@/components/AddStudentDialog';


const { classroom } = useStore();
const dragOptions = computed(() => ({
  animation: 100,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
}));


const updateData = (students) => {
  classroom.addStudents(students);
};

</script>
