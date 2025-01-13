const class1 = [
    {
        mssv: "PD01111",
        name: "Nguyen Van A",
        avgPoint: 8.9, 
        avgTrainingPoint: 7, 
        status: "pass",
    },
    {
        mssv: "PD02222",
        name: "Nguyen Van B",
        avgPoint: 8.9,
        avgTrainingPoint: 7,
        status: "pass",
    },
    {
        mssv: "PD03333",
        name: "Nguyen Van C",
        avgPoint: 4,
        avgTrainingPoint: 7,
        status: "failed",
    },
];

const class2 = [
    {
        mssv: "PD11111",
        name: "Nguyen Van D",
        avgPoint: 10,
        avgTrainingPoint: 9,
        status: "pass",
    },
    {
        mssv: "PD12222",
        name: "Nguyen Van E",
        avgPoint: 9,
        avgTrainingPoint: 8,
        status: "pass",
    },
    {
        mssv: "PD13333",
        name: "Nguyen Van F",
        avgPoint: 8,
        avgTrainingPoint: 7,
        status: "pass",
    },
];

// Sắp xếp danh sách sinh viên theo avgPoint từ cao xuống thấp
const sortedByAvgPoint = [...class1, ...class2].sort((a, b) => b.avgPoint - a.avgPoint);
console.log("Danh sách sinh viên theo avgPoint từ cao xuống thấp:");
console.log(sortedByAvgPoint);

// Sắp xếp danh sách sinh viên theo avgTrainingPoint từ cao xuống thấp
const sortedByAvgTrainingPoint = [...class1, ...class2].sort((a, b) => b.avgTrainingPoint - a.avgTrainingPoint);
console.log("Danh sách sinh viên theo avgTrainingPoint từ cao xuống thấp:");
console.log(sortedByAvgTrainingPoint);

// Tìm sinh viên có avgPoint và avgTrainingPoint cao nhất
const allStudents = [...class1, ...class2];
const maxAvgPointStudent = allStudents.reduce((max, student) =>
    (student.avgPoint > max.avgPoint ? student : max), allStudents[0]);
const maxAvgTrainingPointStudent = allStudents.reduce((max, student) =>
    (student.avgTrainingPoint > max.avgTrainingPoint ? student : max), allStudents[0]);

console.log("Thông tin sinh viên có avgPoint cao nhất:");
console.log(maxAvgPointStudent);

console.log("Thông tin sinh viên có avgTrainingPoint cao nhất:");
console.log(maxAvgTrainingPointStudent);
