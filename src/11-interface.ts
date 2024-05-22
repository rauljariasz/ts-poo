interface Driver {
  database: string;
  password: string;
  port: number;

  conect(): void;
  disconnect(): void;
  isConected(name: string): boolean;
}

// Para usar una interface en una clase, la aplicamos con la palabra "implements"
class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}
  conect(): void {
    // code
  }
  disconnect(): void {
    // code
  }
  isConected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  conect(): void {
    // code
  }
  disconnect(): void {
    // code
  }
  isConected(name: string): boolean {
    // code
    return false;
  }
}
