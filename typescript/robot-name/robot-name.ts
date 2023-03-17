const db: Set<string> = new Set<string>();
const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Robot {
  public r_name: string;

  constructor() {
    this.r_name = this.#generateName();
  }

  public get name(): string {
    return this.r_name;
  }

  public resetName(): void {
    this.r_name = this.#generateName();
  }

  public static releaseNames(): void {
    db.clear();
  }

  #generateName(): string {
    let generatedName: string = '';

    while(generatedName === '' || db.has(generatedName)) {
      const firstLetter: string = letters[Math.floor(Math.random() * letters.length)];
      const secondLetter: string = letters[Math.floor(Math.random() * letters.length)];

      let numbers = '';
      for (let i = 0; i < 3; i++) {
        numbers = numbers.concat(String(Math.floor(Math.random() * 10)));
      }
      generatedName = `${firstLetter}${secondLetter}${numbers}`
    }

    db.add(generatedName);
    return generatedName;
  }
}