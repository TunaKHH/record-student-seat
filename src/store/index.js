import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state() {
    return {
      students: [
        { id: 1, name: 'student A', subtitle: '學生的課程進度' },
        { id: 2, name: 'student B', subtitle: '學生的課程進度' },
        // 其他学生数据...
      ],
      seats: [
        { id: 1, name: '空欄位', subtitle: '' },
        // 其他座位数据...
      ]
    };
  }
});
