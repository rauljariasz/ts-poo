const date = new Date();
date.getDate();
console.log(date);

const date2 = new Date(1993, 1, 12); // 0 enero 11 dic
date2.getDay();
console.log(date2);

export class MyDate {
  year: number;
  month: number;
  day: number;

  // Podriamos inicializar las variables de nuestra clase arriba
  // pero una buena practica es hacerlo desde el constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 2, 12);
console.log(myDate);
