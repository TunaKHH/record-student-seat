import { defineStore } from 'pinia';
import studentImg from '../assets/student.png'
import { v4 as uuidv4 } from 'uuid';

// 生成學生假資料 給seats用
function generateStudents(length) {
  const students = [];
  for (let i = 0; i < length; i++) {
    students.push({
      id: uuidv4(),
      name: `學生${i + 1}`,
      progressText: '',
      img: studentImg
    });
  }
  return students;
}

function generateBlankSeats(seatLimit) {
  const blankSeats = [];
  for (let i = 0; i < seatLimit; i++) {
    blankSeats.push({
      id: uuidv4(),
      isBlank: true
    });
  }
  return blankSeats;
}

// 生成每列的假資料
function generateCols(length, seatLimit = 10) {
  const cols = [];
  for (let i = 0; i < length; i++) {
    // 生成每欄的空位
    const blankSeats = generateBlankSeats(seatLimit);
    cols.push({
      id: uuidv4(),
      title: `第${i + 1}排`,
      seatLimit,
      seats: blankSeats
    });
  }
  return cols;
}

const students = generateStudents(4);
const cols = generateCols(3);

export const useStore = defineStore('store', {
  state() {
    return {
      classroom: [
        {
          id: uuidv4(),
          title: '未安排座位',
          seatLimit: -1,
          seats: students
        },
        ...cols
      ]
    }
  },
  actions: {
    // 新增學生們到未安排的座位
    addStudents(students) {
      students.forEach((student) => {
        // 取得classroom下最大的學生id
        // 新增學生到未安排的座位
        this.classroom[0].seats.push({
          id: uuidv4(),
          name: student,
          progressText: '',
          img: studentImg
        });
      });
    }
    ,
    // 重新生成欄位和座位
    regenerateColsAndSeats(colsLength, seatLimit) {
      const cols = generateCols(colsLength, seatLimit);
      this.classroom = [
        {
          id: uuidv4(),
          title: '未安排座位',
          seatLimit: -1,
          seats: students
        },
        ...cols
      ];
    }
  },
  persist: {
    enabled: false,
  },
});
