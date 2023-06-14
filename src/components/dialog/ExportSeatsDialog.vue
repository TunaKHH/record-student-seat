<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="secondary" v-bind="props">
          匯出座位表
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">匯出座位表</span>
        </v-card-title>
        <v-card-text>
          <v-textarea :model-value="JSON.stringify(classroom.classroom)">
          </v-textarea>
        </v-card-text>
        <v-card-actions>
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
  props: ['classroom'],
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
