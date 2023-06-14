<template>
  <div id="app">
    <v-app>
      <v-container grid-list-xs>
        <v-row>
          <v-form>
            <v-text-field v-model="columnsLength" label="欄"></v-text-field>
            <v-text-field v-model="seatsLength" label="欄中座位上限"></v-text-field>
            <v-btn @click="regenerateColsAndSeats" block class="mt-2">重新生成座位</v-btn>
          </v-form>
        </v-row>
        <SeatLayout />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import SeatLayout from "./components/SeatLayout.vue";
import { useStore } from "./store/classroom";
import { ref } from 'vue'


export default {
  name: "App",
  components: {
    SeatLayout,
  },
  setup() {
    const classroomStore = useStore();
    const columnsLength = ref(1)
    const seatsLength = ref(3)

    // 重新產生座位表
    const regenerateColsAndSeats = () => {
      classroomStore.regenerateColsAndSeats(columnsLength.value, seatsLength.value);
    };
    return {
      regenerateColsAndSeats,
      columnsLength,
      seatsLength,
    };
  },
};
</script>
