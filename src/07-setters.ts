export class MyDate {
  constructor(
    public year: number = 1996,
    private _month: number = 7,
    private _day: number = 30
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    // code
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  // La ventaja de usar set, es que podemos aplicar codigo o logica antes de setear el nuevo estado
  // como por ejemplo:
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('El mes esta fuera de rango');
    }
  }
}

const myDate = new MyDate(2001, 6, 30);
myDate.month = 8;
console.log('Esto si se muestra');
myDate.month = 14;
console.log('Esto no se mostrara');
