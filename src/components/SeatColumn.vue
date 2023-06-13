<template>
  <v-card :color="rowColor">
    <v-card-title>
      {{ localRow.title }}
    </v-card-title>
    <draggable style="min-height: 300px;" v-model="localRow.seats" :dragOptions="dragOptions" group="group1"
      @start="drag = true" @end="drag = false" item-key="id">
      <template #item="{ element }">
        <SeatCard :student="element" />
      </template>
    </draggable>
  </v-card>
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
      required: true,
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
  components: {
    draggable,
    SeatCard,
  },
}

</script>
