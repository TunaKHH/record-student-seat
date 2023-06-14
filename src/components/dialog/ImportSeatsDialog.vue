<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props">
          匯入座位表
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">匯入座位表</span>
        </v-card-title>
        <v-card-text>
          <v-textarea v-model="classroom" label="座位表" rows="12"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" variant="text" @click="importClassroom">
            匯入座位表
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="gray-darken-1" variant="text" @click="dialog = false">
            關閉
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  emits: ['replaceClassroom'],
  data() {
    return {
      dialog: false,
      classroom: '',
    }
  },
  methods: {
    // 匯入座位表
    importClassroom() {
      this.$emit('replaceClassroom', this.classroom)
      // 關閉 dialog
      this.dialog = false;
    }
  }
}
</script>
