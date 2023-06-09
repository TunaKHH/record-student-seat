import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state() {
    return {
      unseated: [// 未安排座位的學生
        { id: 1, name: 'student A', subtitle: '學生的課程進度' },
        { id: 2, name: 'student B', subtitle: '學生的課程進度' },
        // 其他学生数据...
      ],
      seated: [// 已安排座位的學生
        {
          id: 1,
          title: '第一排',
          seats: [
            { id: 1, name: '空欄位', subtitle: '' },
          ]
        }
      ],
    };
  }
});
