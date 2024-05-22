console.log(Math.PI);
console.log(Math.max(1, 3, 4, 5, 8, 2, 1, 2, 3));

class MyMath {
  // Al agregarle "static" no es necesario estanciar, para poder acceder a este valor
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

// const math = new MyMath() <----- No es necesario
// math.PI <--- No es necesario

console.log(MyMath.PI);
console.log(MyMath.max(2, 4, 5, 6, 7, 10, 44));
