import { defineStore } from 'pinia';
import studentImg from '../assets/student.png'

export const useStore = defineStore('store', {
  state() {
    return {
      classroom: [
        {
          id: 1,
          title: '未安排座位',
          seats: [
            { id: 1, name: '助教一', progressText: 'MAX', img: studentImg },
            { id: 2, name: '助教二', progressText: 'MAX', img: studentImg },
          ]
        },
        {// 已安排座位的學生
          id: 2,
          title: '第一排',
          seats: [
            { id: 3, name: '學生1', progressText: '', img: studentImg },
          ]

        },
        {// 已安排座位的學生
          id: 3,
          title: '第一排',
          seats: [
            { id: 4, name: '學生2', progressText: '', img: studentImg },
          ]

        },
        {// 已安排座位的學生
          id: 3,
          title: '第一排',
          seats: [
            { id: 4, name: '學生2', progressText: '', img: studentImg },
          ]

        }
      ]
    }



  },
  actions: {
    // for each 新增未安排座位的學生
    addStudents(students) {
      students.forEach((student) => {
        this.unseated.push({
          name: student,
          progressText: '',
          img: studentImg
        });
      });


    }
  },
  persist: {
    enabled: false,
  },
});
