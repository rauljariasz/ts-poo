export class Animal {
  //   Agregarle el acceso "protected" funcionara como el privado, ya que desde afuera no se podra modificar
  // pero si se podra usar en los hijos, ya que si lo ponemos directamente como private
  // No podremos usarlo en la herencia
  constructor(protected name: string) {}

  move() {
    console.log('Moving along.');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected dosomething() {
    console.log('doing');
  }
}

// Aca estamos heredando todos los metodos de Aniaml
export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }
  ladrar() {
    console.log(`Woof woof!! ${this.name}`);
    this.dosomething();
  }

  //   Aca estariamos modificando el move para que sea mas especifico
  move() {
    console.log('move as a doggy!.');
    // Mas sin embargo, podemos ejecutar aun el de la clase padre
    super.move();
  }
}

const relampago = new Dog('Relampago', 'Raul');
relampago.move();
