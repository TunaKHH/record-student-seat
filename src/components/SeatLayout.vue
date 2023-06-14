<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <RegenerateSeatsDialog @regenerateColsAndSeats="regenerateColsAndSeats" />
      </v-col>
      <v-col>
        <AddStudentDialog :updateData="updateData" />
      </v-col>
      <v-col>
        <ExportSeatsDialog :classroom="classroomStore" />
      </v-col>
      <v-col>
        <ImportSeatsDialog @replaceClassroom="replaceClassroom" />
      </v-col>
      <v-col>
        <v-btn color="error" @click="preResetClassroom">清空學生</v-btn>
      </v-col>
      <v-col v-if="hasReset">
        <v-btn @click="restoreClassroom">
          復原
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container fluid>
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
                  <v-col>
                    *若拖曳到超出限制的欄位，將會把最後一個學生放到未安排座位的學生名單中
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="3" v-for="row in classroomStore.classroom" :key="row.id">
                    <SeatColumn :row="row" :dragOptions="dragOptions" />
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
import { computed, ref } from 'vue';
import { useStore } from '@/store/classroom';
import SeatColumn from '@/components/SeatColumn';
import AddStudentDialog from '@/components/dialog/AddStudentDialog';
import RegenerateSeatsDialog from '@/components/dialog/RegenerateSeatsDialog';
import ExportSeatsDialog from '@/components/dialog/ExportSeatsDialog';
import ImportSeatsDialog from '@/components/dialog/ImportSeatsDialog';

const classroomStore = useStore();
const hasReset = ref(false);
const dragOptions = computed(() => ({
  animation: 100,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost',
}));

const updateData = (students) => {
  classroomStore.addStudents(students);
};

// 重新產生座位表
const regenerateColsAndSeats = ({ columnsLength, seatsLength }) => {
  classroomStore.regenerateColsAndSeats(columnsLength, seatsLength);
};

// 取代座位表
const replaceClassroom = (classroom) => {
  // parse classroom to JSON
  const parsedClassroom = JSON.parse(classroom);
  classroomStore.replaceClassroom(parsedClassroom);
};

const preResetClassroom = () => {
  if (confirm('確定要清空學生嗎?')) {
    hasReset.value = true;
    // 暫存座位表 以便清空後可以還原
    classroomStore.tempClassroom = JSON.stringify(classroomStore.classroom);
    classroomStore.resetClassroom();
  }
};

// 還原座位表
const restoreClassroom = () => {
  // 確認是否要還原
  if (confirm('確定要還原嗎?')) {
    classroomStore.replaceClassroom(JSON.parse(classroomStore.tempClassroom));
    hasReset.value = false;
    alert('已還原');
  }
};

// 註冊state的監聽事件
classroomStore.$subscribe((mutation, state) => {
  // 匯入時classroom不是陣列的話就不執行
  if (Array.isArray(state.classroom) === false) return
  // 檢查每欄seats的數量是否有超過seatLimit的數量 若超過就將多出來的人放到未安排座位的欄位
  const unassignedRow = state.classroom.find((row) => row.title == '未安排座位');
  state.classroom.forEach((row) => {
    if (row.title != '未安排座位') {
      if (row.seats?.length > row.seatLimit) {
        const unassignedStudents = row.seats.splice(row.seatLimit);
        // 確認不是空位才放到未安排座位的欄位
        unassignedStudents.forEach((student) => {
          if (student.isBlank !== true) {
            unassignedRow.seats.push(student);
          }
        });
      }
    }
  });
})


</script>
