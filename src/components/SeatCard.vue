<template >
  <v-card variant="outlined" width="200">
    <v-avatar class="ma-3" size="125" rounded="0">
      <v-img :src="student.img"></v-img>
    </v-avatar>
    <v-card-title>{{ student.name }}</v-card-title>
    <v-card-subtitle>
      <v-text-field label="進度" :model-value="student.subtitle" prefix=""></v-text-field>
    </v-card-subtitle>
  </v-card>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['student'])

</script>
