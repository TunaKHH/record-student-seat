<template>
  <draggable style="margin-right: 10px" v-model="students" v-bind="dragOptions" group="group1" @start="drag = true"
    @end="drag = false" item-key="id">
    <template #item="{ element }">
      <v-card variant="outlined" width="400" :title="element.name">
        <v-card-subtitle>Tuna{{ element.subtitle }}</v-card-subtitle>
        <v-card-text>
          This is content
        </v-card-text>
      </v-card>

    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  components: {
    draggable
  },
  setup() {
    const students = ref([
      { id: 1, name: 'student A', subtitle: '學生的課程進度' },
      { id: 2, name: 'student B', subtitle: '學生的課程進度' },
      { id: 3, name: 'student C', subtitle: '學生的課程進度' },
      { id: 4, name: 'student D', subtitle: '學生的課程進度' },
      { id: 5, name: 'student E', subtitle: '學生的課程進度' },
      { id: 6, name: 'student F', subtitle: '學生的課程進度' },
      { id: 7, name: 'student G', subtitle: '學生的課程進度' },
      { id: 8, name: 'student H', subtitle: '學生的課程進度' },
    ])

    const dragOptions = computed(() => {
      return {
        animation: 100,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    })

    return {
      students,
      dragOptions
    }
  }
})
</script>
