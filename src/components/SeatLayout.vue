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
                  <v-col v-for="row in classroomStore.classroom" :key="row.id">
                    <SeatColumn :row="row" :dragOptions="dragOptions" />
                  </v-col>
                </v-row>
                <!-- <v-row>
                  <v-col>
                    <h1>classroomStore.classroom</h1>
                    {{ classroomStore.classroom }}
                  </v-col>
                </v-row> -->
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

const classroomStore = useStore();

const dragOptions = computed(() => ({
  animation: 100,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
}));

const updateData = (students) => {
  classroomStore.addStudents(students);
};

// 註冊state的監聽事件
classroomStore.$subscribe((mutation, state) => {
  // 檢查每欄seats的數量是否有超過seatLimit的數量 若超過就將多出來的人放到未安排座位的欄位
  const unassignedRow = state.classroom.find((row) => row.title == '未安排座位');
  state.classroom.forEach((row) => {
    if (row.title != '未安排座位') {
      if (row.seats?.length > row.seatLimit) {
        const unassignedStudents = row.seats.splice(row.seatLimit);
        unassignedRow.seats.push(...unassignedStudents);
      }
    }
  });
})


</script>
