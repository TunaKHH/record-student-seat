<template>
  <v-card :color="rowColor">
    <v-card-title>
      {{ localRow.title }}
      <br>
      (人數/上限: {{ localRow.seats?.length }}/ {{ localRow.seatLimit }})
    </v-card-title>
    <draggable style="min-height: 300px;" v-model="localRow.seats" :dragOptions="dragOptions" group="group1"
      @start="drag = true" @end="drag = false" item-key="id">
      <template #item="{ element }">
        <SeatCard :student="element" @updateStudent="updateStudent" />
      </template>
    </draggable>
  </v-card>
  <div>
    {{ localRow.seats }}
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import SeatCard from './SeatCard.vue'
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
    return {
      localRow: {},
      rowColor: '#ceffed',
    }
  },
  mounted() {
    this.localRow = this.row;
    if (this.localRow.title == '未安排座位') {
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
