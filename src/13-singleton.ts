export class MyService {
  // Se crea la instancia inicial
  static instance: MyService | null = null;

  // El constructor queda con acceso privado para evitar que se puedan crear nuevas o multiples instancias
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  //   Se crea un metodo estatico create que es lo que se encargara de crear la unica instancia
  static create(name: string) {
    // Aca validamos si es nula, cree una nueva
    if (MyService.instance === null) {
      console.log('deberia entrar una vez');
      MyService.instance = new MyService(name);
    }
    // De lo contrario que devuelva la instancia que ya fue creada
    return MyService.instance;
  }
}

const MyService1 = MyService.create('Servicio 1');
console.log(MyService1.getName()); // Servicio 1

const MyService2 = MyService.create('Servicio 2');
console.log(MyService2.getName()); // Servicio 1

const MyService3 = MyService.create('Servicio 3');
console.log(MyService3.getName()); // Servicio 1
