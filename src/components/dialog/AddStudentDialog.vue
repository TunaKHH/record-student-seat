<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          匯入學生姓名
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          請將學生姓名貼上此處，每一行一個學生
        </v-card-text>
        <v-textarea label="此班學生" @update:modelValue="updateStudents"></v-textarea>
        <v-card-text>
          <v-row>
            <v-col>
              示意資料：
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-alert type="info" v-if="students.length > 0">
                {{ students }}
              </v-alert>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="gray-darken-1" variant="text" @click="dialog = false">
            關閉
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn color="primary" variant="text" @click="updateParentData">
            新增
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['updateData'],
  data() {
    return {
      dialog: false,
      students: [
        '鄭楷霖',
        '張琦昊',
        '陳曦',
        '蔡菲兒',
        '張喆媗',
        '陳紀輝',
        '劉珈綺',
        '謝洳玹',
        '劉育珅',
        '沈廷恩',
        '蘇展毅',
        '林侑威',
        '林侑頡',
        '黃銘偉',
        '黃翌安',
        '鐘賜翔',
        '胡芊杏'
      ]
    }
  },
  methods: {
    updateStudents(text) {
      console.log('updateStudents');
      this.students = text.split('\n');
      // 過濾空白行
      this.students = this.students.filter((student) => {
        return student.trim() !== '';
      });
    },
    updateParentData() {
      this.updateData(this.students);
      this.dialog = false;
    }

  }
}
</script>
