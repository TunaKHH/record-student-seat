<template >
  <v-card v-if="!student.isBlank" variant="outlined" width="200" class="mb-2">
    <!-- <v-avatar class="ma-3" size="125" rounded="0">
      <v-img :src="student.img"></v-img>
    </v-avatar> -->
    <v-card-title>{{ student.name }}</v-card-title>
    <v-card-subtitle>
      <v-text-field label="學生的課程進度" :model-value="student.progressText"
        @update:model-value="updateProgressText"></v-text-field>
    </v-card-subtitle>
  </v-card>
  <v-card v-else variant="tonal" width="200" class="mb-2">
    <v-card-title>空位</v-card-title>
  </v-card>
</template>
<script>
export default {
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  emits: ['updateStudent'],
  setup(props, ctx) {
    // 通知父層更新學生進度文字
    const updateProgressText = function (progressText) {
      ctx.emit('updateStudent', {
        student: props.student,
        progressText: progressText
      });
    };
    return {
      updateProgressText,
    }
  },
}


</script>
