<template >
  <v-card variant="outlined" width="200">
    <!-- <v-avatar class="ma-3" size="125" rounded="0">
      <v-img :src="student.img"></v-img>
    </v-avatar> -->
    <v-card-title>{{ student.name }}</v-card-title>
    <v-card-subtitle>
      <v-text-field label="學生的課程進度" :model-value="student.progressText"
        @update:model-value="updateProgressText"></v-text-field>
    </v-card-subtitle>
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
  data() {
    return {
      localStudent: {},
    }
  },
  mounted() {
    this.localStudent = this.student;
  },
  methods: {
    updateProgressText(progressText) {
      this.localStudent.progressText = progressText;
    },
  },
}


</script>
