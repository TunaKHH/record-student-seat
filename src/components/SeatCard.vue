<template >
  <v-card v-if="!student.isBlank" variant="outlined" :width="`${width}rm`" class="mb-2" :height="height">
    <!-- <v-avatar class="ma-3" size="125" rounded="0">
      <v-img :src="student.img"></v-img>
    </v-avatar> -->
    <v-card-title>{{ student.name }}</v-card-title>
    <v-card-subtitle>
      <v-text-field label="學生的課程進度" :model-value="student.progressText"
        @update:model-value="updateProgressText"></v-text-field>
    </v-card-subtitle>
  </v-card>
  <v-card v-else variant="tonal" :width="`${width}rm`" class="mb-2" :height="height">
    <v-card-title>空位</v-card-title>
  </v-card>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  emits: ['updateStudent'],
  setup(props, ctx) {
    const width = ref(2);
    const height = ref('120px');

    // 通知父層更新學生進度文字
    const updateProgressText = function (progressText) {
      ctx.emit('updateStudent', {
        student: props.student,
        progressText: progressText
      });
    };
    return {
      updateProgressText,
      width,
      height,
    }
  },
}


</script>
