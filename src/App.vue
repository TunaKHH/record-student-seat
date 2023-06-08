<template>
  <div id="app">
    <v-app>
      <v-content>
        <SeatLayout />
      </v-content>
    </v-app>
  </div>
</template>

<script>
// import Parent from "./components/ParentCards.vue";
import SeatLayout from "./components/SeatLayout.vue";

export default {
  name: "App",
  components: {
    // Parent,
    SeatLayout,
  }
};
</script>
