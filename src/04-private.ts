export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  //   Este seria un metodo privado para usarlo interno en la clase
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  //   para acceder al dia, creamos este metodo para q sea publico
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 1);
myDate.add(3, 'days');
//   console.log(myDate.day); <-------- No se podria acceder
console.log(myDate.getDay());
