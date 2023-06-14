<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props">
          重新生成座位
        </v-btn>
      </template>


      <v-card>
        <v-card-title>
          <span class="text-h5">重新生成座位</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="columnsLength" label="欄"></v-text-field>
          <v-text-field v-model="seatsLength" label="欄中座位上限"></v-text-field>
          <small>*重新生成將重置學生座位</small>
        </v-card-text>
        <v-card-actions>
          <v-btn color="gray-darken-1" variant="text" @click="dialog = false">
            關閉
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="regenerateColsAndSeats" color="primary" variant="text">重新生成座位</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  emits: ['regenerateColsAndSeats'],
  data() {
    return {
      dialog: false,
      columnsLength: 1,
      seatsLength: 3,
    }
  },
  methods: {
    regenerateColsAndSeats() {
      this.$emit('regenerateColsAndSeats', {
        columnsLength: this.columnsLength,
        seatsLength: this.seatsLength,
      })
      this.dialog = false;
    }

  }
}
</script>
