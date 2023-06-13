import { defineStore } from 'pinia';
import studentImg from '../assets/student.png'

// 生成學生假資料 給seats用
function generateStudents(length) {
  const students = [];
  for (let i = 0; i < length; i++) {
    students.push({
      id: i + 1,
      name: `學生${i + 1}`,
      progressText: '',
      img: studentImg
    });
  }
  return students;
}

// 生成每列的假資料
function generateCols(length) {
  const cols = [];
  for (let i = 0; i < length; i++) {
    cols.push({
      id: i + 1,
      title: `第${i + 1}排`,
      seatLimit: 3,
      seats: []
    });
  }
  return cols;
}

const students = generateStudents(10);
const cols = generateCols(3);

export const useStore = defineStore('store', {
  state() {
    return {
      classroom: [
        {
          id: 1,
          title: '未安排座位',
          seatLimit: -1,
          seats: students
        },
        ...cols
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
