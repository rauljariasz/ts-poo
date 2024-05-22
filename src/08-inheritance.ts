export class Animal {
  constructor(public name: string, public age: number) {}

  move() {
    console.log('Moving along.');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

// Aca estamos heredando todos los metodos de Aniaml
export class Dog extends Animal {
  // Para agregar otra propiedad, llamariamos al constructor y agregariamos la nueva propiedad
  // con el acceso. Las propierdades que vienen de la clase padre, la agregamos sin el acceso
  // para evitar conflictos. Ademas adentro del constructor es necesario llamar a super(propiedad)
  constructor(public owner: string, name: string, age: number) {
    super(name, age);
  }
  ladrar() {
    console.log('Woof woof!!');
  }
}

const trueno = new Animal('trueno', 2);
console.log(trueno.greeting());

const relampago = new Dog('Relampago', 'Raul', 4);
relampago.ladrar();
