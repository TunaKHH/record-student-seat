<template>
  <v-card :color="rowColor">
    <v-card-title>
      {{ row.title }}
      <br>
      (人數/上限: {{ row.seats?.length }}/ {{ row.seatLimit < 0 ? '無限制' : row.seatLimit }}) </v-card-title>
        <draggable style="min-height: 300px;" v-model="localRow.seats" :dragOptions="dragOptions" group="group1"
          @start="drag = true" @end="drag = false" item-key="id">
          <template #item="{ element }">
            <SeatCard :student="element" @updateStudent="updateStudent" />
          </template>
        </draggable>
  </v-card>
  <div>
    {{ row.seats }}
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import SeatCard from './SeatCard.vue'
import { useStore } from '@/store/classroom';

export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
    dragOptions: {
      type: Object,
      required: false,
    },
  },
  data() {
    const classroomStore = useStore();
    return {
      classroomStore,
      localRow: this.row,
      rowColor: '#ceffed',
    }
  },
  mounted() {
    if (this.row.title == '未安排座位') {
      this.rowColor = '#ffcece';
    }
  },

  methods: {
    updateStudent({ student, progressText }) {
      // 取得目前所在的座位id
      const seatId = student.id;
      // 更新座位資料
      this.localRow.seats = this.localRow.seats.map((seat) => {
        if (seat.id == seatId) {
          seat.progressText = progressText;
        }
        return seat;
      });
    }
  },
  components: {
    draggable,
    SeatCard,
  },
}

</script>
