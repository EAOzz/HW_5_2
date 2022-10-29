let introductionScore = 5; // Сумма баллов за блок Введение
let gitScore = 50; // Сумма баллов за блок Git
let jsScore = 80; // Сумма баллов за блок JS
let score = [introductionScore, gitScore, jsScore]; // Создание массива из колл-ва баллов по каждому блоку
let sumScore = score.reduce(
  (previousValue, currentValue) => previousValue + currentValue
); // Подсчет суммы элементов массива
let averageScore = sumScore / score.length; // Подсчет среднего балла
let fullName = "Озерова Екатерина"; // Полное имя и фамилия судента
console.log(
  `Средний балл студента ${fullName.slice(
    0,
    9
  )} по всем модулям равен ${averageScore}`
); // Вывод на экран среднего балла студента с именем сокращенным до одной буквы
console.log(
  `Имя студента в другом формате ${fullName.slice(8, 9)}. ${fullName.slice(
    0,
    7
  )}`
); // Вывод имени студента в другом формате
