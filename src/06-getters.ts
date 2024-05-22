// Getters: Es una forma controlada de acceder a variables

export class MyDate {
  constructor(
    public year: number = 1996,
    public month: number = 7,
    //   Es bueno utilizar "_" en las propiedades privadas debido a que si vamos a implementar un getter
    // evitamos conflictos.
    private _day: number = 30
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
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

  //   Esta seria la forma de realizar un getter, y asi le damos "acceso"
  //  a esta propiedad como si fuera publica
  get day() {
    return this._day;
  }

  //  La finalidad es no crear una propiedad privada, si no que podemos crear un metodo get
  // y este funcionara desde afuera como si fuese una propiedad
  //   Es los getters es obligatorio retornar algo, si no retornas nada dara error!!.
  get isLeapYear(): boolean {
    // code
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2001);

console.log(myDate.day);

myDate.day; // <-- Podemos acceder
// myDate.day = 20  <--- No podriamos modificar

console.log(myDate.isLeapYear); // false
