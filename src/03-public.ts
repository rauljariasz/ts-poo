// ¿Qué quiere decir acceso público?
// Esto quiere decir que podemos acceder a las propiedades y métodos del objeto desde el exterior.

// Public
// Por defecto, todas las propiedades y métodos son públicos pero si queremos aclarar en nuestro código el alcance de los mismos podemos utilizar la palabra reservada public.

// Desventajas del alcance público
// La desventaja que tenemos al tener una propiedad o método con alcance público es que estás pueden ser modificables desde fuera de la clase.

// Ejemplo

type PartOfTheCalendar = 'day' | 'month' | 'year';

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  add(amount: number, type: PartOfTheCalendar) {
    if (type === 'day') this.day += amount;
    if (type === 'month') this.month += amount;
    if (type === 'year') this.year += amount;
  }
}

const myDate = new MyDate(2000, 11, 10);
myDate.day = 12;
MyDate.prototype.add = function () {
  console.log('Change');
};

console.log(myDate.day);
myDate.add(13, 'day');
