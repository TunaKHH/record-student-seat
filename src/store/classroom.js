import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state() {
    return {
      unseated: [// 未安排座位的學生
        { id: 1, name: '助教一', subtitle: 'MAX' },
        { id: 2, name: '助教二', subtitle: 'MAX' },
        // 其他学生数据...
      ],
      seated: {// 已安排座位的學生
        1: {// 座位id
          title: '第一排',
          seats: [
          ]
        },
        2: {// 座位id
          title: '第二排',
          seats: [
          ]
        },
        3: {// 座位id
          title: '第三排',
          seats: [
          ]
        },
      },
    };
  },
  actions: {
    // for each 新增未安排座位的學生
    addStudents(students) {
      students.forEach((student) => {
        this.unseated.push({
          name: student,
          subtitle: '學生的課程進度'
        });
      });


    }
  },
  persist: {
    enabled: true,
  },
});
