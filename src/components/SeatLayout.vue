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
        <v-container fluid color="#ceffed">
          <v-row>
            <v-col>
              左營C教室-座位表
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-container fluid>
                <v-row>
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
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
import { defineComponent, ref, computed } from 'vue'
import studentImg from '../assets/student.png'

export default defineComponent({
  components: {
    draggable
  },
  setup() {
    // const studentImg = studentImg
    const seats = ref([
      { id: 1, name: '空欄位', subtitle: '' },
    ])

    const students = ref([
      { id: 1, name: 'student A', subtitle: '學生的課程進度' },
      { id: 2, name: 'student B', subtitle: '學生的課程進度' },
      { id: 3, name: 'student C', subtitle: '學生的課程進度' },
      { id: 4, name: 'student D', subtitle: '學生的課程進度' },
      { id: 5, name: 'student E', subtitle: '學生的課程進度' },
      { id: 6, name: 'student F', subtitle: '學生的課程進度' },
      { id: 7, name: 'student G', subtitle: '學生的課程進度' },
      { id: 8, name: 'student H', subtitle: '學生的課程進度' },
    ])

    const dragOptions = computed(() => {
      return {
        animation: 100,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    })



    const dropStudent = (seatId) => {
      return (event) => {
        const studentId = parseInt(event.dataTransfer.getData('text/plain'))
        const student = students.value.find((s) => s.id === studentId)

        const seat = seats.value.find((s) => s.id === seatId)
        if (seat) {
          seat.student = student
        }
      }
    }

    return {
      studentImg,
      seats,
      students,
      dragOptions,
      dropStudent,
    }
  }
})
</script>
