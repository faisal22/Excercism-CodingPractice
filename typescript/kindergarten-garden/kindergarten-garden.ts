//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS: Student[] = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
]

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const

type Student = string
type Plant = typeof PLANT_CODES[keyof typeof PLANT_CODES]
type Plants = Plant[]
type Pots = Plants[]
type StudentMap = { 
  [key: string]: number
};

export class Garden {
  private firstRow: string = '';
  private secondRow: string = '';
  private students: StudentMap = {};

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.firstRow = diagram.split('\n')[0];
    this.secondRow = diagram.split('\n')[1];
    students.sort();
    students.forEach((student: Student, i: number) => {
      this.students[student] = i;
    });
  }

  public plants(student: Student): Plants {
    const position: number = this.students[student] * 2;
    return [
      this.getPlantFromDiagram(this.firstRow[position]),
      this.getPlantFromDiagram(this.firstRow[position+1]),
      this.getPlantFromDiagram(this.secondRow[position]),
      this.getPlantFromDiagram(this.secondRow[position+1]),
    ];
  }

  public getPlantFromDiagram(plantLetter: string): Plant {
    switch(plantLetter) {
      case 'G': {
        return PLANT_CODES.G; 
      }
      case 'V': {
        return PLANT_CODES.V;
      }
      case 'R': {
        return PLANT_CODES.R;
      }
      case 'C': {
        return PLANT_CODES.C;    
      }
      default: {
        throw new Error('unexpected plant from diagram..');
      }
    }
  }
}
