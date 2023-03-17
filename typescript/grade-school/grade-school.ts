type RosterType = {
  [key: number]: string[]
};

export class GradeSchool {
  private schoolRoster: RosterType = {};

  roster(): RosterType {
    let roster: RosterType = {};
    const grades: string[] = Object.keys(this.schoolRoster);
    
    grades.forEach((grade: string) => {
      roster[Number(grade)] = this.schoolRoster[Number(grade)].sort().slice()
    });
    return roster;
  }

  add(name: string, grade: number): void {
    Object.keys(this.schoolRoster).forEach((grade) => {
      const index: number = this.schoolRoster[Number(grade)].indexOf(name);
      if (index >= 0) {
        this.schoolRoster[Number(grade)].splice(index, 1);
      }
    });

    let students: string[] | undefined = this.schoolRoster[grade];
    if (students == null) {
      students = [];
    }
    students.push(name);
    students.sort();
    this.schoolRoster[grade] = students;
  }

  grade(grade: number): string[] {
    const students: string[] = this.schoolRoster[grade];
    if (students == null) {
      return [];
    } else {
      return students.sort().slice();
    }
  }
}
