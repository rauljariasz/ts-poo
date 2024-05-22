// function getValue(value: unknown) {
//     return value
// }

import { Dog } from './08-inheritance';

// function getValue(value: number | string) {
//     return value
// }

function getValue<T>(value: T) {
  return value;
}

getValue(12).toFixed(1);
getValue('sd').includes('sd');
// Ademas se podra tipar en la invocación
getValue<number>(23).toFixed(2);

const trueno = new Dog('raul', 'trueno', 1);

getValue<Dog>(trueno).ladrar();
