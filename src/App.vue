<template>
  <div id="app">
    <v-app>
      <v-container grid-list-xs>
        <SeatLayout />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import SeatLayout from "./components/SeatLayout.vue";

export default {
  name: "App",
  components: {
    SeatLayout,
  }
};
</script>
