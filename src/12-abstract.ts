import { Animal, Dog } from './09-protected';

const animal = new Animal('Trueno');
animal.greeting();

const trueno = new Dog('Truenillo', 'Raul');
trueno.ladrar();

// cada vez que implementamos una clase abstracta, no podemos
// crear instancias de esa clase, si no solo de las clases hijas.
